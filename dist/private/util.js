if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var assert = function assert(cond) {
		if (!cond) throw new Error('Assertion failed.');
	},
	    pAdd = function pAdd(obj, newName, newVal) {
		if (Object.prototype.hasOwnProperty.call(obj, newName)) throw new Error('Already has property ' + newName + ', have ' + Object.keys(obj));
		var _ = clone(obj);
		_[newName] = newVal;
		return _;
	};

	exports.assert = assert;
	exports.pAdd = pAdd;
	var clone = function clone(obj) {
		var nu = Object.create(Object.getPrototypeOf(obj));
		Object.getOwnPropertyNames(obj).forEach(function (name) {
			nu[name] = obj[name];
		});
		return nu;
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhdGUvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUNOLE1BQU0sR0FBRyxnQkFBQSxJQUFJLEVBQUk7QUFDaEIsTUFBSSxDQUFDLElBQUksRUFDUixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7RUFDckM7S0FFRCxJQUFJLEdBQUcsY0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNoQyxNQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQ3JELE1BQU0sSUFBSSxLQUFLLDJCQUF5QixPQUFPLGVBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRyxDQUFBO0FBQzdFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNwQixHQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFBO0FBQ25CLFNBQU8sQ0FBQyxDQUFBO0VBQ1IsQ0FBQTs7U0FYRCxNQUFNLEdBQU4sTUFBTTtTQUtOLElBQUksR0FBSixJQUFJO0FBUUwsS0FBTSxLQUFLLEdBQUcsZUFBQSxHQUFHLEVBQUk7QUFDcEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDcEQsUUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUMvQyxLQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0dBQ3BCLENBQUMsQ0FBQTtBQUNGLFNBQU8sRUFBRSxDQUFBO0VBQ1QsQ0FBQSIsImZpbGUiOiJwcml2YXRlL3V0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Rcblx0YXNzZXJ0ID0gY29uZCA9PiB7XG5cdFx0aWYgKCFjb25kKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBc3NlcnRpb24gZmFpbGVkLicpXG5cdH0sXG5cblx0cEFkZCA9IChvYmosIG5ld05hbWUsIG5ld1ZhbCkgPT4ge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuZXdOYW1lKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQWxyZWFkeSBoYXMgcHJvcGVydHkgJHtuZXdOYW1lfSwgaGF2ZSAke09iamVjdC5rZXlzKG9iail9YClcblx0XHRjb25zdCBfID0gY2xvbmUob2JqKVxuXHRcdF9bbmV3TmFtZV0gPSBuZXdWYWxcblx0XHRyZXR1cm4gX1xuXHR9XG5cbmNvbnN0IGNsb25lID0gb2JqID0+IHtcblx0Y29uc3QgbnUgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKVxuXHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0bnVbbmFtZV0gPSBvYmpbbmFtZV1cblx0fSlcblx0cmV0dXJuIG51XG59XG4iXSwic291cmNlUm9vdCI6Ii9zcmMifQ==