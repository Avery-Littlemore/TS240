// function getProperty(obj, key) {
//   return obj[key];
// }

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}