if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', './private/util', './tupl'], function (exports, _privateUtil, _tupl) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _tupl2 = _interopRequire(_tupl);

	// TODO
	var Nullable = _tupl2('Nullable', Object, 'doc', ['type', Object]);
	exports.Nullable = Nullable;
	var Union = _tupl2('Union', Object, 'doc', ['typeA', Object, 'typeB', Object]);

	exports.Union = Union;
	var typeToString = (function (_typeToString) {
		function typeToString(_x) {
			return _typeToString.apply(this, arguments);
		}

		typeToString.toString = function () {
			return _typeToString.toString();
		};

		return typeToString;
	})(function (type) {
		if (type instanceof Function) return type.name;
		if (type instanceof Set) return '' + setToArray(type).map(function (_) {
			return '\'' + _ + '\'';
		}).join(' | ');
		if (type instanceof Array) {
			_privateUtil.assert(type.length === 1);
			return '[' + typeToString(type[0]) + ']';
		}
		return type.toString();
	});

	exports.typeToString = typeToString;
	var setToArray = function setToArray(set) {
		var out = [];
		set.forEach(function (_) {
			return out.push(_);
		});
		return out;
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSU8sS0FBTSxRQUFRLEdBQUcsT0FBSyxVQUFVLEVBQUUsTUFBTSxFQUM5QyxLQUFLLEVBQ0wsQ0FDQyxNQUFNLEVBQUUsTUFBTSxDQUNkLENBQUMsQ0FBQTtTQUpVLFFBQVEsR0FBUixRQUFRO0FBS2QsS0FBTSxLQUFLLEdBQUcsT0FBSyxPQUFPLEVBQUUsTUFBTSxFQUN4QyxLQUFLLEVBQ0wsQ0FDQyxPQUFPLEVBQUUsTUFBTSxFQUNmLE9BQU8sRUFBRSxNQUFNLENBQ2YsQ0FBQyxDQUFBOztTQUxVLEtBQUssR0FBTCxLQUFLO0FBT1gsS0FBTSxZQUFZOzs7Ozs7Ozs7O0lBQUcsVUFBQSxJQUFJLEVBQUk7QUFDbkMsTUFBSSxJQUFJLFlBQVksUUFBUSxFQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7QUFDakIsTUFBSSxJQUFJLFlBQVksR0FBRyxFQUN0QixZQUFVLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2lCQUFRLENBQUM7R0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFO0FBQzVELE1BQUksSUFBSSxZQUFZLEtBQUssRUFBRTtBQUMxQixnQkF0Qk8sTUFBTSxDQXNCTixJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQ3pCLGdCQUFXLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBRztHQUNuQztBQUNELFNBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0VBQ3RCLENBQUEsQ0FBQTs7U0FWWSxZQUFZLEdBQVosWUFBWTtBQVl6QixLQUFNLFVBQVUsR0FBRyxvQkFBQSxHQUFHLEVBQUk7QUFDekIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFBO0FBQ2QsS0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7VUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUFBLENBQUMsQ0FBQTtBQUM3QixTQUFPLEdBQUcsQ0FBQTtFQUNWLENBQUEiLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vcHJpdmF0ZS91dGlsJ1xuaW1wb3J0IHR1cGwgZnJvbSAnLi90dXBsJ1xuXG4vLyBUT0RPXG5leHBvcnQgY29uc3QgTnVsbGFibGUgPSB0dXBsKCdOdWxsYWJsZScsIE9iamVjdCxcblx0J2RvYycsXG5cdFtcblx0XHQndHlwZScsIE9iamVjdFxuXHRdKVxuZXhwb3J0IGNvbnN0IFVuaW9uID0gdHVwbCgnVW5pb24nLCBPYmplY3QsXG5cdCdkb2MnLFxuXHRbXG5cdFx0J3R5cGVBJywgT2JqZWN0LFxuXHRcdCd0eXBlQicsIE9iamVjdFxuXHRdKVxuXG5leHBvcnQgY29uc3QgdHlwZVRvU3RyaW5nID0gdHlwZSA9PiB7XG5cdGlmICh0eXBlIGluc3RhbmNlb2YgRnVuY3Rpb24pXG5cdFx0cmV0dXJuIHR5cGUubmFtZVxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIFNldClcblx0XHRyZXR1cm4gYCR7c2V0VG9BcnJheSh0eXBlKS5tYXAoXyA9PiBgJyR7X30nYCkuam9pbignIHwgJyl9YFxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0YXNzZXJ0KHR5cGUubGVuZ3RoID09PSAxKVxuXHRcdHJldHVybiBgWyR7dHlwZVRvU3RyaW5nKHR5cGVbMF0pfV1gXG5cdH1cblx0cmV0dXJuIHR5cGUudG9TdHJpbmcoKVxufVxuXG5jb25zdCBzZXRUb0FycmF5ID0gc2V0ID0+IHtcblx0Y29uc3Qgb3V0ID0gW11cblx0c2V0LmZvckVhY2goXyA9PiBvdXQucHVzaChfKSlcblx0cmV0dXJuIG91dFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc3JjIn0=