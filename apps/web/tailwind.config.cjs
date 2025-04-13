/**@type {import{'tailwindcss'}.Config} */
const config = require("@repo/config/tailwindConfig")

module.exports = {
    ...config,
    content: [
        "./app/**/*.tsx", 
        "../../packages/ui/**/*.tsx"
    ]
}