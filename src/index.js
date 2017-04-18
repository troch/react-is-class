export default function isClassComponent(Component) {
    return Boolean(
        Component &&
        Component.prototype &&
        Component.prototype.isReactComponent
    );
}

export function isPureClassComponent(Component) {
    return isClassComponent(Component) &&
        Component.prototype.isPureReactComponent === true
}
