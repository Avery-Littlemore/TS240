function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
interface customObject {
  [key: string]: unknown;
}

const obj = {
  name: "John",
  age: 30,
};

const x1 = getProperty(obj, "name");
const y1 = getProperty(obj, "age");