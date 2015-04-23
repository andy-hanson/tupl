Tuple types for JavaScript.

## Install

package.json/bower.json:

	dependencies: {
		"tupl": "andy-hanson/tupl"
	}

## Use

	import tupl from 'tupl/dist/tupl'

	export default tupl(
		// Name is 'Point'. This helps with debugging.
		'Point',
		// Inherits from Object.
		Object,
		// Documentation.
		'2D Cartesian coordinate.',
		[
			'x', Number,
			'y', Number
		],
		// Properties of Point.prototype.
		{
			transpose() {
				// Construct by calling as a function with members in order.
				return Point(y, x)
			}
		},
		// Properties of Point.
		{
			origin: Point(0, 0)
		})


### abstract

This is an easy way of creating an abstract type.

	import { abstract } from 'tupl/dist/tupl'

	export default abstract(
		'Multiplicative', Object,
		'Something that can multiply()',
		// Properties of Multiplicative.prototype.
		{
			square() {
				return this.multiply(this)
			}
		},
		// Properties of Multiplicative.
		{
			two: 2
		})


### type

Tupl doesn't do type-checking yet, but you can represent the types of members like so:

	import { Nullable, Union } from 'tupl/dist/type'

	tupl('Sample', Object, 'doc',
		[
			// Use a Function. tupl, or abstract.
			'foo', Number,
			// Array whose elements are all of the inner type.
			'bar': [Number],
			// Value that may be null.
			'baz', Nullable(Number),
			// Allow one of several types.
			'bam', Union(Number, [Number])
		])


### doc

You can document your types as a Markdown document.

Just pass in an object some of whose members are types.

	import doc from 'tupl/dist/doc'
	import * as Exports from './my-module-to-doc'

	console.log(doc(Exports))

The source code for doc.js should be easy to modify if you want your own formatting.


## Build

	npm install
	./gulp all
