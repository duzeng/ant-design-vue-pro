const crypto = require('crypto')

function createHash (algorithm, org) {
  const hash = crypto.createHash(algorithm)
  hash.update(org)
  return hash.digest('hex')
}

export function md5 (org) {
  return createHash('md5', org)
}

export function sha1 (org) {
  return createHash('sha1', org)
}

export function sha256 (org) {
  return createHash('sha256', org)
}
