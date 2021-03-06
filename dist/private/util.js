if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	const assert = cond => {
		if (!cond) throw new Error('Assertion failed.');
	},
	     

	// Unlike Object.assign, does *not* invoke getters.
	assignProperties = function (object) {
		// TODO:ES6 Rest args
		const propertiesObjects = Array.prototype.slice.call(arguments, 1);
		for (const obj of propertiesObjects) for (const key in obj) Object.defineProperty(object, key, Object.getOwnPropertyDescriptor(obj, key));
	},
	      createObject = function (prototype) {
		// TODO:ES6 Rest args
		const propertiesObjects = Array.prototype.slice.call(arguments, 1);
		const res = Object.create(prototype);
		// TODO:ES6 assignProperties(res, ...propertiesObjects)
		assignProperties.apply(null, [res].concat(propertiesObjects));
		return res;
	},
	      pAdd = (obj, newName, newVal) => {
		if (Object.prototype.hasOwnProperty.call(obj, newName)) throw new Error(`Already has property ${ newName }, have ${ Object.keys(obj) }`);
		const _ = clone(obj);
		_[newName] = newVal;
		return _;
	};

	exports.assert = assert;
	exports.assignProperties = assignProperties;
	exports.createObject = createObject;
	exports.pAdd = pAdd;
	const clone = obj => {
		const nu = Object.create(Object.getPrototypeOf(obj));
		Object.getOwnPropertyNames(obj).forEach(name => {
			nu[name] = obj[name];
		});
		return nu;
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhdGUvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxPQUNOLE1BQU0sR0FBRyxJQUFJLElBQUk7QUFDaEIsTUFBSSxDQUFDLElBQUksRUFDUixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7RUFDckM7Ozs7QUFHRCxpQkFBZ0IsR0FBRyxVQUFTLE1BQU0sRUFBRTs7QUFFbkMsUUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ2xFLE9BQUssTUFBTSxHQUFHLElBQUksaUJBQWlCLEVBQ2xDLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0VBQy9FO09BRUQsWUFBWSxHQUFHLFVBQVMsU0FBUyxFQUFFOztBQUVsQyxRQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDbEUsUUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs7QUFFcEMsa0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7QUFDN0QsU0FBTyxHQUFHLENBQUE7RUFDVjtPQUVELElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxLQUFLO0FBQ2hDLE1BQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFDckQsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixHQUFFLE9BQU8sRUFBQyxPQUFPLEdBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUM3RSxRQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDcEIsR0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUNuQixTQUFPLENBQUMsQ0FBQTtFQUNSLENBQUE7Ozs7OztBQUVGLE9BQU0sS0FBSyxHQUFHLEdBQUcsSUFBSTtBQUNwQixRQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNwRCxRQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSTtBQUMvQyxLQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0dBQ3BCLENBQUMsQ0FBQTtBQUNGLFNBQU8sRUFBRSxDQUFBO0VBQ1QsQ0FBQSIsImZpbGUiOiJwcml2YXRlL3V0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Rcblx0YXNzZXJ0ID0gY29uZCA9PiB7XG5cdFx0aWYgKCFjb25kKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBc3NlcnRpb24gZmFpbGVkLicpXG5cdH0sXG5cblx0Ly8gVW5saWtlIE9iamVjdC5hc3NpZ24sIGRvZXMgKm5vdCogaW52b2tlIGdldHRlcnMuXG5cdGFzc2lnblByb3BlcnRpZXMgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0XHQvLyBUT0RPOkVTNiBSZXN0IGFyZ3Ncblx0XHRjb25zdCBwcm9wZXJ0aWVzT2JqZWN0cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBwcm9wZXJ0aWVzT2JqZWN0cylcblx0XHRcdGZvciAoY29uc3Qga2V5IGluIG9iailcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSlcblx0fSxcblxuXHRjcmVhdGVPYmplY3QgPSBmdW5jdGlvbihwcm90b3R5cGUpIHtcblx0XHQvLyBUT0RPOkVTNiBSZXN0IGFyZ3Ncblx0XHRjb25zdCBwcm9wZXJ0aWVzT2JqZWN0cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblx0XHRjb25zdCByZXMgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSlcblx0XHQvLyBUT0RPOkVTNiBhc3NpZ25Qcm9wZXJ0aWVzKHJlcywgLi4ucHJvcGVydGllc09iamVjdHMpXG5cdFx0YXNzaWduUHJvcGVydGllcy5hcHBseShudWxsLCBbcmVzXS5jb25jYXQocHJvcGVydGllc09iamVjdHMpKVxuXHRcdHJldHVybiByZXNcblx0fSxcblxuXHRwQWRkID0gKG9iaiwgbmV3TmFtZSwgbmV3VmFsKSA9PiB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5ld05hbWUpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBBbHJlYWR5IGhhcyBwcm9wZXJ0eSAke25ld05hbWV9LCBoYXZlICR7T2JqZWN0LmtleXMob2JqKX1gKVxuXHRcdGNvbnN0IF8gPSBjbG9uZShvYmopXG5cdFx0X1tuZXdOYW1lXSA9IG5ld1ZhbFxuXHRcdHJldHVybiBfXG5cdH1cblxuY29uc3QgY2xvbmUgPSBvYmogPT4ge1xuXHRjb25zdCBudSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpXG5cdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChuYW1lID0+IHtcblx0XHRudVtuYW1lXSA9IG9ialtuYW1lXVxuXHR9KVxuXHRyZXR1cm4gbnVcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NyYyJ9