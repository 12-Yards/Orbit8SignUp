import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import { useSEO } from "@/lib/seo";

function LegalLayout({ title, updated, children, testId }: { title: string; updated: string; children: React.ReactNode; testId: string }) {
  return (
    <div className="min-h-screen bg-background flex flex-col" data-testid={testId}>
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-legal-home">
            <img src={logoPath} alt="Tribal18 Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold">Tribal18</span>
          </Link>
          <Button variant="ghost" className="gap-2" asChild data-testid="button-legal-back">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="heading-legal-title">{title}</h1>
        <p className="text-sm text-muted-foreground mb-10" data-testid="text-legal-updated">Last updated: {updated}</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          {children}
        </div>
      </main>
    </div>
  );
}

export function PrivacyPage() {
  useSEO({
    title: "Privacy Policy | Tribal18",
    description: "Read the Tribal18 Privacy Policy to learn how we collect, use and protect your personal information.",
    path: "/privacy",
  });
  return (
    <LegalLayout title="Privacy Policy" updated="July 2026" testId="page-privacy">
      <section>
        <h2>1. Who we are</h2>
        <p>
          Tribal18 ("we", "us", "our") provides a community management platform for golf clubs, societies and communities. This Privacy Policy explains how we collect, use and protect your personal information when you use our website and services.
        </p>
      </section>
      <section>
        <h2>2. Information we collect</h2>
        <ul>
          <li>Account details you provide when registering, such as your name, email address and organisation name.</li>
          <li>Contact details you submit through our contact form, such as your name, email address and mobile number.</li>
          <li>Technical information such as browser type, device information and pages visited, collected through cookies and similar technologies.</li>
        </ul>
      </section>
      <section>
        <h2>3. How we use your information</h2>
        <ul>
          <li>To create and manage your Tribal18 platform and account.</li>
          <li>To respond to enquiries and provide customer support.</li>
          <li>To send service updates and, where you agree, marketing communications.</li>
          <li>To improve our website and services.</li>
        </ul>
      </section>
      <section>
        <h2>4. Sharing your information</h2>
        <p>
          We do not sell your personal information. We only share it with trusted service providers who help us operate our platform (such as hosting providers), or where required by law.
        </p>
      </section>
      <section>
        <h2>5. Data retention and security</h2>
        <p>
          We keep your information only for as long as needed to provide our services and meet legal obligations. We use appropriate technical and organisational measures to protect your data.
        </p>
      </section>
      <section>
        <h2>6. Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information at any time. To exercise these rights, please contact us via our <Link href="/contact" className="text-foreground underline">contact page</Link>.
        </p>
      </section>
      <section>
        <h2>7. Cookies</h2>
        <p>
          We use cookies to keep the site working properly and to understand how it is used. You can control cookies through your browser settings. See our cookie notice shown when you first visit the site.
        </p>
      </section>
      <section>
        <h2>8. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
        </p>
      </section>
    </LegalLayout>
  );
}

export function TermsPage() {
  useSEO({
    title: "Terms & Conditions | Tribal18",
    description: "Read the Tribal18 Terms & Conditions covering accounts, acceptable use, subscriptions and more.",
    path: "/terms",
  });
  return (
    <LegalLayout title="Terms & Conditions" updated="July 2026" testId="page-terms">
      <section>
        <h2>1. Agreement</h2>
        <p>
          By creating an account or using the Tribal18 website and platform, you agree to these Terms &amp; Conditions. If you do not agree, please do not use our services.
        </p>
      </section>
      <section>
        <h2>2. The service</h2>
        <p>
          Tribal18 provides community management software for clubs, societies and golf communities, including member management, events, competitions, content publishing and reciprocal play features. We may improve or change features over time.
        </p>
      </section>
      <section>
        <h2>3. Your account</h2>
        <ul>
          <li>You must provide accurate information when creating an account.</li>
          <li>You are responsible for keeping your login details secure.</li>
          <li>You are responsible for content published on your community platform by you and your administrators.</li>
        </ul>
      </section>
      <section>
        <h2>4. Acceptable use</h2>
        <p>
          You agree not to misuse the platform, including uploading unlawful content, attempting to gain unauthorised access, or using the service to send spam or harmful material.
        </p>
      </section>
      <section>
        <h2>5. Subscriptions and payment</h2>
        <p>
          Paid plans are billed as described on our pricing page. New platforms are free for the first 30 days and no card details are needed to go live. You can cancel at any time before a paid period begins.
        </p>
      </section>
      <section>
        <h2>6. Intellectual property</h2>
        <p>
          Tribal18 and its licensors own the platform and its software. You retain ownership of the content you and your members create. You grant us the rights needed to host and display that content as part of the service.
        </p>
      </section>
      <section>
        <h2>7. Liability</h2>
        <p>
          The service is provided "as is". To the fullest extent permitted by law, Tribal18 is not liable for indirect or consequential losses arising from use of the service.
        </p>
      </section>
      <section>
        <h2>8. Ending the agreement</h2>
        <p>
          You may stop using the service at any time. We may suspend or terminate accounts that breach these terms.
        </p>
      </section>
      <section>
        <h2>9. Contact</h2>
        <p>
          Questions about these terms? Get in touch via our <Link href="/contact" className="text-foreground underline">contact page</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
