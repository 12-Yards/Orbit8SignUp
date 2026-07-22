import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "tribal18-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4" role="region" aria-label="Cookie consent" data-testid="popup-cookie-consent">
      <div className="container mx-auto max-w-3xl rounded-xl border border-border bg-secondary shadow-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1" data-testid="text-cookie-message">
          We use cookies to make Tribal18 work properly and to understand how the site is used. Read our{" "}
          <Link href="/privacy" className="text-foreground underline" data-testid="link-cookie-privacy">Privacy Policy</Link>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" onClick={() => choose("declined")} data-testid="button-cookie-decline">
            Decline
          </Button>
          <Button onClick={() => choose("accepted")} data-testid="button-cookie-accept">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
