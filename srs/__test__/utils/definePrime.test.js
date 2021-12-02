import { definePrime } from "../../utils/definePrime";
    const simple = 17;
    const complex = 18;

xdescribe("tests for definePrime function", () => {
    it("should operate correctly with simple number", () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
    }),
    it("should operate correctly with complex number", () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
    }),
    it("should operate correctly with invalid number", () => {
        expect(definePrime(1001)).toBe(`Данные неверны`)
    })
});

xdescribe("tests for definePrime function", () => {
    it("should operate correctly with simple, complex, invalid number", () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
        expect(definePrime(1001)).toBe(`Данные неверны`);
    });
});
