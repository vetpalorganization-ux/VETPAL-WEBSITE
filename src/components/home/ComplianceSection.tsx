export function ComplianceSection() {
  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 md:p-8">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
            Veteran Participation Disclaimer
          </h3>
          <p className="text-sm text-muted-foreground">
            VETPAL provides environmental conservation programs and employment opportunities.
            VETPAL does not provide medical or mental health treatment. Participation is voluntary
            and does not replace care from the U.S. Department of Veterans Affairs or licensed providers.
          </p>
        </div>
        <div className="glass-card p-6 md:p-8">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
            Financial Transparency
          </h3>
          <p className="text-sm text-muted-foreground">
            VETPAL publishes annual impact and financial reports. Donors may request copies by contacting{" "}
            <a href="mailto:info@vetpal.org" className="text-accent hover:underline">
              info@vetpal.org
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
