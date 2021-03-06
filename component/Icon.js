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
        var _a = this.props, className = _a.className, icon = _a.icon, fill = _a.fill, size = _a.size;
        return (React.createElement("svg", { "aria-hidden": "true", className: className, height: size, role: "img", viewBox: icon.viewBox, width: size, xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fill: fill, d: icon.d })));
    };
    IconSvg.defaultProps = {
        fill: "currentColor",
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
        var _a = this.props, children = _a.children, className = _a.className, isLeft = _a.isLeft, isRight = _a.isRight, onClick = _a.onClick;
        return (React.createElement("span", { className: classnames("icon", className, {
                "is-left": isLeft,
                "is-right": isRight,
            }, modifiers_1.backgroundColorHelpersPropsToClassnames(this.props), modifiers_1.textColorHelpersPropsToClassnames(this.props), modifiers_1.sizePropsToClassnames(this.props)), onClick: onClick }, children));
    };
    Icon.Svg = IconSvg;
    return Icon;
}(React.Component));
exports.default = Icon;
