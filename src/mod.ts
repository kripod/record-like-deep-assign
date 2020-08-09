import { Misc, O, Union } from "ts-toolbelt";

export default function deepAssign<
	T extends { [key: string]: any },
	U extends Array<{ [key: string]: any } | null | undefined>
>(
	target: T,
	...sources: U
): O.Assign<
	T,
	Union.ListOf<NonNullable<U[number]>>,
	"deep",
	1,
	ReadonlyArray<any> | Misc.BuiltInObject
>;

export default function deepAssign(
	target: Record<string, any>,
	_: any, // Keep `length` property of the function `2`
) {
	const to = Object(target); // Mimic how `Object.assign` works
	for (let i = 1; i < arguments.length; ++i) {
		const source: { [key: string]: any } = arguments[i] || {};
		for (let keys = Object.keys(source), j = 0; j < keys.length; ++j) {
			const key = keys[j];
			const value = source[key];
			typeof value === "object" /* TODO: Check for "record", too */ &&
			value /* !== null */ &&
			Object instanceof (value.constructor || /* Returns false: */ deepAssign)
				? deepAssign(to[key], value) // Extend object literals only
				: (to[key] = value); // Treat non-literals like `Date` atomically
		}
	}
	return to;
}
