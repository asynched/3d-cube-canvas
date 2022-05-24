export class Color {
  static BLACK = '#000'
  static WHITE = '#fff'
  static RED = '#f00'
}

/**
 * Enumerates over an iterable, yielding the index of each element.
 * @template T Type of the iterable.
 * @param { Iterable<T, void, void> } source Source item to be iterated.
 * @returns { Generator<[number, T], void, void> } Generator that yields the index of each element.
 */
export function* enumerate(source) {
  let i = 0

  for (const item of source) {
    yield [i++, item]
  }
}

/**
 * Creates a generator that yields the elements of an iterable.
 * @param { number } start Start of the range
 * @param { number } end End of the range
 * @returns { Generator<number, void, void> } Generator that yields the elements of the range.
 */
export function* range(start, end) {
  for (let i = start; i < end; i++) {
    yield i
  }
}
