export function isUndef(v) {
  return v === undefined || v === null
}
export function isDef(v) {
  return v !== undefined && v !== null
}
export function isTrue(v) {
  return v === true
}
export function isFalse(v) {
  return v === false
}
export function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Query an element selector if it's not an element already.
 */
export function query(el) {
  if (typeof el === 'string') {
    const selected =  document.querySelector(el)
    if (!selected) {
      console.log(`Cannot find element: ${el}`)
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

export function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

