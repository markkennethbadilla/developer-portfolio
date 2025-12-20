# Planning Guide

A professional, conversion-focused developer portfolio website that showcases a software engineer's technical expertise through concrete results, emphasizing credibility over flashiness to attract technical recruiters and engineering managers at remote-first SaaS companies.


This is a multi-page portfolio with navigation, animated statistics, code syntax highlighting, and form handling. It requires sta
## Essential Features
**1. Hero Section with Animated Stats**

- Progression: User lands on page → reads headline and value proposition → o


## Essential Features

**1. Hero Section with Animated Stats**
- Purpose: Proves technical competence through detailed problem-solving narrative that technical readers can validate
- Progression: User navigates to case study → reads incident context → follows investigation pro

- Progression: User lands on page → reads headline and value proposition → observes stats animating upward → understands impact at a glance
- Success criteria: Stats animate smoothly within 1-2 seconds, numbers are prominent and readable, metrics communicate value instantly

**2. Problems I Solve Cards**
- Functionality: Four glassmorphic cards showcasing specific technical problems solved with outcomes and results
- Purpose: Demonstrates problem-solving approach and technical depth through real scenarios rather than generic skill lists
- Trigger: User scrolls through homepage below hero section
- Progression: User reads problem title → understands technical context → sees concrete outcome with metrics → recognizes relevant expertise
- Success criteria: Cards are scannable, outcomes are quantified, technical terms are accurate, hover effects provide subtle feedback

**3. Detailed Case Study Page**
- Functionality: Deep dive into race condition elimination with before/after code comparisons, investigation process, and impact metrics
- Purpose: Proves technical competence through detailed problem-solving narrative that technical readers can validate
- Trigger: User clicks "View Case Study" CTA from homepage
- Progression: User navigates to case study → reads incident context → follows investigation process → sees code comparison → understands solution → reviews impact metrics → recognizes systems thinking
- Success criteria: Code blocks have syntax highlighting, diff comparison is clear, technical explanations are accurate, story flow is logical

**4. Multi-Page Navigation**
- **Accent Color**: Electric Blue `oklch(0.58 0.20 250)` - Strategic highlights for CTAs, links, and 
- Purpose: Organizes content logically to guide users through the conversion funnel
  - Deep Slate `oklch(0.18 0.015 255)`: White text `ok
- Progression: User navigates between pages → experiences smooth transition → maintains context → finds desired information easily
- Success criteria: Navigation is always visible, active page is indicated, transitions are smooth, mobile navigation is accessible

**5. Contact Page with Multiple Methods**
- Functionality: Displays contact information, availability status, and optional contact form
- **Typographic Hierarchy**:
- Trigger: User clicks "Contact" navigation or CTA buttons throughout site
- Progression: User decides to reach out → navigates to contact page → chooses preferred method (email/LinkedIn/form) → initiates contact
- Success criteria: Email is copyable on click, external links open correctly, form validates inputs, submission provides feedback

## Edge Case Handling

- **No JavaScript**: Ensure core content remains accessible without animations, gracefully degrading interactive features
- **Code Comparison**: Subtle highlight pulse on key lines when scrolled into view to draw eye to import
- **Small Screens**: Stack cards vertically, make code blocks horizontally scrollable, ensure touch targets meet 44px minimum
- **Keyboard Navigation**: All interactive elements accessible via tab, visible focus indicators, skip links for navigation
- **Screen Readers**: Semantic HTML structure, ARIA labels for icons and animations, alt text for visual elements
- **Long Content**: Smooth scroll behavior between sections, sticky navigation for quick access
- **External Link Failures**: Ensure links have appropriate rel attributes and open in new tabs where expected

## Design Direction

The design should evoke precision, reliability, and technical sophistication—the feeling of interacting with a well-architected system. Think of the clean confidence of Linear's interface, the technical elegance of Vercel's design system, or the understated professionalism of Stripe's documentation. Every element should feel intentional, measured, and purpose-built, signaling "this person thinks like a systems architect" before a single word is read.

## Color Selection

The palette emphasizes deep technical sophistication with crisp contrasts and strategic accent usage for credibility and focus.

- **Primary Color**: Deep Slate `oklch(0.18 0.015 255)` - Conveys authority and technical depth without being harsh; serves as the main brand color for headers and key UI elements
- **Secondary Colors**: 
  - Navy Background `oklch(0.15 0.01 255)` - Rich, professional background that reduces eye strain
  - Slate 900 `oklch(0.16 0.012 255)` - Primary text color for maximum readability
  - Slate 100 `oklch(0.95 0.005 255)` - Light text for dark backgrounds
  - Edge padding: 32px desktop, 16px mobile
  - Navigation collapses to hamburger menu below 768px
  - Code blocks: Horizontal scroll wi
  - Card grids: 2 columns → 1 column
  - Bottom bar navigation on mobile for quick access to main pages



































































  - Edge padding: 32px desktop, 16px mobile
- **Mobile**:
  - Navigation collapses to hamburger menu below 768px
  - Stats grid: 3 columns → 1 column stacked
  - Code blocks: Horizontal scroll with full syntax highlighting maintained
  - Hero text: 48px → 32px responsive scaling
  - Card grids: 2 columns → 1 column
  - Touch targets: Minimum 44x44px for all interactive elements
  - Bottom bar navigation on mobile for quick access to main pages
