import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import { Link } from "wouter";
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
  LayoutDashboard,
  Trophy,
  Settings,
  Search,
  Bell,
  MoreHorizontal
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
              All-in-One Community{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Empowerment</span> &{" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">Management</span> Platform
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed" data-testid="text-hero-description">
              Tribal18 helps communities to connect members, manage events and competitions, share content, and provide specific features for different community types — all from one powerful platform.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/create-account">
                <Button size="lg" className="gap-2" data-testid="button-start-trial">
                  Go Live Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="https://tribal18.golf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-platform">
                  <Play className="w-4 h-4" />
                  View Platform
                </Button>
              </a>
            </div>
          </div>
          <div className="relative" data-testid="hero-dashboard-preview">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-card glow-effect">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-secondary/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 border border-border/60 text-[10px] text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    admin.tribal18.golf
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="hidden sm:flex flex-col w-40 border-r border-border/60 bg-background/40 py-4 px-2 gap-1">
                  <div className="flex items-center gap-2 px-2 mb-3">
                    <img src={logoPath} alt="" className="w-5 h-5" />
                    <span className="text-xs font-bold" data-testid="text-dashboard-title">Tribal18</span>
                  </div>
                  {[
                    { label: "Dashboard", icon: LayoutDashboard, active: false },
                    { label: "Members", icon: Users, active: true },
                    { label: "Competitions", icon: Trophy, active: false },
                    { label: "Events", icon: Calendar, active: false },
                    { label: "Groups", icon: Globe, active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] ${item.active ? "bg-accent/20 text-accent font-semibold" : "text-muted-foreground"}`}
                      data-testid={`sidebar-item-${i}`}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.label}
                    </div>
                  ))}
                  <div className="mt-auto flex items-center gap-2 px-2 py-1.5 text-[11px] text-muted-foreground">
                    <Settings className="w-3.5 h-3.5" />
                    Settings
                  </div>
                </div>
                <div className="flex-1 p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-1 max-w-[180px] px-2.5 py-1.5 rounded-full bg-secondary/80 border border-border/60 text-[10px] text-muted-foreground">
                      <Search className="w-3 h-3" />
                      Search members...
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="w-3.5 h-3.5 text-muted-foreground" />
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-[9px] font-bold">AW</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold">Members</div>
                      <div className="text-[10px] text-muted-foreground">Manage your community roster</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-semibold">+ Add Member</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-border/60 bg-secondary/40 p-2.5" data-testid="stat-members">
                      <div className="text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Active Members</div>
                      <div className="text-lg font-bold leading-none">1,247 <span className="text-[9px] font-semibold text-accent align-middle">+12</span></div>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-secondary/40 p-2.5" data-testid="stat-events">
                      <div className="text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Events This Month</div>
                      <div className="text-lg font-bold leading-none">9 <span className="text-[9px] font-semibold text-accent align-middle">+3</span></div>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-secondary/40 p-2.5" data-testid="stat-groups">
                      <div className="text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Groups</div>
                      <div className="text-lg font-bold leading-none">156 <span className="text-[9px] font-semibold text-accent align-middle">+4</span></div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/60 overflow-hidden">
                    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 px-3 py-1.5 bg-secondary/60 text-[9px] uppercase tracking-wide text-muted-foreground">
                      <span>Member</span>
                      <span>Status</span>
                      <span></span>
                    </div>
                    {[
                      { name: "James Turner", initials: "JT", status: "Active" },
                      { name: "Sarah Mills", initials: "SM", status: "Active" },
                      { name: "David Lowe", initials: "DL", status: "Pending" },
                      { name: "Rory Kane", initials: "RK", status: "Active" },
                    ].map((member, i) => (
                      <div key={i} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 px-3 py-2 border-t border-border/40" data-testid={`member-row-${i}`}>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[8px] font-bold text-muted-foreground">{member.initials}</div>
                          <span className="text-[11px] font-medium">{member.name}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ${member.status === "Active" ? "bg-accent/20 text-accent" : "bg-amber-400/20 text-amber-400"}`}>{member.status}</span>
                        <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                <Globe className="w-4 h-4" />
                Community Platform
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text" data-testid="heading-features">
                Build a thriving online community
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
                Everything You Need to Grow, Engage, and Manage Your Community
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed" data-testid="text-features-description">
                Tribal18 is a modern community software platform designed for societies, content creators and independent communities looking to increase engagement, participation, and revenue.
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
                  <span>Free Trial Available</span>
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
            <a href="https://tribal18.golf" target="_blank" rel="noopener noreferrer">
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
                {["Up to 50 members", "Basic event management", "Community feed", "Email support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-starter-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/create-account">
                <Button variant="outline" className="w-full mt-auto" data-testid="button-get-started-free">Get Started Free</Button>
              </Link>
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
                {["Up to 500 members", "Advanced competitions", "Reciprocal play", "Content publishing", "Priority support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-pro-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/create-account">
                <Button className="w-full mt-auto" data-testid="button-start-trial-pro">Go Live Now</Button>
              </Link>
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
              <Link href="/contact">
                <Button variant="outline" className="w-full mt-auto" data-testid="button-contact-us">Contact Us</Button>
              </Link>
            </CardContent>
          </Card>
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
              <a href="#" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-terms">Terms of Service</a>
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
