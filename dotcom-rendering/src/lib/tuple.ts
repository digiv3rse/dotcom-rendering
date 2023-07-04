/**
 * Type-guard that check whether an array contains at least a single item.
 *
 * If `true`, the type is narrowed from T[] to the [T, ...T[]] tuple,
 * which safely allows accessing the first item.
 */
export const nonEmpty = <T>(arr: T[]): arr is [T, ...T[]] => arr.length >= 1;

/** A tuple of up to 12 items. Larger tuples will not be narrowed */
export type Tuple<T, N extends number> = N extends 12
	? [T, T, T, T, T, T, T, T, T, T, T, T]
	: N extends 11
	? [T, T, T, T, T, T, T, T, T, T, T]
	: N extends 10
	? [T, T, T, T, T, T, T, T, T, T]
	: N extends 9
	? [T, T, T, T, T, T, T, T, T]
	: N extends 8
	? [T, T, T, T, T, T, T, T]
	: N extends 7
	? [T, T, T, T, T, T, T]
	: N extends 6
	? [T, T, T, T, T, T]
	: N extends 5
	? [T, T, T, T, T]
	: N extends 4
	? [T, T, T, T]
	: N extends 3
	? [T, T, T]
	: N extends 2
	? [T, T]
	: N extends 1
	? [T]
	: N extends 0
	? []
	: T[];

/**
 * Type-guard for whether an array is a tuple of exact length.
 *
 * Only tuples of 12 elements or less will be narrowed.
 */
export const isTuple = <T, N extends number>(
	arr: Array<T> | ReadonlyArray<T>,
	count: N,
): arr is Tuple<T, N> => arr.length === count;

/**
 * Type-guard for whether an array is at least a certain number of elements
 *
 * Can only guarantee up to 12 elements
 */
export const isTupleOrGreater = <T, N extends number>(
	arr: Array<T> | ReadonlyArray<T>,
	count: N,
): arr is [...Tuple<T, N>, ...Array<T>] => arr.length >= count;

/** Type where a tuple can have any 'n' number of items or less  */
type TupleOrLess<
	T,
	N extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
> = N extends 12
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>
	: N extends 11
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>
	: N extends 10
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>
	: N extends 9
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>
	: N extends 8
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>
	: N extends 7
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>
	: N extends 6
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5 | 6>
	: N extends 5
	? Tuple<T, 0 | 1 | 2 | 3 | 4 | 5>
	: N extends 4
	? Tuple<T, 0 | 1 | 2 | 3 | 4>
	: N extends 3
	? Tuple<T, 0 | 1 | 2 | 3>
	: N extends 2
	? Tuple<T, 0 | 1 | 2>
	: N extends 1
	? Tuple<T, 0 | 1>
	: undefined;

/**
 * Takes the first 'n' number of items in an array
 *
 * By returning `TupleOrLess` you receive a type-safe response
 * that can be checked exhaustively.
 */
export const takeFirst = <
	T,
	N extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
>(
	array: Array<T> | ReadonlyArray<T>,
	count: N,
): TupleOrLess<T, N> =>
	//@ts-expect-error – this output is tested by jest and it’s a very helpful method
	array.slice(0, count);
