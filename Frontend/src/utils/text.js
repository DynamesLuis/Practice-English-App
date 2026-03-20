function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

function normalize(text) {
    return text.toLowerCase()
}

export {
    capitalize,
    normalize
}