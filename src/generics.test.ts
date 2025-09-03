import { getRandom, pick } from './generics';
import { describe, it, expect } from '@jest/globals';

describe('Random values from arrays', () => {
    it('should return a random element from an array of strings', () => {
        const colors = ['red', 'green', 'blue'];

        const result = getRandom(colors);

        expect(colors).toContain(result);
    });

    it('should return a random element from an array of numbers', () => {
        const numbers = [1, 2, 3, 4, 5];

        const result = getRandom(numbers);

        expect(numbers).toContain(result);
    });
});


describe('Pick properties from objects', () => {

    const users = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 }
    ];

    it('should pick the "id" property from the user objects', () => {
        const ids = pick(users, 'id');

        expect(ids).toEqual([1, 2, 3]);
    });

    it('should pick the "name" property from the user objects', () => {
        const names = pick(users, 'name');
        expect(names).toEqual(['Alice', 'Bob', 'Charlie']);
    });

    it('should pick the "age" property from the user objects', () => {
        const ages = pick(users, 'age');
        expect(ages).toEqual([30, 25, 35]);
    });

    // FIXME: add types to the function to fix this test
    it.skip('should be able to use the ages as an array of numbers', () => {
        const ages = pick(users, 'age');

        //const youngest = Math.min(...ages);
        //expect(youngest).toBe(25);

        //const oldest = Math.max(...ages);
        //expect(oldest).toBe(35);
    });
});
