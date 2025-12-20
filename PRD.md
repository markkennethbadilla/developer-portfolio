# Planning Guide

A professional, conversion-focused developer portfolio website that showcases a software engineer's technical expertise through concrete results, emphasizing credibility over flashiness to attract technical recruiters and engineering managers at remote-first SaaS companies.

**Experience Qualities**: 
1. **Technical Credibility** - Every design choice signals "senior engineer who understands UX"
2. **Data-Driven Confidence** - Concrete metrics and results over generic claims
3. **Professional Polish** - Obsessive attention to detail, from typography to interactions

**Complexity Level**: Light Application (multiple features with basic state)
- Portfolio with three pages (Home, Case Study, Contact) featuring navigation, animated counters, syntax-highlighted code blocks, and form handling

## Essential Features

**1. Hero Section with Animated Stats**
- Functionality: Displays headline, value proposition, and three animated stat cards showing 90% performance improvement, 100% bug elimination, and 50+ users
- Purpose: Immediately communicates impact through quantified results
- Trigger: User lands on homepage
- Progression: User lands on page → reads headline and value proposition → observes stats animating upward → understands impact at a glance
- Success criteria: Stats animate smoothly within 1-2 seconds, numbers are prominent and readable on mobile, metrics communicate value instantly

**2. Problems I Solve Cards**
- Functionality: Four glassmorphic cards showcasing specific technical problems solved with outcomes and results
- Purpose: Demonstrates problem-solving approach and technical depth through real scenarios
- Trigger: User scrolls through homepage below hero section
- Progression: User reads problem title → understands technical context → sees concrete outcome with metrics → recognizes relevant expertise
- Success criteria: Cards are scannable on mobile, outcomes are quantified, technical terms are accurate, hover effects are subtle, touch targets meet 44px minimum

**3. Detailed Case Study Page**
- Functionality: Deep dive into race condition elimination with before/after code comparisons, investigation process, and impact metrics
- Purpose: Proves technical competence through detailed problem-solving narrative that technical readers can validate
- Trigger: User clicks "View Case Study" CTA from homepage
- Progression: User navigates to case study → reads incident context → follows investigation process → sees code comparison (with horizontal scroll on mobile) → understands solution → reviews impact metrics → recognizes systems thinking
- Success criteria: Code blocks have syntax highlighting, diff comparison is clear, mobile code blocks scroll horizontally without text shrinking, technical explanations are accurate

**4. Multi-Page Navigation with Theme Switcher**
- Functionality: Fixed navigation bar with logo, page links (Home, Case Study, Contact, Resume), theme toggle, and hamburger menu on mobile
- Purpose: Organizes content logically to guide users through the conversion funnel and provides seamless theme switching
- Trigger: User navigates between pages or toggles theme
- Progression: User navigates between pages → experiences smooth transition → maintains context → finds desired information easily; User toggles theme → instant theme switch with smooth transition → preference saved to localStorage
- Success criteria: Navigation is always visible, mobile menu is accessible with proper touch targets, active page is indicated, smooth scroll to top on navigation, theme persists across sessions, respects system preference on first visit

**5. Contact Page with Multiple Methods**
- Functionality: Displays contact information, availability status, ideal role criteria, and contact form
- Purpose: Provides multiple contact methods and sets expectations for ideal opportunities
- Trigger: User clicks "Contact" navigation or CTA buttons throughout site
- Progression: User decides to reach out → navigates to contact page → chooses preferred method (email/LinkedIn/form) → initiates contact
- Success criteria: Email is copyable on click with toast notification, external links open correctly, form validates inputs on mobile keyboards, submission provides feedback

## Edge Case Handling

- **Small Screens**: Stack cards vertically, make code blocks horizontally scrollable, ensure touch targets meet 44px minimum, responsive typography scales down gracefully
- **Keyboard Navigation**: All interactive elements accessible via tab, visible focus indicators
- **Touch Devices**: touch-action: manipulation prevents double-tap zoom, -webkit-tap-highlight-color: transparent removes tap flash
- **Long Content**: Smooth scroll behavior between sections, sticky navigation for quick access
- **Code Blocks**: Horizontal scroll with full syntax highlighting maintained on mobile, adequate padding for readability
- **Forms on Mobile**: Proper input types for mobile keyboards, adequate spacing between form fields

## Design Direction

The design should evoke precision, reliability, and technical sophistication—the feeling of interacting with a well-architected system. Think of the clean confidence of Linear's interface, the technical elegance of Vercel's design system, or the understated professionalism of Stripe's documentation. Mobile experience should feel just as polished as desktop, with careful attention to touch targets, typography scaling, and interaction feedback.

## Color Selection

The palette emphasizes deep technical sophistication with crisp contrasts and strategic accent usage for credibility and focus. The design now includes a comprehensive dark mode theme that maintains visual hierarchy and accessibility.

**Light Theme:**
- **Primary Color**: Electric Blue `oklch(0.65 0.20 160)` - Strategic highlights for CTAs, links, and focus states. Communicates innovation and technical precision.
- **Secondary Colors**: 
  - Soft Background `oklch(0.98 0.01 180)` - Light, comfortable background
  - Card Surface `oklch(0.99 0.005 180)` - Slightly elevated card backgrounds
  - Deep Text `oklch(0.15 0.02 240)` - Primary text for maximum readability
  - Muted Slate `oklch(0.45 0.02 240)` - Secondary text and de-emphasized content
- **Accent Color**: Purple Accent `oklch(0.75 0.15 280)` - Used for highlights and special emphasis
- **Success**: Emerald Green `oklch(0.65 0.18 160)` - Used for positive metrics and completion states

**Dark Theme:**
- **Background**: Deep Navy `oklch(0.15 0.01 240)` - Rich, professional background that reduces eye strain
- **Card**: Dark Slate `oklch(0.18 0.015 240)` - Card backgrounds with subtle elevation
- **Primary**: Electric Blue `oklch(0.65 0.20 250)` - Maintains visibility and vibrancy in dark mode
- **Secondary**: Darker Slate `oklch(0.25 0.03 240)` - Secondary UI elements
- **Muted**: Subdued Slate `oklch(0.22 0.02 240)` - De-emphasized content backgrounds
- **Text**: Light Gray `oklch(0.98 0.005 180)` - High contrast text for readability

**Foreground/Background Pairings**:
  - Light Background `oklch(0.98 0.01 180)`: Dark text `oklch(0.15 0.02 240)` - Ratio 14.8:1 ✓
  - Dark Background `oklch(0.15 0.01 240)`: Light text `oklch(0.98 0.005 180)` - Ratio 14.2:1 ✓
  - Primary Blue `oklch(0.65 0.20 160)`: White text `oklch(0.98 0.01 180)` - Ratio 5.8:1 ✓
  - Dark Card `oklch(0.18 0.015 240)`: Light text `oklch(0.98 0.005 180)` - Ratio 11.6:1 ✓
  - Success Green `oklch(0.65 0.18 160)`: Dark text `oklch(0.16 0.012 255)` - Ratio 6.2:1 ✓

## Font Selection

Typefaces convey technical precision and modern professionalism, with excellent readability across all screen sizes.

- **Typographic Hierarchy**:
  - H1 (Hero Headline): Inter Bold / clamp(2rem, 5vw, 3rem) / tight letter spacing (-0.02em) - Scales from 32px mobile to 48px desktop
  - H2 (Section Headers): Inter SemiBold / clamp(1.5rem, 4vw, 2rem) / tight letter spacing (-0.01em) - Scales from 24px mobile to 32px desktop
  - H3 (Card Titles): Inter SemiBold / clamp(1.25rem, 3vw, 1.5rem) - Scales from 20px mobile to 24px desktop
  - Body Text: System font stack / 16px mobile → 18px desktop / 1.7 line height for optimal readability
  - Code: JetBrains Mono / 12px mobile → 14px desktop / monospace with ligatures for technical content

## Animations

Animations serve functional purposes: orienting users during navigation, establishing element relationships, and providing interaction feedback. All animations are subtle and purposeful, with reduced motion on mobile to improve performance.

- **Stat Counters**: Animate from 0 to target value on scroll into view (1-2s duration)
- **Card Hovers**: Subtle lift (2px on mobile, 4px on desktop) with shadow increase (200ms ease-out)
- **Page Navigation**: Smooth scroll to top (300ms ease-in-out)
- **Code Tabs**: Fade transition between before/after states (200ms)
- **Mobile Menu**: Slide down animation with backdrop (300ms ease-out)
- **Touch Feedback**: Reduced transform on mobile devices (hover transforms are minimized)

## Component Selection

- **Components**:
  - Navigation: Custom component with fixed positioning, hamburger menu on mobile (<768px), glass morphism effect, theme switcher with moon/sun icons
  - Theme Switcher: Button component using Phosphor Icons, persists theme to localStorage, respects system preference
  - Stat Cards: shadcn Card with custom hover states, responsive grid (3 cols desktop → 1-2 cols mobile)
  - Code Blocks: Tabs component for before/after comparison, horizontal scroll on mobile with adequate padding
  - Contact Form: shadcn Input, Textarea, Label, Button components with proper mobile keyboard types
  - Toasts: Sonner for email copy, form submission, and theme toggle feedback
  - Badges: shadcn Badge for tech stack display

- **Customizations**:
  - Glass morphism utility class for cards (backdrop-filter, transparency, border) - now theme-aware using CSS variables
  - Animated counter component using intersection observer
  - Touch-optimized utility classes (touch-action, tap highlight removal)
  - Theme-aware color mixing for glass effect

- **States**:
  - Buttons: Default, hover (subtle scale), active (scale down slightly), focus (ring), disabled
  - Navigation Links: Active page indicator, hover color transition
  - Form Inputs: Default, focus (ring + border color), error (red ring), valid (subtle success indicator)
  - Cards: Default, hover (lift + shadow on desktop, reduced on mobile)

- **Icon Selection**: Phosphor Icons duotone style for visual interest and consistency
  - Lightning: Speed/performance
  - ShieldCheck: Reliability/security
  - Buildings: Scale/enterprise
  - Target: Precision/accuracy

- **Spacing**: Consistent 8px grid system with responsive adjustments
  - Section padding: 96px desktop → 48px mobile
  - Card padding: 32px desktop → 24px mobile  
  - Element gaps: 32px desktop → 16px mobile
  - Edge padding: 32px desktop → 16px mobile

- **Mobile**: Mobile-first responsive design with progressive enhancement
  - Navigation collapses to hamburger menu below 768px
  - Stats grid: 3 columns → 2 columns (sm) → 1 column (mobile)
  - Problems cards: 2 columns → 1 column
  - Code blocks: Horizontal scroll with full syntax highlighting maintained, no text shrinking
  - Hero text: Fluid typography using clamp() for smooth scaling
  - Touch targets: Minimum 44x44px for all interactive elements
  - Form inputs: Proper keyboard types for mobile (email, text)
  - Buttons: Full width on mobile where appropriate for easier tapping



































































  - Edge padding: 32px desktop, 16px mobile
- **Mobile**:
  - Navigation collapses to hamburger menu below 768px
  - Stats grid: 3 columns → 1 column stacked
  - Code blocks: Horizontal scroll with full syntax highlighting maintained
  - Hero text: 48px → 32px responsive scaling
  - Card grids: 2 columns → 1 column
  - Touch targets: Minimum 44x44px for all interactive elements
  - Bottom bar navigation on mobile for quick access to main pages
