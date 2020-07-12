<template>
  <video ref="videoElement" class="video-cantainer" :style="{width:width}" muted @click="clickHandler">
    {{ supportInfo }}
  </video>
</template>

<script>
import { authenticate, privatekey } from '@/utils/authentication-meida-server'
import FlvVideo from './components/FlvVideo'
export default {
  name: 'Camera',
  data () {
    return {
      // flvPlayer: null,
      supportInfo: '',
      flvVideo: null,
      isMounted: false
    }
  },
  props: {
    video: { type: Object, default: () => {} },
    width: {
      type: String,
      default: '100%'
    },
    show: { type: Boolean, default: true }
  },
  watch: {
    show: function (value) {
      if (!this.isMounted) return
      if (value) {
        this.start()
      } else {
        this.stop()
      }
    }
  },
  computed: {
  },
  created () {

  },
  mounted () {
    this.start()
    this.isMounted = true
  },
  beforeDestroy () {
    this.stop()
  },
  methods: {
    start () {
      this.flvVideo = new FlvVideo(authenticate(this.video.videoURL, privatekey, 'flv'), this.$refs.videoElement)
      this.flvVideo.start()
      this.supportInfo = this.flvVideo.supportInfo
    },
    stop () {
      this.flvVideo && this.flvVideo.stop()
    },
    clickHandler (e) {
      this.$emit('click', this.video)
      // this.stop()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="less" scoped>
  .video-cantainer {
    border: 1px solid #006600;
    display: block;
  }
</style>
