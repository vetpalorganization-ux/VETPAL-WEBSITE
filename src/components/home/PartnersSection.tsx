const partners = [
  { name: 'Ocean Conservancy', logo: 'OC' },
  { name: 'NOAA', logo: 'NOAA' },
  { name: 'Sierra Club', logo: 'SC' },
  { name: 'Veterans Affairs', logo: 'VA' },
  { name: 'Surfrider Foundation', logo: 'SF' },
  { name: 'Coral Restoration', logo: 'CR' },
];

export function PartnersSection() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Proudly Partnered With
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center w-24 h-16 rounded-lg bg-card border border-border hover:border-accent/30 transition-all duration-300"
              title={partner.name}
            >
              <span className="font-heading font-bold text-muted-foreground group-hover:text-accent transition-colors">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
