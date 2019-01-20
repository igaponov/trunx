Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var IconSvg = (function (_super) {
    tslib_1.__extends(IconSvg, _super);
    function IconSvg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconSvg.prototype.render = function () {
        var _a = this.props, icon = _a.icon, size = _a.size;
        return (React.createElement("svg", { "aria-hidden": "true", height: size, role: "img", viewBox: icon.viewBox, width: size, xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fill: "currentColor", d: icon.d })));
    };
    IconSvg.defaultProps = {
        size: "1em"
    };
    return IconSvg;
}(React.Component));
var Icon = (function (_super) {
    tslib_1.__extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, hasTextDanger = _a.hasTextDanger, hasTextInfo = _a.hasTextInfo, hasTextSuccess = _a.hasTextSuccess, hasTextWarning = _a.hasTextWarning, isLeft = _a.isLeft, isRight = _a.isRight;
        var className = classnames("icon", {
            "has-text-danger": hasTextDanger,
            "has-text-info": hasTextInfo,
            "has-text-success": hasTextSuccess,
            "has-text-warning": hasTextWarning,
            "is-left": isLeft,
            "is-right": isRight,
        }, modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("span", { className: className }, this.props.children));
    };
    Icon.Svg = IconSvg;
    return Icon;
}(React.Component));
exports.default = Icon;
