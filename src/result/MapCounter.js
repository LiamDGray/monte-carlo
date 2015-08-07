'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _GenericJs = require('./Generic.js');

var _GenericJs2 = _interopRequireDefault(_GenericJs);

var _CounterJs = require('./Counter.js');

var _CounterJs2 = _interopRequireDefault(_CounterJs);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var MapCounter = (function (_GenericResult) {
    _inherits(MapCounter, _GenericResult);

    function MapCounter(keys) {
        var _this = this;

        var formatter = arguments.length <= 1 || arguments[1] === undefined ? new MapCounter.DefaultFormatter() : arguments[1];

        _classCallCheck(this, MapCounter);

        _get(Object.getPrototypeOf(MapCounter.prototype), 'constructor', this).call(this, formatter);
        this.map = {};
        this.order = keys;
        _underscore2['default'].each(keys, function (key) {
            _this.map[key] = new _CounterJs2['default']();
        });
    }

    _createClass(MapCounter, [{
        key: 'increase',
        value: function increase(key) {
            var by = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

            if (this.map[key]) {
                this.map[key].increase(by);
            } else {
                throw new Error('MapCounter: Key "' + key + '" not set up');
            }
        }
    }, {
        key: 'format',
        value: function format(N) {
            return this.formatter.format(this.order, this.map, N);
        }
    }]);

    return MapCounter;
})(_GenericJs2['default']);

exports['default'] = MapCounter;
;

MapCounter.DefaultFormatter = (function (_GenericResult$GenericFormatter) {
    _inherits(_class, _GenericResult$GenericFormatter);

    function _class() {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_class, [{
        key: 'format',
        value: function format(order, map, N) {
            return order.map(function (key) {
                return key + ": " + map[key].format(N);
            });
        }
    }]);

    return _class;
})(_GenericJs2['default'].GenericFormatter);
module.exports = exports['default'];