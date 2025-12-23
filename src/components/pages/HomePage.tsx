import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedCounter from '@/components/AnimatedCounter'
import { Link } from 'react-router-dom'
import {
  Lightning,
  ShieldCheck,
  Buildings,
  LockKey,
  Rocket,
  Target,
  CurrencyDollar,
  ArrowRight,
} from '@phosphor-icons/react'

export default function HomePage() {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-balance mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">Mark Kenneth Badilla</h1>
          <p className="text-xl sm:text-2xl text-primary font-semibold mb-3 sm:mb-4">
            Software Engineer | Backend-Leaning Fullstack
          </p>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
            Metro Cebu, Philippines · Open to Remote (US/EU/APAC)
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
            I build multi-tenant systems that handle real money and real inventory without
            breaking. Currently supporting 50+ users across 2 enterprise companies—core inventory and financial modules maintain zero data errors in 8+ months of production.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            <span className="text-foreground font-semibold">Specialized in:</span> Concurrency ·
            Financial Accuracy · Multi-Tenant Security
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="glass p-6 sm:p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/10">
            <Lightning size={40} className="text-primary mb-3 sm:mb-4" weight="duotone" />
            <div className="text-5xl sm:text-6xl mb-2 font-mono">
              <AnimatedCounter value={90} suffix="%" />
            </div>
            <p className="text-base sm:text-lg font-semibold mb-1">Faster inventory queries</p>
            <p className="text-sm text-muted-foreground">5s → 300ms load time</p>
          </Card>

          <Card className="glass p-6 sm:p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/10">
            <ShieldCheck size={40} className="text-success mb-3 sm:mb-4" weight="duotone" />
            <div className="text-5xl sm:text-6xl mb-2 font-mono">
              <AnimatedCounter value={100} suffix="%" />
            </div>
            <p className="text-base sm:text-lg font-semibold mb-1">Bug elimination rate</p>
            <p className="text-sm text-muted-foreground">Race conditions in production</p>
          </Card>

          <Card className="glass p-6 sm:p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/10 sm:col-span-2 lg:col-span-1">
            <Buildings size={40} className="text-primary mb-3 sm:mb-4" weight="duotone" />
            <div className="text-5xl sm:text-6xl mb-2 font-mono">
              <AnimatedCounter value={50} suffix="+" />
            </div>
            <p className="text-base sm:text-lg font-semibold mb-1">Active users daily</p>
            <p className="text-sm text-muted-foreground">Across 2 enterprise companies</p>
          </Card>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl">Problems I Solve</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <LockKey size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">Multi-Tenant Data Isolation</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Designed JWT-based authentication system enforcing strict tenant boundaries for multi-tenant
              SaaS. Zero cross-tenant data leaks in production serving 50+ users.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">→ Result: 100% security compliance audits</p>
          </Card>

          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <Rocket size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">Performance Under Load</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Eliminated N+1 queries in inventory reporting. Reduced page load from 5+ seconds to
              300ms for companies with 1,000+ SKUs across 20+ branches.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">→ Result: 94% latency reduction</p>
          </Card>

          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <Target size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">Concurrency & Race Conditions</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Fixed TOCTOU race condition causing negative inventory in high-traffic sales.
              Implemented atomic database operations with transaction wrapping.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">
              → Result: 100% bug elimination, 8+ months stable
            </p>
          </Card>

          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <CurrencyDollar size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">Financial Accuracy</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Standardized decimal precision across frontend/backend using decimal.js. Reconciled
              23 invoice discrepancies caused by floating-point errors.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">
              → Result: 100% calculation parity between systems
            </p>
          </Card>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl">Tech Stack</h2>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-3 font-semibold">LANGUAGES</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">TypeScript</Badge>
              <Badge variant="secondary" className="text-sm">JavaScript</Badge>
              <Badge variant="secondary" className="text-sm">Java</Badge>
              <Badge variant="secondary" className="text-sm">SQL</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3 font-semibold">FRONTEND</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">React</Badge>
              <Badge variant="secondary" className="text-sm">Next.js</Badge>
              <Badge variant="secondary" className="text-sm">Tailwind CSS</Badge>
              <Badge variant="secondary" className="text-sm">React Server Components</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3 font-semibold">
              DATABASE & INFRASTRUCTURE
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">PostgreSQL</Badge>
              <Badge variant="secondary" className="text-sm">Redis</Badge>
              <Badge variant="secondary" className="text-sm">Docker</Badge>
              <Badge variant="secondary" className="text-sm">BullMQ</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Card className="glass p-8 sm:p-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">CURRENTLY</p>
          <p className="text-lg sm:text-xl font-semibold mb-4">
            Software Engineer at Hatchit Solutions (June 2025 - Present)
          </p>
          <p className="text-muted-foreground mb-2 text-sm sm:text-base">
            System in production: Serving 50+ users across 2 enterprise companies daily
          </p>
          <p className="text-sm text-muted-foreground">
            Certifications: PhilNITS FE · TOPCIT Level 3
          </p>
        </Card>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl">See How I Solve Complex Problems</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Deep dive into how I eliminated race conditions in a multi-tenant inventory system
            serving 50+ users across multiple branches.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" asChild className="group w-full sm:w-auto">
              <Link to="/case-study">
                View Case Study
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://drive.google.com/file/d/1XxSLUWeNICT8jFe0dLuv6RjGbfaC0SL4/view?usp=sharing', '_blank')}
              className="w-full sm:w-auto"
            >
              View Resume
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 text-sm">
            <a
              href="mailto:markkennethbadilla@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors touch-manipulation"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/markkennethbadilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors touch-manipulation"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/markkennethbadilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors touch-manipulation"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
