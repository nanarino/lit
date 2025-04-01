export const getChromeVersion = () => {
    const match = window.navigator.userAgent.match(/Chrom(e|ium)\/([\d\.]+)\./)
    return match ? parseFloat(match[2]) : -1
}

export const getSafariVersion = () => {
    const match = window.navigator.userAgent.match(/Version\/([\d\.]+).*Safari/)
    return match ? parseFloat(match[1]) : -1
}
