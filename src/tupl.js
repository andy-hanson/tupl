import { assert, pAdd } from './private/util'

export default (name, superType, doc, namesTypes, protoProps = { }, tuplProps = { }) => {
	let props = [ ]
	assert(namesTypes.length % 2 === 0)
	for (let i = 0; i < namesTypes.length; i = i + 2)
		props.push({ name: namesTypes[i], type: namesTypes[i + 1] })
	let args = props.map(_ => _.name).join(', ')

	let body = `return function ${name}(${args}) {
	if (!(this instanceof ${name}))
		return new ${name}(${args});
`

	props.forEach(({ name }) => {
		body = body +
			`this.${name} = ${name}; if (this.${name} === undefined) this.${name} = null;\n\t`
	})
	body = body + 'this.postConstruct()\n}'
	const type = Function(body)()
	const prototypeDefaults = {
		constructor: type,
		// Default is to do nothing. May be overridden.
		postConstruct() { },
		toJSON() {
			const obj = { }
			obj.type = this.type
			// Sort to make JSON rendering deterministic.
			Object.keys(this).sort().forEach(key => { obj[key] = this[key] })
			return obj
		},
		// Don't use JSON.stringify because we want other things below this to use their toString().
		toString() { return inspect(this) }
	}
	const prototype = Object.assign(
		Object.create(superType.prototype),
		prototypeDefaults,
		protoProps)
	const defaultProps = {
		doc,
		props,
		prototype,
		isTuple: true,
		toString() { return this.name }
	}
	return Object.assign(type, defaultProps, tuplProps)
}

export const abstract = (name, superType, doc, protoProps = { }, abstractProps = { }) => {
	const type = Function(
		`return function ${name}() { throw new Error("${name} is an abstract type.") }`
		)()
	Object.assign(type.prototype, protoProps)
	const defaultProps = {
		doc,
		prototype: Object.create(superType.prototype),
		toString() { return name }
	}
	return Object.assign(type, defaultProps, abstractProps)
}

const show = _ => {
	if (_ instanceof Array) {
		const parts = _.map(em => indent(show(em))).join(',\n\t')
		return `[\n\t${parts}\n]`
	} else if (_ === null)
		return 'null'
	else if (typeof _ === 'string')
		return `"${_}"`
	else
		return _.toString()
}

const inspect = obj => {
	const type = obj.constructor
	const props = type.props.map(({ name }) => '\n\t' + indent(show(obj[name]))).join(',')
	return `${type}(${props})`
}

const indent = str => str.replace(/\n/g, '\n\t')
