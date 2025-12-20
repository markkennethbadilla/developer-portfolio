import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { toast } from 'sonner'
import { CheckCircle, Copy } from '@phosphor-icons/react'

interface ContactPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'contact') => void
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Message sent! I\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('markkennethbadilla@gmail.com')
    toast.success('Email copied to clipboard!')
  }

  return (
    <div className="pt-20">
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6 text-center">Let's Work Together</h1>
          <p className="text-xl text-center text-muted-foreground mb-16 leading-relaxed">
            I'm currently seeking remote backend or fullstack engineering roles where I can apply
            my experience building secure, scalable multi-tenant systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="glass p-8">
              <h3 className="mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">EMAIL</p>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:markkennethbadilla@gmail.com"
                      className="text-primary hover:underline"
                    >
                      markkennethbadilla@gmail.com
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 hover:bg-accent rounded-md transition-colors"
                      title="Copy email"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Response time: Within 24 hours</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">LINKEDIN</p>
                  <a
                    href="https://www.linkedin.com/in/markkennethbadilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/markkennethbadilla
                  </a>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">GITHUB</p>
                  <a
                    href="https://github.com/markkennethbadilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/markkennethbadilla
                  </a>
                </div>

                <div className="pt-6 border-t border-border space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <span className="font-semibold">Metro Cebu, Philippines</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Availability:</span>
                    <span className="font-semibold flex items-center gap-2">
                      <CheckCircle size={16} className="text-success" />
                      Available to start soon
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Remote:</span>
                    <span className="font-semibold">Preferred</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass p-8">
              <h3 className="mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Or email me directly at{' '}
                  <a
                    href="mailto:markkennethbadilla@gmail.com"
                    className="text-primary hover:underline"
                  >
                    markkennethbadilla@gmail.com
                  </a>
                </p>
              </form>
            </Card>
          </div>

          <Card className="glass p-12">
            <h2 className="mb-6 text-center">Ideal Role</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div>
                <p className="text-sm text-muted-foreground mb-3 font-semibold">FOCUS AREAS</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multi-tenant SaaS architecture</li>
                  <li>• High-concurrency systems</li>
                  <li>• Financial accuracy requirements</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3 font-semibold">TEAM VALUES</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deep problem-solving</li>
                  <li>• Production ownership</li>
                  <li>• Systems that are faster & more reliable</li>
                  <li>• Continuous learning</li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3 font-semibold">TECH STACK</p>
                <p className="text-muted-foreground">
                  Experienced with NestJS, Next.js, or willing to learn your stack
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3 font-semibold">STAGE</p>
                <p className="text-muted-foreground">
                  Seed to Series B (product-market fit, scaling challenges)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" onClick={() => onNavigate('home')}>
            Back to Home
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate('case-study')}>
            View Case Study
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download Resume
          </Button>
        </div>
      </section>
    </div>
  )
}
