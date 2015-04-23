export const
	assert = cond => {
		if (!cond)
			throw new Error('Assertion failed.')
	},

	pAdd = (obj, newName, newVal) => {
		if (Object.prototype.hasOwnProperty.call(obj, newName))
			throw new Error(`Already has property ${newName}, have ${Object.keys(obj)}`)
		const _ = clone(obj)
		_[newName] = newVal
		return _
	}

const clone = obj => {
	const nu = Object.create(Object.getPrototypeOf(obj))
	Object.getOwnPropertyNames(obj).forEach(name => {
		nu[name] = obj[name]
	})
	return nu
}
