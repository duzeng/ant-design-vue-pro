const rgbReg = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
/**
 *
 * @param { rgb字符串} rgbString
 * @param {alpha通道值,小数} fade
 */
export function rgba (rgbString, fade) {
  const result = rgbReg.exec(rgbString) // ['010-12345', '010', '12345']
  if (!result) return []
  if (result.length < 4) return []
  const [, r, g, b] = result
  return `rgba(${r},${g},${b},${fade})`
}
