export default function useFnOnce (fn: Function) {
  let hasRunIt = false

  return (...args: any) => {
    if (!hasRunIt) {
      hasRunIt = true
      fn(...args)
    }
  }
}
