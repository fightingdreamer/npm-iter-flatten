/**
  Flatten items from iterator by one level
  @returns iterator over flattened items
*/
export function* flatten<T>(iterator: Iterable<Iterable<T>>): Generator<T> {
  for (const iter of iterator) {
    for (const item of iter) {
      yield item;
    }
  }
}
