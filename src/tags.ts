interface TagConfig {
    background: string;
    color: string;
}

export const tagMap: Record<string, TagConfig> = {
    laravel: {
        background: "#F05340",
        color: "#fff",
    },
    php: {
        background: "#787cb5",
        color: "#fff",
    },
};

export const DEFAULT_TAG_CONFIG = {
    background: "#ececec",
    color: "#333",
};
