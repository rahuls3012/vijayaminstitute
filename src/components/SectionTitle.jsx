export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <div className={`reveal mb-4 mb-lg-5 ${align === 'center' ? 'text-center mx-auto' : ''}`} style={align === 'center' ? { maxWidth: '640px' } : undefined}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-2 mb-2" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.35rem)', color: light ? '#fff' : undefined }}>
        {title}
      </h2>
      {subtitle && <p className={light ? '' : 'text-muted-vi'} style={{ color: light ? 'rgba(255,255,255,0.8)' : undefined, maxWidth: '62ch' }}>{subtitle}</p>}
    </div>
  );
}
