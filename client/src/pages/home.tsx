import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import heroAppPath from "@assets/image_1784735462257.png";
import { Link } from "wouter";
import { useSEO } from "@/lib/seo";
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  Globe, 
  FileText, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Palette
} from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
        <div className="flex items-center gap-2" data-testid="header-logo">
          <img 
            src={logoPath} 
            alt="Tribal18 Logo" 
            className="h-10 w-10 object-contain"
            data-testid="img-logo"
          />
          <span className="text-xl font-bold text-foreground" data-testid="text-brand-name">Tribal18</span>
        </div>
        <nav className="hidden md:flex items-center gap-6" data-testid="nav-main">
          <a href="/#features" className="text-sm font-medium text-muted-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-features">Features</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/create-account">
            <Button size="sm" data-testid="button-create-account">Create Account</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-12 lg:py-20" data-testid="section-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" data-testid="heading-hero">
              Built to Help Your{" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">Golf Community</span>{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Flourish</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed" data-testid="text-hero-description">
              Build a thriving golfing community with Tribal18. Our web and mobile platform gives clubs, societies and golf communities everything they need to manage members, organise competitions and events, connect golfers, arrange games and keep members engaged.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/create-account">
                <Button size="lg" className="gap-2" data-testid="button-start-trial">
                  Go Live Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="https://tribal18.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-platform">
                  <Play className="w-4 h-4" />
                  View Platform
                </Button>
              </a>
            </div>
          </div>
          <div className="relative" data-testid="hero-dashboard-preview">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 glow-effect">
              <img
                src={heroAppPath}
                alt="Tribal18 mobile app screens showing feed, events, course map, and member profiles"
                className="w-full h-auto"
                data-testid="img-hero-app"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "Member Communication & Social Networking",
      description: "Enable members to connect, message, comment, post, and compete inside a private community network.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "member-communication"
    },
    {
      icon: Users,
      title: "Groups & Communities",
      description: "Create regional groups, interest-based groups, trip groups, and societies so members can easily organise away days, trips, and regular meetups.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "groups-communities"
    },
    {
      icon: Calendar,
      title: "Events & Competition Management",
      description: "Create and manage meet-ups, leagues, knockout tournaments, team competitions, and practice sessions with ease.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "events-competitions"
    },
    {
      icon: Globe,
      title: "Tee Time Offers & Reciprocal Play Requests",
      description: "Allow members to offer availability or request reciprocal access at other clubs and regions. Discover new venues and meet new members effortlessly.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "reciprocal-play"
    },
    {
      icon: FileText,
      title: "Content Publishing & Insights",
      description: "Share news, articles, coaching tips, and community updates. Track engagement and allow members to publish articles or opinion pieces.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "content-publishing"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Monitor member activity, event participation, and community growth with detailed analytics and insights.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "analytics-reporting"
    }
  ];

  return (
    <section id="features" className="pt-10 lg:pt-14 pb-20 lg:pb-28 bg-muted/30" data-testid="section-features">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-emerald-500/10 rounded-2xl blur-3xl"></div>
          <Card className="relative border-0 bg-gradient-to-br from-card/80 to-card shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                Fully Branded &amp; Customisable
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text" data-testid="heading-features">
                Own the Experience. Build the Community.
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
                One platform. Every tool your community needs.
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed" data-testid="text-features-description">
                Fully branded, fully customisable and managed by your own administrators, Tribal18 provides all the tools to grow and run your community from a single platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Easy Setup</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>No Technical Skills Required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Go Live For Free</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-border"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center" data-testid="heading-features-label">Features</h2>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-border"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="bg-sky-500/10 border-sky-500/25 h-full" data-testid={`card-feature-${i}`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${feature.colorClass} shadow-sm`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-3" data-testid={`heading-feature-${i}`}>{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1" data-testid={`text-feature-${i}`}>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-sky-600 relative overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="heading-cta">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of communities already using Tribal18 to engage their members.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://tribal18.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-white text-emerald-700" data-testid="button-view-platform-home">
                View Platform
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-contact-us-home">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="pt-5 lg:pt-7 pb-20 lg:pb-28" data-testid="section-pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-pricing">
            Choose your Plan
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-pricing-description">
            Transparent monthly or annual subscriptions. Start growing your community today.
          </p>
          <p className="text-emerald-500 dark:text-emerald-400 font-medium mt-3" data-testid="text-pricing-free-trial">
            Free for first 30 days, no card details needed to go live.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover-elevate h-full" data-testid="card-pricing-starter">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-starter">Starter</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-starter">Free</div>
                <div className="text-sm text-muted-foreground">Forever</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Up to 50 members", "Basic event management", "Community feed", "Content publishing", "Reviews", "Podcasts", "Email support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-starter-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="hover-elevate h-full border-emerald-300 dark:border-emerald-700 relative" data-testid="card-pricing-professional">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-emerald-600 dark:bg-emerald-500" data-testid="badge-popular">Most Popular</Badge>
            </div>
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-professional">Professional</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-professional">£49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <div className="text-sm text-muted-foreground">Billed monthly</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Up to 500 members", "Advanced competitions", "Reciprocal play", "Search and connect with other golfers", "Priority support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-pro-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="hover-elevate h-full" data-testid="card-pricing-enterprise">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-enterprise">Enterprise</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-enterprise">£150<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <div className="text-sm text-muted-foreground">Billed annually</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Unlimited members", "White-label branding", "API access", "Dedicated support", "Custom integrations"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-enterprise-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/create-account">
            <Button size="lg" data-testid="button-pricing-go-live">Go Live Now - pay nothing for 30 days</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [showApiPopup, setShowApiPopup] = useState(false);

  return (
    <>
      <footer className="border-t bg-muted/30 py-12" data-testid="section-footer">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4" data-testid="footer-logo">
                <img src={logoPath} alt="Tribal18 Logo" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold">Tribal18</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed" data-testid="text-footer-description">
                Tribal18 is a leading community management software platform helping clubs and communities connect members, manage events and competitions, enable reciprocal play, and grow participation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="heading-footer-product">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid="link-footer-features">Features</a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid="link-footer-pricing">Pricing</a>
                </li>
                <li>
                  <button onClick={() => setShowApiPopup(true)} className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block text-left" data-testid="link-footer-integrations">Integrations</button>
                </li>
                <li>
                  <button onClick={() => setShowApiPopup(true)} className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block text-left" data-testid="link-footer-api">API</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="heading-footer-company">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid="link-footer-contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} Tribal18. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-privacy">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

      {showApiPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowApiPopup(false)} data-testid="popup-api-overlay">
          <div className="bg-card border rounded-xl shadow-xl max-w-md w-full mx-4 p-6" onClick={(e) => e.stopPropagation()} data-testid="popup-api">
            <h3 className="text-lg font-bold mb-3" data-testid="heading-api-popup">Integrations & API</h3>
            <p className="text-muted-foreground mb-4" data-testid="text-api-popup">
              Contact our team for access to our integration tools and API.
            </p>
            <div className="flex gap-3">
              <Link href="/contact">
                <Button data-testid="button-api-contact">Contact Us</Button>
              </Link>
              <Button variant="outline" onClick={() => setShowApiPopup(false)} data-testid="button-api-close">Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  useSEO({ path: "/" });
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
