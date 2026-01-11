import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, XCircle } from '@phosphor-icons/react'

export default function CaseStudyPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="mb-6 sm:mb-8">
          <Badge className="mb-3 sm:mb-4">CASE STUDY</Badge>
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Integrating Google Gemini API for AI-Assisted Task Management
          </h1>
        </div>

        <Card className="glass p-6 sm:p-8 mb-8 sm:mb-12">
          <h3 className="text-success mb-3 sm:mb-4 text-lg sm:text-xl">The Impact</h3>
          <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
            Successfully integrated Google Gemini API into a production task management application, enabling AI-powered task suggestions and intelligent workflow assistance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 sm:pt-6 border-t border-border">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">PROJECT</p>
              <p className="font-semibold text-sm sm:text-base">AI Task Manager</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">ROLE</p>
              <p className="font-semibold text-sm sm:text-base">Integration Engineer</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">COMPANY</p>
              <p className="font-semibold text-sm sm:text-base">Personal Project</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">TECH STACK</p>
              <p className="font-semibold text-xs sm:text-sm">Next.js · Gemini API · TypeScript</p>
            </div>
          </div>
        </Card>

        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">The Problem</h2>

            <div className="space-y-6 sm:space-y-8">
              <Card className="glass p-6 sm:p-8">
                <h3 className="text-destructive mb-3 sm:mb-4 text-lg sm:text-xl">The Challenge</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Building a task management app where users needed AI assistance for task planning and prioritization. Manual task management is inefficient—users forget steps, miss dependencies, and struggle with prioritization.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">The Opportunity</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Google Gemini API offered powerful AI capabilities for natural language processing and task analysis. The challenge was securely integrating this external AI service into a web application while maintaining good user experience.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Integration Requirements</h3>
                <p className="leading-relaxed mb-4 text-sm sm:text-base">
                  The integration needed to handle:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li>Secure API key management (never expose to client)</li>
                  <li>Real-time AI responses with proper loading states</li>
                  <li>Error handling for API failures and rate limits</li>
                  <li>Structured prompt engineering for consistent outputs</li>
                  <li>Cost optimization and usage monitoring</li>
                </ul>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">The Solution</h2>

            <div className="space-y-6 sm:space-y-8">
              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Step 1: Secure API Architecture</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Used Next.js API routes as a proxy to keep Gemini API keys server-side only. Client makes requests to our backend, which forwards to Gemini and returns responses. This prevents API key exposure and allows server-side rate limiting.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Step 2: Prompt Engineering & Response Handling</h3>
                <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Designed structured prompts to get consistent, parseable responses from Gemini:
                </p>

                <Tabs defaultValue="prompt" className="w-full">
                  <TabsList className="grid w-full max-w-md grid-cols-2 mb-4">
                    <TabsTrigger value="prompt" className="text-xs sm:text-sm">Prompt Structure</TabsTrigger>
                    <TabsTrigger value="response" className="text-xs sm:text-sm">Response Parsing</TabsTrigger>
                  </TabsList>

                  <TabsContent value="prompt">
                    <div className="relative">
                      <pre className="bg-card/50 p-4 sm:p-6 rounded-lg border-l-4 border-success overflow-x-auto">
                        <code className="text-xs sm:text-sm font-mono text-foreground/90">{`Analyze this task and provide structured suggestions:

Task: "\${taskTitle}"
Context: Task management application

Respond in JSON format:
{
  "suggestions": ["step 1", "step 2", "step 3"],
  "priority": "high|medium|low",
  "estimatedHours": number,
  "dependencies": ["task A", "task B"]
}`}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="response">
                    <div className="relative">
                      <pre className="bg-card/50 p-4 sm:p-6 rounded-lg border-l-4 border-primary overflow-x-auto">
                        <code className="text-xs sm:text-sm font-mono text-foreground/90">{`// Parse Gemini JSON response
const data = JSON.parse(response.text());

// Use structured data in UI
setSuggestions(data.suggestions);
setPriority(data.priority);
setEstimatedHours(data.estimatedHours);`}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Step 3: Real-Time UX with Error Handling</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Implemented React hooks for loading states, error boundaries, and optimistic updates. Added retry logic for failed API calls and graceful degradation when Gemini is unavailable.
                </p>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="text-primary mb-3 sm:mb-4 text-lg sm:text-xl">The Key Insight</h3>
                <p className="leading-relaxed italic text-sm sm:text-base">
                  "AI integration isn't just about calling APIs—it's about designing the entire user experience around AI capabilities, from prompt engineering to error handling to cost optimization."
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
                      <span className="font-bold">AI-powered task assistance</span> available to all users
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">Secure API integration</span> with zero key exposure
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">Structured AI responses</span> for consistent UX
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={20} className="text-success shrink-0 mt-0.5 sm:w-6 sm:h-6" />
                    <span>
                      <span className="font-bold">Production deployment</span> with error handling
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="glass p-6 sm:p-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Technical Achievements</h3>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Server-side API proxy pattern for secure external integrations
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Prompt engineering techniques for structured AI outputs
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Real-time UX patterns for async AI operations
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary">→</span>
                    <span>
                      Error handling and fallback strategies for external APIs
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="glass p-6 sm:p-8">
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">What I Learned</h3>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li>
                  • AI integration requires thinking beyond just API calls—consider UX, security, and cost
                </li>
                <li>
                  • Prompt engineering is crucial for getting consistent, useful AI responses
                </li>
                <li>
                  • Server-side proxies are essential for secure external API integrations
                </li>
                <li>• Always plan for API failures and have graceful degradation strategies</li>
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
                    <span className="font-semibold">API Integration Expertise</span> — securely connecting external AI services
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>
                    <span className="font-semibold">Modern Development Practices</span> — server-side proxies, structured responses, error handling
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>
                    <span className="font-semibold">User Experience Focus</span> — real-time feedback, loading states, graceful failures
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span>
                    <span className="font-semibold">Production-Ready Code</span> — deployed integration handling real user traffic
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary font-bold">5.</span>
                  <span>
                    <span className="font-semibold">Problem-Solving Approach</span> — breaking down complex integration challenges
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <Card className="glass p-6 sm:p-8">
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Technical Deep Dive</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                <span className="font-semibold text-foreground">API Proxy Pattern:</span>{' '}
                Using server-side endpoints to securely call external APIs. The client never touches API keys, and the server can implement rate limiting, caching, and error handling.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                <span className="font-semibold text-foreground">Prompt Engineering:</span> Crafting specific instructions for AI models to produce structured, predictable outputs. This transforms free-form AI responses into reliable data for your application.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Card className="glass p-8 sm:p-12 text-center">
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl">Let's Build Integrated Systems Together</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Interested in AI integrations, API orchestration, or workflow automation for your team? Let's discuss how I can help connect your systems and build reliable integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" asChild className="group w-full sm:w-auto">
              <Link to="/contact">
                Let's Work Together
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
