if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', 'module', './type'], function (exports, module, _type) {
	'use strict';

	module.exports = function (typesObj) {
		var s = '';
		Object.keys(typesObj).forEach(function (name) {
			var _ = typesObj[name];
			if (_.doc !== undefined) s = s + ('' + single(_) + '\n\n');
		});
		return s;
	};

	var single = function single(_) {
		var s = '## ' + _ + '\n\n';

		if (_.props !== undefined) _.props.forEach(function (_ref) {
			var name = _ref.name;
			var type = _ref.type;
			return s = s + ('\t' + name + ': ' + _type.typeToString(type) + '\n');
		});else s = s + '(abstract type)\n';

		return s + ('\n' + _.doc);
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBRWUsVUFBQSxRQUFRLEVBQUk7QUFDMUIsTUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ1YsUUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDNUMsT0FBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3hCLE9BQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQ3RCLENBQUMsR0FBRyxDQUFDLFNBQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFNLENBQUE7R0FDM0IsQ0FBQyxDQUFBO0FBQ0YsU0FBTyxDQUFDLENBQUE7RUFDUjs7QUFFRCxLQUFNLE1BQU0sR0FBRyxnQkFBQSxDQUFDLEVBQUk7QUFDbkIsTUFBSSxDQUFDLFdBQVMsQ0FBQyxTQUFNLENBQUE7O0FBRXJCLE1BQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQUcsSUFBSSxRQUFKLElBQUk7T0FBRSxJQUFJLFFBQUosSUFBSTtVQUM1QixDQUFDLEdBQUcsQ0FBQyxXQUFRLElBQUksVUFBSyxNQWpCaEIsWUFBWSxDQWlCaUIsSUFBSSxDQUFDLFFBQUk7R0FBQSxDQUFDLENBQUEsS0FFOUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBbUIsQ0FBQTs7QUFFNUIsU0FBTyxDQUFDLFdBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFBO0VBQ3ZCLENBQUEiLCJmaWxlIjoiZG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZVRvU3RyaW5nIH0gZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlc09iaiA9PiB7XG5cdGxldCBzID0gJydcblx0T2JqZWN0LmtleXModHlwZXNPYmopLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuXHRcdGNvbnN0IF8gPSB0eXBlc09ialtuYW1lXVxuXHRcdGlmIChfLmRvYyAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0cyA9IHMgKyBgJHtzaW5nbGUoXyl9XFxuXFxuYFxuXHR9KVxuXHRyZXR1cm4gc1xufVxuXG5jb25zdCBzaW5nbGUgPSBfID0+IHtcblx0bGV0IHMgPSBgIyMgJHtffVxcblxcbmBcblxuXHRpZiAoXy5wcm9wcyAhPT0gdW5kZWZpbmVkKVxuXHRcdF8ucHJvcHMuZm9yRWFjaCgoeyBuYW1lLCB0eXBlIH0pID0+XG5cdFx0XHRzID0gcyArIGBcXHQke25hbWV9OiAke3R5cGVUb1N0cmluZyh0eXBlKX1cXG5gKVxuXHRlbHNlXG5cdFx0cyA9IHMgKyAnKGFic3RyYWN0IHR5cGUpXFxuJ1xuXG5cdHJldHVybiBzICsgYFxcbiR7Xy5kb2N9YFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc3JjIn0=