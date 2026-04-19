import { createContentSecurityPolicy } from "@/lib/securityHeaders.mjs";

describe("createContentSecurityPolicy", () => {
  it("allows Next bootstrap scripts without enabling dev eval in production", () => {
    const policy = createContentSecurityPolicy("production");

    expect(policy).toContain("script-src 'self' 'unsafe-inline'");
    expect(policy).not.toContain("'unsafe-eval'");
  });

  it("allows Turbopack development eval only outside production", () => {
    const policy = createContentSecurityPolicy("development");

    expect(policy).toContain("script-src 'self' 'unsafe-inline' 'unsafe-eval'");
  });

  it("keeps fonts scoped to app-hosted assets", () => {
    const policy = createContentSecurityPolicy("production");

    expect(policy).toContain("font-src 'self'");
    expect(policy).not.toContain("r2cdn.perplexity.ai");
  });
});
