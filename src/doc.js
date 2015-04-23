import { typeToString } from './type'

export default typesObj => {
	let s = ''
	Object.keys(typesObj).forEach(function(name) {
		const _ = typesObj[name]
		if (_.doc !== undefined)
			s = s + `${single(_)}\n\n`
	})
	return s
}

const single = _ => {
	let s = `## ${_}\n\n`

	if (_.props !== undefined)
		_.props.forEach(({ name, type }) =>
			s = s + `\t${name}: ${typeToString(type)}\n`)
	else
		s = s + '(abstract type)\n'

	return s + `\n${_.doc}`
}
