
/**
 * Returns a random element from an array of any type.
 *
 * @param collection The array to pick a random element from.
 * @returns A random element from the array.
 */
export function getRandom(collection: any[]): any | undefined {
    // FIXME: Add types to the collection and the return value
    let randomIndex = Math.trunc(Math.random() * collection.length);
    return collection[randomIndex];
}


/**
 * Picks a specific property from an array of objects and returns
 * an array of the picked property values.
 *
 * @param objects The array of objects to pick the property from.
 * @param key The property key to pick.
 * @returns An array of the picked property values.
 */
export function pick(objects: any[], key: any): unknown[] {
    return objects.map(obj => obj[key]);
}

