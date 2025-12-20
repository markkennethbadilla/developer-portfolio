# Planning Guide

A professional, conversion-focused developer portfolio website that showcases a software engineer's technical expertise through concrete results, emphasizing credibility over flashiness to attract technical recruiters and engineering managers at remote-first SaaS companies.

**Experience Qualities**:
1. **Credible** - Every claim is backed by specific metrics and real production outcomes, establishing trust through transparency
2. **Technical** - Design and content signal deep engineering knowledge through thoughtful architecture decisions and system-level thinking
3. **Focused** - Cuts through portfolio noise by highlighting the most impactful work with clear results, making it easy for busy recruiters to assess fit

**Complexity Level**: Light Application (multiple features with basic state)
This is a multi-page portfolio with navigation, animated statistics, code syntax highlighting, and form handling. It requires state management for theme toggling, scroll-triggered animations, and navigation between pages, but doesn't need complex data fetching or real-time features.

## Essential Features

**1. Hero Section with Animated Stats**
- Functionality: Displays professional headline, specializations, and three key impact metrics that animate from 0 when scrolled into view
- Purpose: Immediately establishes credibility through concrete numbers rather than vague claims
- Trigger: Page load displays hero content; viewport intersection triggers stat counter animations
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
- Functionality: Clean navigation between Home, Case Study, and Contact pages with smooth transitions
- Purpose: Organizes content logically to guide users through the conversion funnel
- Trigger: User clicks navigation links or CTA buttons
- Progression: User navigates between pages → experiences smooth transition → maintains context → finds desired information easily
- Success criteria: Navigation is always visible, active page is indicated, transitions are smooth, mobile navigation is accessible

**5. Contact Page with Multiple Methods**
- Functionality: Displays contact information, availability status, and optional contact form
- Purpose: Reduces friction in reaching out by providing multiple communication options
- Trigger: User clicks "Contact" navigation or CTA buttons throughout site
- Progression: User decides to reach out → navigates to contact page → chooses preferred method (email/LinkedIn/form) → initiates contact
- Success criteria: Email is copyable on click, external links open correctly, form validates inputs, submission provides feedback

## Edge Case Handling

- **No JavaScript**: Ensure core content remains accessible without animations, gracefully degrading interactive features
- **Slow Connections**: Show content immediately with progressive enhancement for animations and effects
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
- **Accent Color**: Electric Blue `oklch(0.58 0.20 250)` - Strategic highlights for CTAs, links, and important metrics; commands attention without overwhelming
- **Success/Metrics**: Emerald `oklch(0.65 0.18 160)` - Used exclusively for positive outcomes and success indicators in stats
- **Foreground/Background Pairings**:
  - Navy Background `oklch(0.15 0.01 255)`: White text `oklch(0.98 0 0)` - Ratio 12.7:1 ✓
  - Deep Slate `oklch(0.18 0.015 255)`: White text `oklch(0.98 0 0)` - Ratio 11.2:1 ✓
  - White Background `oklch(1 0 0)`: Slate 900 `oklch(0.16 0.012 255)` - Ratio 13.1:1 ✓
  - Electric Blue Accent `oklch(0.58 0.20 250)`: White text `oklch(0.98 0 0)` - Ratio 4.9:1 ✓

## Font Selection

Typography should communicate technical precision and modern engineering culture, balancing geometric clarity for headings with comfortable readability for extended reading.

- **Primary Font**: Inter (headings and UI) - Geometric precision with excellent rendering at all sizes, widely adopted by technical companies
- **Secondary Font**: System font stack (body text) - `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` for optimal performance and native feel
- **Monospace Font**: JetBrains Mono (code blocks) - Designed specifically for code with excellent ligature support and character distinction

- **Typographic Hierarchy**:
  - H1 (Name/Hero): Inter Bold / 48px / -0.02em letter spacing / 1.1 line height
  - H2 (Section Titles): Inter SemiBold / 32px / -0.01em letter spacing / 1.2 line height
  - H3 (Card Titles): Inter SemiBold / 24px / normal letter spacing / 1.3 line height
  - Body (Main Content): System font / 18px / normal letter spacing / 1.7 line height
  - Body Small (Labels): System font / 14px / normal letter spacing / 1.5 line height
  - Stats (Numbers): JetBrains Mono Bold / 56px / -0.01em letter spacing / 1.0 line height
  - Code Blocks: JetBrains Mono / 14px / normal letter spacing / 1.6 line height

## Animations

Animations should enhance comprehension and guide attention without calling attention to themselves—subtle reveals that reinforce content hierarchy and provide satisfying micro-interactions that signal quality craftsmanship.

- **Scroll-triggered Reveals**: Stats counter animates from 0 to target value over 1.5s with easeOut curve when entering viewport; cards fade up 20px with 300ms stagger
- **Hover Interactions**: Cards lift 4px with shadow expansion over 200ms easeOut; buttons scale 0.98 on press for tactile feedback
- **Navigation Transitions**: Page changes use 300ms fade with slight vertical shift to maintain spatial context
- **Code Comparison**: Subtle highlight pulse on key lines when scrolled into view to draw eye to important changes
- **CTA Emphasis**: Primary buttons have subtle shadow animation on hover, communicating clickability without distraction

## Component Selection

- **Components**:
  - **Card** (Shadcn) - Glassmorphic treatment for stats, problems solved, and case study sections with custom backdrop blur and border styling
  - **Button** (Shadcn) - Primary CTAs with custom Electric Blue accent color, secondary with outline variant for less prominent actions
  - **Tabs** (Shadcn) - For code before/after comparison with custom styling for diff highlighting
  - **Badge** (Shadcn) - Technology tags in tech stack section with subtle styling
  - **Separator** (Shadcn) - Visual breaks between major sections
  - **Form** (Shadcn with react-hook-form) - Contact form with validation and error states
- **Customizations**:
  - Custom code block component with syntax highlighting using a lightweight highlighting approach or pre-formatted colored code
  - Animated counter component for stats that triggers on scroll intersection
  - Navigation component with mobile-responsive drawer on smaller screens
  - Hero section with parallax effect on scroll for depth
- **States**:
  - Buttons: Default shadow, hover lift + glow, active scale-down, disabled opacity 50%
  - Cards: Subtle border, hover lift 4px + shadow expansion, active state on clickable cards
  - Links: Underline on hover with 200ms transition, accent color, visited state slightly muted
  - Form inputs: Border accent on focus, error state with red border + message, success checkmark
  - Code blocks: Copy button appears on hover, click shows "Copied!" feedback
- **Icon Selection**:
  - Lightning bolt (Phosphor) - Performance/speed metrics
  - Shield check (Phosphor) - Security and reliability
  - Buildings (Phosphor) - Enterprise scale
  - Lock (Phosphor) - Security features
  - Rocket launch (Phosphor) - Performance
  - Target (Phosphor) - Accuracy
  - Currency dollar (Phosphor) - Financial systems
  - Arrow right (Phosphor) - CTAs and progression
  - Code (Phosphor) - Technical sections
  - Check circle (Phosphor) - Success states
- **Spacing**:
  - Base unit: 8px (all spacing divisible by 8)
  - Component padding: 24px (3 units)
  - Section spacing: 96px vertical (12 units)
  - Card gaps: 24px (3 units)
  - Content max-width: 1200px centered
  - Edge padding: 32px desktop, 16px mobile
- **Mobile**:
  - Navigation collapses to hamburger menu below 768px
  - Stats grid: 3 columns → 1 column stacked
  - Code blocks: Horizontal scroll with full syntax highlighting maintained
  - Hero text: 48px → 32px responsive scaling
  - Card grids: 2 columns → 1 column
  - Touch targets: Minimum 44x44px for all interactive elements
  - Bottom bar navigation on mobile for quick access to main pages
