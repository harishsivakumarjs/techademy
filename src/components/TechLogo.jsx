// Renders one entry from LOGOS (src/data/logos.jsx).
// decorative = the name is already shown as text next to the logo, so hide it from screen readers.
export default function TechLogo({ logo: { name, Icon, color, scale, src, wide }, decorative }) {
  if (!Icon) {
    return (
      <img src={src} alt={decorative ? '' : name} aria-hidden={decorative || undefined} className={wide ? 'wide' : undefined} />
    )
  }
  const a11y = decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': name }
  return <Icon color={color} style={scale && { transform: `scale(${scale})` }} {...a11y} />
}
