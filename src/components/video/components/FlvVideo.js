import flvjs from 'flv.js'

class FlvVideo {
  constructor(url, videoElement) {
    this._url = url
    this.videoElement = videoElement
    this.flvPlayer = null
    this._receivedCanPlay = false
    this.e = {
      canplayHandler: this.__canplayHandler.bind(this),
      loadingCompleteHandler: this.__loadingCompleteHandler.bind(this),
      errorHandler: this.__errorHandler.bind(this)
    }
  }

  get url() {
    return this._url
  }
  set url(value) {
    this._url = value
  }

  get featureInfo() {
    return flvjs.getFeatureList || ''
  }

  get supportInfo() {
    return flvjs.isSupported() ? '' : '此浏览器不支持播放器'
  }

  start() {
    this._init()
    this._link()
  }

  stop() {
    // this.videoElement && this.videoElement.removeEventListener("canplay", this.e.canplayHandler);
    if (typeof this.flvPlayer !== 'undefined') {
      if (this.flvPlayer != null) {
        this.flvPlayer.off(flvjs.Events.LOADING_COMPLETE, this.e.loadingCompleteHandler)
        this.flvPlayer.off(flvjs.Events.ERROR, this.e.errorHandler)
        this._destroy()
      }
    }
  }

  _reconnect() {
    this.stop()
    this._init()
    this._link()
  }

  _destroy() {
    this.flvPlayer.pause()
    this.flvPlayer.unload()
    this.flvPlayer.detachMediaElement()
    this.flvPlayer.destroy()
    this.flvPlayer = null
  }

  _init() {
    if (!flvjs.isSupported()) {
      console.error('flvjs is not supported!')
      return
    }

    if (typeof this.flvPlayer !== 'undefined') {
      if (this.flvPlayer != null) {
        this.flvPlayer.unload()
        this.flvPlayer.detachMediaElement()
        this.flvPlayer.destroy()
        this.flvPlayer = null
      }
    }

    this.flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: this._url,
      hasAudio: false
    }, {
      enableWorker: true, // default -> false
      enableStashBuffer: false, // default -> true
      stashInitialSize: 128 // default -> 384k
    })
  }

  _link() {
    this.videoElement.addEventListener('canplay', this.e.canplayHandler)

    this.flvPlayer.on(flvjs.Events.LOADING_COMPLETE, this.e.loadingCompleteHandler)
    this.flvPlayer.on(flvjs.Events.ERROR, this.e.errorHandler)

    this.flvPlayer.attachMediaElement(this.videoElement)
    this.flvPlayer.load()
    // this.flvPlayer.play();
  }

  __loadingCompleteHandler() {
    console.log(`${flvjs.Events.LOADING_COMPLETE} -> `)
    this._reconnect()
  }

  __canplayHandler(...args) {
    console.log(`videoelement canplay -> `)
    console.log(args)
    // if (this._receivedCanPlay) return;

    this.flvPlayer && this.flvPlayer.play()
    this._receivedCanPlay = true
    this.videoElement.removeEventListener('canplay', this.e.canplayHandler)
  }

  __errorHandler(errorType, errorDetail, info) {
    console.log(`${flvjs.Events.ERROR} -> `)
    console.log([errorType, errorDetail, info])
    if (errorType === flvjs.ErrorTypes.NETWORK_ERROR &&
            errorDetail === flvjs.ErrorDetails.NETWORK_UNRECOVERABLE_EARLY_EOF) {
      this._reconnect()
    }
  }
}

export default FlvVideo
