export enum Compare {
  LESS_THAN = -1,
  EQUALS = 0,
  BIGGER_THAN = 1
}

export default function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}