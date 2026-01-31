import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

export default function ExecutiveSummary() {
  useEffect(() => {
    document.title = "Executive Summary | VETPAL";
    const existing = document.querySelector("meta[name='description']");
    const description =
      "A concise overview of VETPAL’s mission, need, approach, and measurable impact goals.";
    if (existing) {
      existing.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="section-container">
          <div className="max-w-[900px] mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Executive Summary
            </h1>
            <p className="text-muted-foreground mb-10">
              Executive Summary – VETPAL: Veterans Empowered To Protect Aquatic Life
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
              Mission Statement:
            </h2>
            <p className="text-muted-foreground mb-8">
              VETPAL empowers U.S. veterans by providing meaningful employment and purpose through
              marine conservation and aquatic ecosystem protection. We are committed to restoring
              both our nation’s waterways and the warriors who defended them.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
              The Need:
            </h2>
            <p className="text-muted-foreground mb-8">
              Over 33,000 U.S. veterans are currently unemployed. At the same time, more than 40% of
              America’s lakes, rivers, and coastal waters are polluted or impaired. VETPAL exists at
              the intersection of these dual crises—veteran underemployment and environmental
              degradation—offering a purpose-driven solution to both.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
              Our Approach:
            </h2>
            <p className="text-muted-foreground mb-8">
              VETPAL recruits, trains, and deploys veterans into full-time roles focused on
              environmental cleanup, water quality testing, habitat restoration, and public
              education. We partner with local governments, NGOs, and marine biologists to align our
              work with the most urgent needs in conservation.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
              Impact Goals:
            </h2>
            <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
              <li>
                Employ a minimum of 26 veterans annually at a livable wage of $65,000 by Veterans
                Day 2026.
              </li>
              <li>
                Remove 100 tons of debris and pollutants from U.S. waterways in the next 18 months.
              </li>
              <li>
                Launch veteran-led public awareness campaigns in 10 coastal and freshwater regions
                by year two.
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
              Our Vision:
            </h2>
            <p className="text-muted-foreground mb-8">
              VETPAL isn’t just about jobs or clean water—it’s about healing trauma through
              mission-driven service, reigniting purpose, and proving that when veterans lead,
              ecosystems recover.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
