if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', './private/util'], function (exports, _privateUtil) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	exports['default'] = function (name, superType, doc, namesTypes) {
		var protoProps = arguments[4] === undefined ? {} : arguments[4];
		var tuplProps = arguments[5] === undefined ? {} : arguments[5];

		var props = [];
		_privateUtil.assert(namesTypes.length % 2 === 0);
		for (var i = 0; i < namesTypes.length; i = i + 2) {
			props.push({ name: namesTypes[i], type: namesTypes[i + 1] });
		}var args = props.map(function (_) {
			return _.name;
		}).join(', ');

		var body = 'return function ' + name + '(' + args + ') {\n\tif (!(this instanceof ' + name + '))\n\t\treturn new ' + name + '(' + args + ');\n';

		props.forEach(function (_ref) {
			var name = _ref.name;

			body = body + ('this.' + name + ' = ' + name + '; if (this.' + name + ' === undefined) this.' + name + ' = null;\n\t');
		});
		body = body + 'this.postConstruct()\n}';
		var type = Function(body)();
		var prototypeDefaults = {
			constructor: type,
			// Default is to do nothing. May be overridden.
			postConstruct: function postConstruct() {},
			toJSON: function toJSON() {
				var _this = this;

				var obj = {};
				obj.type = this.type;
				// Sort to make JSON rendering deterministic.
				Object.keys(this).sort().forEach(function (key) {
					obj[key] = _this[key];
				});
				return obj;
			},
			// Don't use JSON.stringify because we want other things below this to use their toString().
			toString: function toString() {
				return inspect(this);
			}
		};
		var prototype = Object.assign(Object.create(superType.prototype), prototypeDefaults, protoProps);
		var defaultProps = {
			doc: doc,
			props: props,
			prototype: prototype,
			isTuple: true,
			toString: function toString() {
				return this.name;
			}
		};
		return Object.assign(type, defaultProps, tuplProps);
	};

	var abstract = function abstract(name, superType, doc) {
		var protoProps = arguments[3] === undefined ? {} : arguments[3];
		var abstractProps = arguments[4] === undefined ? {} : arguments[4];

		var type = Function('return function ' + name + '() { throw new Error("' + name + ' is an abstract type.") }')();
		Object.assign(type.prototype, protoProps);
		var defaultProps = {
			doc: doc,
			prototype: Object.create(superType.prototype),
			toString: function toString() {
				return name;
			}
		};
		return Object.assign(type, defaultProps, abstractProps);
	};

	exports.abstract = abstract;
	var show = (function (_show) {
		function show(_x) {
			return _show.apply(this, arguments);
		}

		show.toString = function () {
			return _show.toString();
		};

		return show;
	})(function (_) {
		if (_ instanceof Array) {
			var parts = _.map(function (em) {
				return indent(show(em));
			}).join(',\n\t');
			return '[\n\t' + parts + '\n]';
		} else if (_ === null) return 'null';else if (typeof _ === 'string') return '"' + _ + '"';else return _.toString();
	});

	var inspect = function inspect(obj) {
		var type = obj.constructor;
		var props = type.props.map(function (_ref2) {
			var name = _ref2.name;
			return '\n\t' + indent(show(obj[name]));
		}).join(',');
		return '' + type + '(' + props + ')';
	};

	var indent = function indent(str) {
		return str.replace(/\n/g, '\n\t');
	};
});
//# sourceMappingURL=data:application/json;base64,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QUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN0RixjQUFVLElBQUksU0FBSSxLQUFLLE9BQUc7RUFDMUIsQ0FBQTs7QUFFRCxLQUFNLE1BQU0sR0FBRyxnQkFBQSxHQUFHO1NBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0VBQUEsQ0FBQSIsImZpbGUiOiJ0dXBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0LCBwQWRkIH0gZnJvbSAnLi9wcml2YXRlL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IChuYW1lLCBzdXBlclR5cGUsIGRvYywgbmFtZXNUeXBlcywgcHJvdG9Qcm9wcyA9IHsgfSwgdHVwbFByb3BzID0geyB9KSA9PiB7XG5cdGxldCBwcm9wcyA9IFsgXVxuXHRhc3NlcnQobmFtZXNUeXBlcy5sZW5ndGggJSAyID09PSAwKVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzVHlwZXMubGVuZ3RoOyBpID0gaSArIDIpXG5cdFx0cHJvcHMucHVzaCh7IG5hbWU6IG5hbWVzVHlwZXNbaV0sIHR5cGU6IG5hbWVzVHlwZXNbaSArIDFdIH0pXG5cdGxldCBhcmdzID0gcHJvcHMubWFwKF8gPT4gXy5uYW1lKS5qb2luKCcsICcpXG5cblx0bGV0IGJvZHkgPSBgcmV0dXJuIGZ1bmN0aW9uICR7bmFtZX0oJHthcmdzfSkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgJHtuYW1lfSkpXG5cdFx0cmV0dXJuIG5ldyAke25hbWV9KCR7YXJnc30pO1xuYFxuXG5cdHByb3BzLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XG5cdFx0Ym9keSA9IGJvZHkgK1xuXHRcdFx0YHRoaXMuJHtuYW1lfSA9ICR7bmFtZX07IGlmICh0aGlzLiR7bmFtZX0gPT09IHVuZGVmaW5lZCkgdGhpcy4ke25hbWV9ID0gbnVsbDtcXG5cXHRgXG5cdH0pXG5cdGJvZHkgPSBib2R5ICsgJ3RoaXMucG9zdENvbnN0cnVjdCgpXFxufSdcblx0Y29uc3QgdHlwZSA9IEZ1bmN0aW9uKGJvZHkpKClcblx0Y29uc3QgcHJvdG90eXBlRGVmYXVsdHMgPSB7XG5cdFx0Y29uc3RydWN0b3I6IHR5cGUsXG5cdFx0Ly8gRGVmYXVsdCBpcyB0byBkbyBub3RoaW5nLiBNYXkgYmUgb3ZlcnJpZGRlbi5cblx0XHRwb3N0Q29uc3RydWN0KCkgeyB9LFxuXHRcdHRvSlNPTigpIHtcblx0XHRcdGNvbnN0IG9iaiA9IHsgfVxuXHRcdFx0b2JqLnR5cGUgPSB0aGlzLnR5cGVcblx0XHRcdC8vIFNvcnQgdG8gbWFrZSBKU09OIHJlbmRlcmluZyBkZXRlcm1pbmlzdGljLlxuXHRcdFx0T2JqZWN0LmtleXModGhpcykuc29ydCgpLmZvckVhY2goa2V5ID0+IHsgb2JqW2tleV0gPSB0aGlzW2tleV0gfSlcblx0XHRcdHJldHVybiBvYmpcblx0XHR9LFxuXHRcdC8vIERvbid0IHVzZSBKU09OLnN0cmluZ2lmeSBiZWNhdXNlIHdlIHdhbnQgb3RoZXIgdGhpbmdzIGJlbG93IHRoaXMgdG8gdXNlIHRoZWlyIHRvU3RyaW5nKCkuXG5cdFx0dG9TdHJpbmcoKSB7IHJldHVybiBpbnNwZWN0KHRoaXMpIH1cblx0fVxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKFxuXHRcdE9iamVjdC5jcmVhdGUoc3VwZXJUeXBlLnByb3RvdHlwZSksXG5cdFx0cHJvdG90eXBlRGVmYXVsdHMsXG5cdFx0cHJvdG9Qcm9wcylcblx0Y29uc3QgZGVmYXVsdFByb3BzID0ge1xuXHRcdGRvYyxcblx0XHRwcm9wcyxcblx0XHRwcm90b3R5cGUsXG5cdFx0aXNUdXBsZTogdHJ1ZSxcblx0XHR0b1N0cmluZygpIHsgcmV0dXJuIHRoaXMubmFtZSB9XG5cdH1cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24odHlwZSwgZGVmYXVsdFByb3BzLCB0dXBsUHJvcHMpXG59XG5cbmV4cG9ydCBjb25zdCBhYnN0cmFjdCA9IChuYW1lLCBzdXBlclR5cGUsIGRvYywgcHJvdG9Qcm9wcyA9IHsgfSwgYWJzdHJhY3RQcm9wcyA9IHsgfSkgPT4ge1xuXHRjb25zdCB0eXBlID0gRnVuY3Rpb24oXG5cdFx0YHJldHVybiBmdW5jdGlvbiAke25hbWV9KCkgeyB0aHJvdyBuZXcgRXJyb3IoXCIke25hbWV9IGlzIGFuIGFic3RyYWN0IHR5cGUuXCIpIH1gXG5cdFx0KSgpXG5cdE9iamVjdC5hc3NpZ24odHlwZS5wcm90b3R5cGUsIHByb3RvUHJvcHMpXG5cdGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblx0XHRkb2MsXG5cdFx0cHJvdG90eXBlOiBPYmplY3QuY3JlYXRlKHN1cGVyVHlwZS5wcm90b3R5cGUpLFxuXHRcdHRvU3RyaW5nKCkgeyByZXR1cm4gbmFtZSB9XG5cdH1cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24odHlwZSwgZGVmYXVsdFByb3BzLCBhYnN0cmFjdFByb3BzKVxufVxuXG5jb25zdCBzaG93ID0gXyA9PiB7XG5cdGlmIChfIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRjb25zdCBwYXJ0cyA9IF8ubWFwKGVtID0+IGluZGVudChzaG93KGVtKSkpLmpvaW4oJyxcXG5cXHQnKVxuXHRcdHJldHVybiBgW1xcblxcdCR7cGFydHN9XFxuXWBcblx0fSBlbHNlIGlmIChfID09PSBudWxsKVxuXHRcdHJldHVybiAnbnVsbCdcblx0ZWxzZSBpZiAodHlwZW9mIF8gPT09ICdzdHJpbmcnKVxuXHRcdHJldHVybiBgXCIke199XCJgXG5cdGVsc2Vcblx0XHRyZXR1cm4gXy50b1N0cmluZygpXG59XG5cbmNvbnN0IGluc3BlY3QgPSBvYmogPT4ge1xuXHRjb25zdCB0eXBlID0gb2JqLmNvbnN0cnVjdG9yXG5cdGNvbnN0IHByb3BzID0gdHlwZS5wcm9wcy5tYXAoKHsgbmFtZSB9KSA9PiAnXFxuXFx0JyArIGluZGVudChzaG93KG9ialtuYW1lXSkpKS5qb2luKCcsJylcblx0cmV0dXJuIGAke3R5cGV9KCR7cHJvcHN9KWBcbn1cblxuY29uc3QgaW5kZW50ID0gc3RyID0+IHN0ci5yZXBsYWNlKC9cXG4vZywgJ1xcblxcdCcpXG4iXSwic291cmNlUm9vdCI6Ii9zcmMifQ==