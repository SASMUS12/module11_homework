import { getMonth } from "../../11.7UnitTests/getMonth";

const March = 3;
const June = 6;
const November = 11;

describe("tests for getMouth function", () => {
    it("Matching the number name of the month March", () => {
        expect(getMonth(March)).toBe(`Март ${March} месяц года`)
    }),
    it("Matching the number name of the month June", () => {
        expect(getMonth(June)).toBe(`Июнь ${June} месяц года`)
    }),
    it("Matching the number name of the month November", () => {
        expect(getMonth(November)).toBe(`Ноябрь ${November} месяц года`)
    }),
    it("Matching the number name of the month November", () => {
        expect(getMonth(13)).toBe(`Вы ввели не правельную цыфру. Введите цыфру из диапозона от 1 до 12 включительно.`)
    })
});
