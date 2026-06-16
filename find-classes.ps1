$lines = Get-Content 'C:\Users\mythz\Desktop\stuci\app\globals.css'
$pattern = '^\.(contact-info-grid|contact-form-layout|contact-form__row|contact-form|gallery-masonry|gallery-tabs|gallery-card|gallery-mosaic|gallery-hero|gallery-section|tour-card-grid|tour-card|tour-modal|tour-modal__|builder-card|builder-steps|builder-section|dest-popup|lightbox|tour-filter-bar|map-layout|map-popup|map-pin|route-map|testimonial-marquee|testimonial-card|planner-layout|planner-card|planner-section|story-track|story-panel|stats-grid|feature-grid|carousel-section|feature-section|stats-strip|home-hero|section-inner|section-title|hero-content|hero-actions|hero-image|hero-tagline|hero-eyebrow|typed-line|scroll-indicator|compass-rose|stat-card|feature-card|dest-gallery-btn|destination-stage|destination-card|nav-actions|site-nav|mobile-menu|menu-button|brand-lockup|brand-logo-wrap|brand-mark|footer-grid|footer-bottom|footer-brand|footer-logo-wrap|contact-band|newsletter|site-footer|whatsapp-button|theme-toggle|language-toggle|book-pill)\s*[\{,]'
for ($i=0;$i -lt $lines.Count;$i++){
    if ($lines[$i] -match $pattern){
        $snippet = $lines[$i].Substring(0, [Math]::Min(90, $lines[$i].Length))
        Write-Host ("{0,5}  {1}" -f ($i+1), $snippet)
    }
}
