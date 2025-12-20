import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, CheckCircle, XCircle } from '@phosphor-icons/react'

interface CaseStudyPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'contact') => void
}

export default function CaseStudyPage({ onNavigate }: CaseStudyPageProps) {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="mb-6 sm:mb-8">
          <Badge className="mb-3 sm:mb-4">CASE STUDY</Badge>
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            How I Eliminated Race Conditions in a Multi-Tenant Inventory System
          </h1>
        </div>

        <Card className="glass p-6 sm:p-8 mb-8 sm:mb-12">
          <h3 className="text-success mb-3 sm:mb-4 text-lg sm:text-xl">The Impact</h3>
          <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
            Eliminated <span className="font-bold text-success">100%</span> of negative inventory
            bugs in production serving 50+ users. Core inventory system maintains zero race condition errors in 8+ months since fix deployment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 sm:pt-6 border-t border-border">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">PROJECT</p>
              <p className="font-semibold text-sm sm:text-base">Digits (Multi-Company ERP)</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">ROLE</p>
              <p className="font-semibold text-sm sm:text-base">Software Engineer</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">COMPANY</p>
              <p className="font-semibold text-sm sm:text-base">Hatchit Solutions</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">TECH STACK</p>
              <p className="font-semibold text-xs sm:text-sm">NestJS · TypeScript · PostgreSQL</p>
            </div>
          </div>
        </Card>

        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">The Problem</h2>

            <div className="space-y-6 sm:space-y-8">
              <Card className="glass p-6 sm:p-8">
                <h3 className="text-destructive mb-3 sm:mb-4 text-lg sm:text-xl">The Incident</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Finance flagged 12 inventory records with impossible negative quantities in a
                  single month. Money was being lost. Customers were confused. Our reputation was
                  at risk.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">The Investigation</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Despite having quantity validation (<code className="text-primary">qty &gt; 0</code>) in our code, items were still going negative. The bug only appeared during
                  high-traffic periods—multiple cashiers across multiple branches selling
                  simultaneously.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">The Root Cause</h3>
                <p className="leading-relaxed mb-4 text-sm sm:text-base">
                  Classic <span className="font-semibold text-primary">TOCTOU</span> race
                  condition. When two cashiers tried to sell the last item at the same time:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li>Cashier A checks: 10 items available ✓</li>
                  <li>Cashier B checks: 10 items available ✓ (before A updates)</li>
                  <li>Cashier A updates: 10 - 6 = 4</li>
                  <li>Cashier B updates: 10 - 6 = 4 (using stale data)</li>
                  <li className="font-bold text-destructive">
                    Actual result: Should be -2, but database shows 4
                  </li>
                </ol>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">The Solution</h2>

            <div className="space-y-6 sm:space-y-8">
              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Step 1: Reproduce the Bug</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Used Apache Bench to simulate 100 concurrent requests in staging environment.
                  Confirmed the race condition was reproducible under load. Instrumented the code
                  with detailed logging to trace the exact timing of failures.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Step 2: Atomic Operations</h3>
                <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Refactored <code className="text-primary">deductInventory()</code> to eliminate
                  the gap between check and update:
                </p>

                <Tabs defaultValue="before" className="w-full">
                  <TabsList className="grid w-full max-w-md grid-cols-2 mb-4">
                    <TabsTrigger value="before" className="text-xs sm:text-sm">❌ Race Condition</TabsTrigger>
                    <TabsTrigger value="after" className="text-xs sm:text-sm">✓ Race-Free</TabsTrigger>
                  </TabsList>

                  <TabsContent value="before">
                    <div className="relative">
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1 sm:gap-2">
                        <XCircle size={16} className="text-destructive sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm text-destructive font-semibold">Vulnerable</span>
                      </div>
                      <pre className="bg-card/50 p-4 sm:p-6 rounded-lg border-l-4 border-destructive overflow-x-auto">
                        <code className="text-xs sm:text-sm font-mono text-foreground/90">{`// Read (step 1)
const stock = await getStock(itemId)

// Check (step 2)
// ⚠️ GAP: another request can happen here
if (stock >= quantity) {
  // Update (step 3)
  await updateStock(itemId, stock - quantity)
}`}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="after">
                    <div className="relative">
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1 sm:gap-2">
                        <CheckCircle size={16} className="text-success sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm text-success font-semibold">Atomic</span>
                      </div>
                      <pre className="bg-card/50 p-4 sm:p-6 rounded-lg border-l-4 border-success overflow-x-auto">
                        <code className="text-xs sm:text-sm font-mono text-foreground/90">{`await prisma.$transaction(async (tx) => {
  // Validate first
  if (inventory.on_hand_quantity.lessThan(quantity)) {
    throw new Error('Insufficient stock')
  }
  
  // ✓ Atomic decrement - check and update in ONE operation
  await tx.inventory.update({
    where: { id },
    data: { 
      on_hand_quantity: { decrement: quantity } 
    }
  })
  
  // Audit trail
  await tx.inventoryMovement.create({ data: {...} })
})`}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Step 3: Transaction Guarantees</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Wrapped the entire sales flow—inventory deduction, serial number updates,
                  movement logging—in a single transaction. If payment fails, everything rolls
                  back automatically. No partial states, no manual cleanup.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="text-primary mb-3 sm:mb-4 text-lg sm:text-xl">The Key Insight</h3>
                <p className="leading-relaxed italic text-sm sm:text-base">
                  "The database should enforce constraints, not your application code. Race
                  conditions are inevitable in concurrent systems—the solution is atomic operations
                  at the data layer."
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">The Results</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 sm:mb-8">
              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Immediate Impact</h3>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">100% elimination</span> of negative inventory
                      bugs
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">Zero data integrity issues</span> in 8+ months of
                      production
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">50+ users</span> protected from this entire
                      class of bug
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">Backward compatible</span> — no schema changes,
                      no data migration
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">Zero downtime</span> deployment
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Long-term Impact</h3>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Pattern documented and adopted across all 50+ services
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Became the standard approach for any concurrent write operation
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Informed our code review checklist (check for TOCTOU vulnerabilities)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Reduced debugging time for similar issues (we know the pattern)
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="glass p-6 sm:p-8">
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">What I Learned</h3>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li>
                  • Concurrency bugs are hard to reproduce in development but inevitable in
                  production at scale
                </li>
                <li>
                  • Database-level guarantees are stronger than application-level validation
                </li>
                <li>
                  • Performance testing (Apache Bench) is essential before deploying concurrent
                  code
                </li>
                <li>• Good logging and observability make bugs reproducible</li>
              </ul>
            </Card>
          </div>

          <div>
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">Why This Matters for Your Team</h2>

            <Card className="glass p-6 sm:p-8">
              <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                This case study demonstrates:
              </p>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>
                    <span className="font-semibold">Problem-solving under pressure</span> —
                    production bugs with financial impact
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>
                    <span className="font-semibold">Deep technical knowledge</span> — ACID,
                    atomicity, race conditions
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>
                    <span className="font-semibold">Production experience</span> — serving 50+
                    users in production multi-tenant system
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span>
                    <span className="font-semibold">Systems thinking</span> — not just fixing the
                    bug, but preventing the pattern
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">5.</span>
                  <span>
                    <span className="font-semibold">Communication</span> — explaining complex
                    concepts clearly
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <Card className="glass p-6 sm:p-8">
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Technical Deep Dive</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                <span className="font-semibold text-foreground">TOCTOU Vulnerability:</span>{' '}
                Time-of-Check-Time-of-Use race conditions occur when there's a gap between
                validation and action. In distributed systems or multi-threaded environments, this
                gap is always vulnerable.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                <span className="font-semibold text-foreground">Atomic Operation:</span> An
                operation that completes in a single step relative to other operations. If any step
                in the sales flow fails, all changes roll back automatically—maintaining data
                consistency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Card className="glass p-8 sm:p-12 text-center">
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">Let's Build Reliable Systems Together</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Interested in this kind of problem-solving for your team? Let's discuss how I can help
            make your systems faster and more reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('contact')} className="group w-full sm:w-auto">
              Get in Touch
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('home')} className="w-full sm:w-auto">
              Back to Home
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
