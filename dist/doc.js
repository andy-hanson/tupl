if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', 'module', './type'], function (exports, module, _type) {
	'use strict';

	module.exports = typesObj => {
		let s = '';
		Object.keys(typesObj).forEach(function (name) {
			const _ = typesObj[name];
			if (_.doc !== undefined) s = s + `${ single(_) }\n\n`;
		});
		return s;
	};

	const single = _ => {
		let s = `## ${ _ }\n\n`;

		if (_.props !== undefined) _.props.forEach(_ref => {
			let name = _ref.name;
			let type = _ref.type;
			return s = s + `\t${ name }: ${ (0, _type.typeToString)(type) }\n`;
		});else s = s + '(abstract type)\n';

		return s + `\n${ _.doc }`;
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBRWUsUUFBUSxJQUFJO0FBQzFCLE1BQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNWLFFBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSSxFQUFFO0FBQzVDLFNBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN4QixPQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUN0QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7R0FDM0IsQ0FBQyxDQUFBO0FBQ0YsU0FBTyxDQUFDLENBQUE7RUFDUjs7QUFFRCxPQUFNLE1BQU0sR0FBRyxDQUFDLElBQUk7QUFDbkIsTUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBOztBQUVyQixNQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUN4QixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxBQUFDLElBQWM7T0FBWixJQUFJLEdBQU4sSUFBYyxDQUFaLElBQUk7T0FBRSxJQUFJLEdBQVosSUFBYyxDQUFOLElBQUk7VUFDNUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRSxJQUFJLEVBQUMsRUFBRSxHQUFFLFVBakJoQixZQUFZLEVBaUJpQixJQUFJLENBQUMsRUFBQyxFQUFFLENBQUM7R0FBQSxDQUFDLENBQUEsS0FFOUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBbUIsQ0FBQTs7QUFFNUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUE7RUFDdkIsQ0FBQSIsImZpbGUiOiJkb2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlVG9TdHJpbmcgfSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVzT2JqID0+IHtcblx0bGV0IHMgPSAnJ1xuXHRPYmplY3Qua2V5cyh0eXBlc09iaikuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG5cdFx0Y29uc3QgXyA9IHR5cGVzT2JqW25hbWVdXG5cdFx0aWYgKF8uZG9jICE9PSB1bmRlZmluZWQpXG5cdFx0XHRzID0gcyArIGAke3NpbmdsZShfKX1cXG5cXG5gXG5cdH0pXG5cdHJldHVybiBzXG59XG5cbmNvbnN0IHNpbmdsZSA9IF8gPT4ge1xuXHRsZXQgcyA9IGAjIyAke199XFxuXFxuYFxuXG5cdGlmIChfLnByb3BzICE9PSB1bmRlZmluZWQpXG5cdFx0Xy5wcm9wcy5mb3JFYWNoKCh7IG5hbWUsIHR5cGUgfSkgPT5cblx0XHRcdHMgPSBzICsgYFxcdCR7bmFtZX06ICR7dHlwZVRvU3RyaW5nKHR5cGUpfVxcbmApXG5cdGVsc2Vcblx0XHRzID0gcyArICcoYWJzdHJhY3QgdHlwZSlcXG4nXG5cblx0cmV0dXJuIHMgKyBgXFxuJHtfLmRvY31gXG59XG4iXSwic291cmNlUm9vdCI6Ii9zcmMifQ==