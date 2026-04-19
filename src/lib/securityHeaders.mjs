const BASE_SCRIPT_SOURCES = ["'self'", "'unsafe-inline'"];

export function createContentSecurityPolicy(nodeEnv = "production") {
  const scriptSources =
    nodeEnv === "production" ? BASE_SCRIPT_SOURCES : [...BASE_SCRIPT_SOURCES, "'unsafe-eval'"];

  return [
    "default-src 'self'",
    `script-src ${scriptSources.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "frame-src 'self' https:",
    "object-src 'none'",
    "base-uri 'none'",
    "frame-ancestors 'none'",
  ].join("; ");
}

export function createSecurityHeaders(nodeEnv = "production") {
  return [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    {
      key: "Content-Security-Policy",
      value: createContentSecurityPolicy(nodeEnv),
    },
  ];
}
