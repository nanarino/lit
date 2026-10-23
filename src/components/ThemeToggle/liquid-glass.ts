/** inspira-ui LiquidGlass 的位移贴图。blur / scale 按 56px 圆形按钮缩小。 */
export const GLASS = {
    size: 56,
    border: 0.22,
    lightness: 50,
    blend: "difference",
    alpha: 0.93,
    blur: 3.5,
    scale: -72,
    rOffset: 0,
    gOffset: 6,
    bOffset: 12,
    displace: 0.45,
}

export const displacementSvg = (width: number, height: number) => {
    const edge = Math.min(width, height) * (GLASS.border * 0.5)
    const radius = Math.min(width, height) / 2
    return /*svg*/ `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
<stop offset="0%" stop-color="#0000"/>
<stop offset="100%" stop-color="red"/>
</linearGradient>
<linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stop-color="#0000"/>
<stop offset="100%" stop-color="blue"/>
</linearGradient>
</defs>
<rect width="${width}" height="${height}" fill="black"/>
<rect width="${width}" height="${height}" rx="${radius}" fill="url(#red)"/>
<rect width="${width}" height="${height}" rx="${radius}" fill="url(#blue)" style="mix-blend-mode:${GLASS.blend}"/>
<rect x="${edge}" y="${edge}" width="${width - edge * 2}" height="${height - edge * 2}" rx="${radius}" fill="hsl(0 0% ${GLASS.lightness}% / ${GLASS.alpha})" style="filter:blur(${GLASS.blur}px)"/>
</svg>`
}

export const displacementHref = (width: number, height: number) =>
    `data:image/svg+xml,${encodeURIComponent(displacementSvg(width, height))}`
