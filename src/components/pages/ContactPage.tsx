import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { CheckCircle, Copy } from '@phosphor-icons/react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}${formData.company ? ` from ${formData.company}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      (formData.company ? `Company: ${formData.company}\n` : '') +
      `\nMessage:\n${formData.message}`
    )
    
    window.location.href = `mailto:markkennethbadilla@gmail.com?subject=${subject}&body=${body}`
    
    toast.success('Opening your email client...')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('markkennethbadilla@gmail.com')
    toast.success('Email copied to clipboard!')
  }

  return (
    <div className="pt-16 sm:pt-20">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-4 sm:mb-6 text-center text-2xl sm:text-3xl md:text-4xl">Let's Work Together</h1>
          <p className="text-base sm:text-xl text-center text-muted-foreground mb-12 sm:mb-16 leading-relaxed">
            I'm currently seeking remote backend or fullstack engineering roles where I can apply
            my experience building secure, scalable multi-tenant systems.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <Card className="glass p-6 sm:p-8">
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">EMAIL</p>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:markkennethbadilla@gmail.com"
                      className="text-primary hover:underline text-sm sm:text-base break-all touch-manipulation"
                    >
                      markkennethbadilla@gmail.com
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 hover:bg-accent rounded-md transition-colors shrink-0 touch-manipulation"
                      title="Copy email"
                      aria-label="Copy email address"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Response time: Within 24 hours</p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">LINKEDIN</p>
                  <a
                    href="https://www.linkedin.com/in/markkennethbadilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm sm:text-base break-all touch-manipulation"
                  >
                    linkedin.com/in/markkennethbadilla
                  </a>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">GITHUB</p>
                  <a
                    href="https://github.com/markkennethbadilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm sm:text-base break-all touch-manipulation"
                  >
                    github.com/markkennethbadilla
                  </a>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-border space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-xs sm:text-sm text-muted-foreground">Location:</span>
                    <span className="font-semibold">Metro Cebu, Philippines</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-xs sm:text-sm text-muted-foreground">Availability:</span>
                    <span className="font-semibold flex items-center gap-2">
                      <CheckCircle size={16} className="text-success" />
                      Available to start soon
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-xs sm:text-sm text-muted-foreground">Remote:</span>
                    <span className="font-semibold">Preferred</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 sm:p-8">
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm">Company (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    rows={5}
                    className="mt-1.5 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full touch-manipulation">
                  Send Message
                </Button>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Or email me directly at{' '}
                  <a
                    href="mailto:markkennethbadilla@gmail.com"
                    className="text-primary hover:underline touch-manipulation"
                  >
                    markkennethbadilla@gmail.com
                  </a>
                </p>
              </form>
            </Card>
          </div>

          <Card className="glass p-8 sm:p-12">
            <h2 className="mb-4 sm:mb-6 text-center text-xl sm:text-2xl">Ideal Role</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-semibold">FOCUS AREAS</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Multi-tenant SaaS architecture</li>
                  <li>• High-concurrency systems</li>
                  <li>• Financial accuracy requirements</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-semibold">TEAM VALUES</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Deep problem-solving</li>
                  <li>• Production ownership</li>
                  <li>• Systems that are faster & more reliable</li>
                  <li>• Continuous learning</li>
                </ul>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-semibold">TECH STACK</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Experienced with NestJS, Next.js, or willing to learn your stack
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-semibold">STAGE</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Seed to Series B (product-market fit, scaling challenges)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <Link to="/case-study">View Case Study</Link>
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
      </section>
    </div>
  )
}
