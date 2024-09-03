module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "prettier"],
    "rules": {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal"],
                "pathGroups": [
                    {
                        "pattern": "express",
                        "group": "external",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["builtin"],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                },
                "newlines-between": "always",
                "warnOnUnassignedImports": true
            }
        ]
    }
}
