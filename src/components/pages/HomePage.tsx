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
            Automation & Integration Engineer
          </p>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
            Metro Cebu, Philippines · Remote Ready
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
            I build the connectors between systems. APIs, workflows, and AI integrations that make complex processes work seamlessly. From orchestrating third-party services to automating business logic, I ensure systems communicate effectively and reliably.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            <span className="text-foreground font-semibold">The toolkit:</span> API Orchestration · Workflow Automation · LLM Integration · System Connectors
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="glass p-6 sm:p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/10">
            <Lightning size={40} className="text-primary mb-3 sm:mb-4" weight="duotone" />
            <div className="text-5xl sm:text-6xl mb-2 font-mono">
              <AnimatedCounter value={10} suffix="+" />
            </div>
            <p className="text-base sm:text-lg font-semibold mb-1">APIs Integrated</p>
            <p className="text-sm text-muted-foreground">REST, GraphQL, AI services</p>
          </Card>

          <Card className="glass p-6 sm:p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/10">
            <ShieldCheck size={40} className="text-success mb-3 sm:mb-4" weight="duotone" />
            <div className="text-5xl sm:text-6xl mb-2 font-mono">
              <AnimatedCounter value={100} suffix="%" />
            </div>
            <p className="text-base sm:text-lg font-semibold mb-1">Workflow Reliability</p>
            <p className="text-sm text-muted-foreground">Automated processes running smoothly</p>
          </Card>

          <Card className="glass p-6 sm:p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/10 sm:col-span-2 lg:col-span-1">
            <Buildings size={40} className="text-primary mb-3 sm:mb-4" weight="duotone" />
            <div className="text-5xl sm:text-6xl mb-2 font-mono">
              <AnimatedCounter value={5} suffix="+" />
            </div>
            <p className="text-base sm:text-lg font-semibold mb-1">Systems Connected</p>
            <p className="text-sm text-muted-foreground">Enterprise platforms integrated</p>
          </Card>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl">Problems I Solve</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <LockKey size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">API Orchestration & Integration</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Connecting disparate systems through robust API integrations. From REST APIs to GraphQL, I ensure reliable data flow between services with proper error handling, retries, and monitoring.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">→ Result: Seamless system communication</p>
          </Card>

          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <Rocket size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">Workflow Automation & Queuing</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Building automated workflows that handle complex business logic. Using queuing systems like BullMQ/Redis to manage async tasks, background processing, and ensure reliable execution.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">→ Result: Efficient, scalable automation</p>
          </Card>

          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <Target size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">LLM Integration & AI Systems</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Integrating AI capabilities into applications. From Google Gemini to OpenAI, I handle API authentication, response parsing, prompt engineering, and building user interfaces around AI features.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">→ Result: Intelligent, AI-enhanced workflows</p>
          </Card>

          <Card className="glass p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <CurrencyDollar size={28} className="text-primary shrink-0 sm:w-8 sm:h-8" weight="duotone" />
              <h3 className="text-lg sm:text-xl">Multi-System Data Flow</h3>
            </div>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Designing data pipelines that connect multiple systems. Ensuring data consistency, handling transformations, and maintaining reliability across complex integration scenarios.
            </p>
            <p className="text-success font-semibold text-sm sm:text-base">→ Result: Unified, reliable data ecosystem</p>
          </Card>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl">Tech Stack</h2>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-3 font-semibold">LANGUAGES</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">Python</Badge>
              <Badge variant="secondary" className="text-sm">TypeScript</Badge>
              <Badge variant="secondary" className="text-sm">JavaScript</Badge>
              <Badge variant="secondary" className="text-sm">SQL</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3 font-semibold">INTEGRATION & AUTOMATION</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">REST APIs</Badge>
              <Badge variant="secondary" className="text-sm">Google Gemini API</Badge>
              <Badge variant="secondary" className="text-sm">BullMQ</Badge>
              <Badge variant="secondary" className="text-sm">Redis</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3 font-semibold">
              BACKEND & INFRASTRUCTURE
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">NestJS</Badge>
              <Badge variant="secondary" className="text-sm">PostgreSQL</Badge>
              <Badge variant="secondary" className="text-sm">Prisma</Badge>
              <Badge variant="secondary" className="text-sm">Docker</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Card className="glass p-8 sm:p-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">CURRENTLY</p>
          <p className="text-lg sm:text-xl font-semibold mb-4">
            Automation & Integration Engineer at Hatchit Solutions (January 2025 - Present)
          </p>
          <p className="text-muted-foreground mb-2 text-sm sm:text-base">
            Building integration systems for enterprise ERP platforms
          </p>
          <p className="text-sm text-muted-foreground">
            Certifications: PhilNITS FE · TOPCIT Level 3
          </p>
        </Card>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl">See How I Build System Integrations</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Deep dive into integrating Google Gemini API for AI-assisted task management and building reliable automation workflows.
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
              onClick={() => window.open('https://drive.google.com/file/d/1GVX8nTmYsCNC3v9KIsSzsjOwdKgIi-v1/view?usp=sharing', '_blank')}
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
