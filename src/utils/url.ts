export const url = (pattern: string, parameters: Record<string, string> = {}): string => {
    return pattern.replace(/:([a-zA-Z0-9]+)/g, (_, key) => {
        if (parameters[key]) return parameters[key];
        throw new Error(`Missing value for URL parameter [${key}] in (${pattern})`);
    });
};
