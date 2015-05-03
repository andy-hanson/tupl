import { assert } from './private/util'
import tupl from './tupl'

// TODO
export const Nullable = tupl('Nullable', Object,
	'doc',
	[
		'type', Object
	])
export const Union = tupl('Union', Object,
	'doc',
	[
		'typeA', Object,
		'typeB', Object
	])

export const typeToString = type => {
	if (type instanceof Function)
		return type.name
	if (type instanceof Set)
		return `${setToArray(type).map(_ => `'${_}'`).join(' | ')}`
	if (type instanceof Array) {
		assert(type.length === 1)
		return `[${typeToString(type[0])}]`
	}
	return type.toString()
}

const setToArray = set => {
	const out = []
	set.forEach(_ => out.push(_))
	return out
}
