"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isClassComponent;
exports.isPureClassComponent = isPureClassComponent;
function isClassComponent(Component) {
    return Boolean(Component && Component.prototype && Component.prototype.isReactComponent);
}

function isPureClassComponent(Component) {
    return isClassComponent(Component) && Component.prototype.isPureReactComponent === true;
}
