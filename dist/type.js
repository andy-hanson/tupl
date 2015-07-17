if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', './private/util', './tupl'], function (exports, _privateUtil, _tupl) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tupl2 = _interopRequireDefault(_tupl);

	// TODO
	const Nullable = (0, _tupl2.default)('Nullable', Object, 'doc', ['type', Object]);
	exports.Nullable = Nullable;
	const Union = (0, _tupl2.default)('Union', Object, 'doc', ['typeA', Object, 'typeB', Object]);

	exports.Union = Union;
	const typeToString = type => {
		if (type instanceof Function) return type.name;
		if (type instanceof Set) return `${ setToArray(type).map(_ => `'${ _ }'`).join(' | ') }`;
		if (type instanceof Array) {
			(0, _privateUtil.assert)(type.length === 1);
			return `[${ typeToString(type[0]) }]`;
		}
		return type.toString();
	};

	exports.typeToString = typeToString;
	const setToArray = set => {
		const out = [];
		set.forEach(_ => out.push(_));
		return out;
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSU8sT0FBTSxRQUFRLEdBQUcsb0JBQUssVUFBVSxFQUFFLE1BQU0sRUFDOUMsS0FBSyxFQUNMLENBQ0MsTUFBTSxFQUFFLE1BQU0sQ0FDZCxDQUFDLENBQUE7O0FBQ0ksT0FBTSxLQUFLLEdBQUcsb0JBQUssT0FBTyxFQUFFLE1BQU0sRUFDeEMsS0FBSyxFQUNMLENBQ0MsT0FBTyxFQUFFLE1BQU0sRUFDZixPQUFPLEVBQUUsTUFBTSxDQUNmLENBQUMsQ0FBQTs7O0FBRUksT0FBTSxZQUFZLEdBQUcsSUFBSSxJQUFJO0FBQ25DLE1BQUksSUFBSSxZQUFZLFFBQVEsRUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0FBQ2pCLE1BQUksSUFBSSxZQUFZLEdBQUcsRUFDdEIsT0FBTyxDQUFDLEdBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQTtBQUM1RCxNQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7QUFDMUIsb0JBdEJPLE1BQU0sRUFzQk4sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUN6QixVQUFPLENBQUMsQ0FBQyxHQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtHQUNuQztBQUNELFNBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0VBQ3RCLENBQUE7OztBQUVELE9BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSTtBQUN6QixRQUFNLEdBQUcsR0FBRyxFQUFFLENBQUE7QUFDZCxLQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDN0IsU0FBTyxHQUFHLENBQUE7RUFDVixDQUFBIiwiZmlsZSI6InR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL3ByaXZhdGUvdXRpbCdcbmltcG9ydCB0dXBsIGZyb20gJy4vdHVwbCdcblxuLy8gVE9ET1xuZXhwb3J0IGNvbnN0IE51bGxhYmxlID0gdHVwbCgnTnVsbGFibGUnLCBPYmplY3QsXG5cdCdkb2MnLFxuXHRbXG5cdFx0J3R5cGUnLCBPYmplY3Rcblx0XSlcbmV4cG9ydCBjb25zdCBVbmlvbiA9IHR1cGwoJ1VuaW9uJywgT2JqZWN0LFxuXHQnZG9jJyxcblx0W1xuXHRcdCd0eXBlQScsIE9iamVjdCxcblx0XHQndHlwZUInLCBPYmplY3Rcblx0XSlcblxuZXhwb3J0IGNvbnN0IHR5cGVUb1N0cmluZyA9IHR5cGUgPT4ge1xuXHRpZiAodHlwZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuXHRcdHJldHVybiB0eXBlLm5hbWVcblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBTZXQpXG5cdFx0cmV0dXJuIGAke3NldFRvQXJyYXkodHlwZSkubWFwKF8gPT4gYCcke199J2ApLmpvaW4oJyB8ICcpfWBcblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdGFzc2VydCh0eXBlLmxlbmd0aCA9PT0gMSlcblx0XHRyZXR1cm4gYFske3R5cGVUb1N0cmluZyh0eXBlWzBdKX1dYFxuXHR9XG5cdHJldHVybiB0eXBlLnRvU3RyaW5nKClcbn1cblxuY29uc3Qgc2V0VG9BcnJheSA9IHNldCA9PiB7XG5cdGNvbnN0IG91dCA9IFtdXG5cdHNldC5mb3JFYWNoKF8gPT4gb3V0LnB1c2goXykpXG5cdHJldHVybiBvdXRcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NyYyJ9