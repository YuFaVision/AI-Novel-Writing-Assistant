const TRANSFORM_SCOPES = Symbol("assistant-ui.transform-scopes");
export function attachTransformScopes(resource, transform) {
    const r = resource;
    if (r[TRANSFORM_SCOPES]) {
        throw new Error("transformScopes is already attached to this resource");
    }
    r[TRANSFORM_SCOPES] = transform;
}
export function getTransformScopes(resource) {
    return resource[TRANSFORM_SCOPES];
}
//# sourceMappingURL=attachTransformScopes.js.map