/* EXAMPLE 1
import b from './b';
console.log(b); // 10
*/

/* EXAMPLE 2
import b from './b';
console.log(b.foo); // bar
*/

/* EXAMPLE 3
import b, { foo, bar as baz } from './b';
console.log(foo, baz, b); // 10 20 30
*/

/* EXAMPLE 4
import * as b from './b';
console.log(b); // { foo: 10, bar: 20, default: 30, };
*/

/* EXAMPLE 5
import b, { c } from './b';
console.log(b, c); // 10 10
*/

/* EXAMPLE 6
import xyz, { foo, b, c } from './b'; // warning b,c were not found!
console.log(xyz, foo, b, c); // 10 20 undefined undefined
*/

/* EXAMPLE 7 */
import { a, b, c } from './b';
console.log(a, b, c); // 10 20 30
