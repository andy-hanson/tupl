export const
	assert = cond => {
		if (!cond)
			throw new Error('Assertion failed.')
	},

	// Unlike Object.assign, does *not* invoke getters.
	assignProperties = function(object) {
		// TODO:ES6 Rest args
		const propertiesObjects = Array.prototype.slice.call(arguments, 1)
		for (const obj of propertiesObjects)
			for (const key in obj)
				Object.defineProperty(object, key, Object.getOwnPropertyDescriptor(obj, key))
	},

	createObject = function(prototype) {
		// TODO:ES6 Rest args
		const propertiesObjects = Array.prototype.slice.call(arguments, 1)
		const res = Object.create(prototype)
		// TODO:ES6 assignProperties(res, ...propertiesObjects)
		assignProperties.apply(null, [res].concat(propertiesObjects))
		return res
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
