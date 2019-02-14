/* EXAMPLE 1
export default '10';
*/

/* EXAMPLE 2
const a = { foo: 'bar' };
export default a;
*/

/* EXAMPLE 3
export const foo = 10;
export const bar = 20;
export default 30;
*/

/* EXAMPLE 4
export const foo = 10;
export const bar = 20;
export default 30;
*/

/* EXAMPLE 5
export { default } from './c';
export { default as c } from './c';
*/

/* EXAMPLE 6
export { a as default, b as foo } from './c';
*/

/* EXAMPLE 7 */
export * from './c';
