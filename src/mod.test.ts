import deepAssign from "./mod";

test("appends a new top-level property to a target", () => {
	const target = { a: 1 };
	expect(deepAssign(target, { b: 2 })).toBe(target);
	expect(target).toEqual({ a: 1, b: 2 });
});

test("modifies a top-level property of a target based on sources", () => {
	const target = { a: 1 };
	expect(deepAssign(target, { a: 2 })).toBe(target);
	expect(target).toEqual({ a: 2 });
});

test("keeps target intact when no sources are specified", () => {
	const target = { a: 1 };
	expect(deepAssign(target)).toBe(target);
});

test("ignores nullish sources", () => {
	expect(deepAssign({ a: 1 }, null, undefined, { a: 2 })).toEqual({ a: 2 });
});

test("doesn't merge properties of sources treated like primitives", () => {
	expect(deepAssign({ x: { 0: "a" } }, { x: ["b"] })).toEqual({ x: ["b"] });
	expect(deepAssign({ x: ["a", "b"] }, { x: ["c"] })).toEqual({ x: ["c"] });

	expect(
		deepAssign({ x: new Date("1996-12-03") }, { x: new Date("1997-11-21") }),
	).toEqual({ x: new Date("1997-11-21") });

	const s1 = { x: Object.create(null) };
	s1.x.b = 2;
	expect(deepAssign({ x: { a: 1 } }, s1)).toEqual({ x: { b: 2 } });
});
