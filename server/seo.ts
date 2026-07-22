const SITE_URL = "https://tribal18.com";

const DEFAULT_TITLE =
  "Community Management Software for Clubs & Members | Tribal18";
const DEFAULT_DESCRIPTION =
  "Tribal18 is an all-in-one community management platform for clubs and communities. Manage members, events, competitions, content, and reciprocal play from one powerful system.";

interface RouteMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/contact": {
    title: "Contact Us | Tribal18",
    description:
      "Get in touch with the Tribal18 team to learn how our community management platform can help your golf club, society or community.",
  },
  "/login": {
    title: "Organisers Login | Tribal18",
    description:
      "Log in to your Tribal18 organiser account to manage your community platform.",
  },
  "/create-account": {
    title: "Create Your Account | Tribal18",
    description:
      "Create your Tribal18 community platform in minutes. Free for the first 30 days, no card details needed to go live.",
  },
  "/privacy": {
    title: "Privacy Policy | Tribal18",
    description:
      "Read the Tribal18 Privacy Policy to learn how we collect, use and protect your personal information.",
  },
  "/terms": {
    title: "Terms & Conditions | Tribal18",
    description:
      "Read the Tribal18 Terms & Conditions covering accounts, acceptable use, subscriptions and more.",
  },
  "/admin": { title: "Admin | Tribal18", description: "", noindex: true },
  "/admin/login": {
    title: "Admin Login | Tribal18",
    description: "",
    noindex: true,
  },
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function injectRouteMeta(html: string, path: string): string {
  const normalized = path.replace(/\/+$/, "") || "/";
  const meta = routeMeta[normalized];
  if (!meta) return html;

  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description || DEFAULT_DESCRIPTION);
  const url = `${SITE_URL}${normalized === "/" ? "/" : normalized}`;

  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(
      /<meta name="twitter:url" content="[^"]*" \/>/,
      `<meta name="twitter:url" content="${url}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${url}" />`,
    );

  if (meta.noindex) {
    out = out.replace(
      /<meta name="robots" content="[^"]*" \/>/,
      `<meta name="robots" content="noindex, nofollow" />`,
    );
  }

  return out;
}
