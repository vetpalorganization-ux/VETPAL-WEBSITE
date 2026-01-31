export function LeadershipSection() {
  const leaders = [
    { name: "Brenden Wing", title: "Founder and Chief Executive Officer" },
    { name: "Heather Wing", title: "Director of Development" },
  ];

  const boardMembers = [
    { name: "James Hardinge", title: "Board Member" },
    { name: "David Oakey", title: "Board Member" },
    { name: "Bill West", title: "Board Member" },
  ];

  return (
    <section className="section-container bg-card">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Leadership
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Mission-Driven Leadership
        </h2>
        <p className="text-lg text-muted-foreground">
          Guided by veterans and community leaders committed to conservation and service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {leaders.map((leader) => (
          <div key={leader.name} className="glass-card p-6 text-center hover-lift">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="font-heading text-xl font-semibold text-accent">
                {leader.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div className="font-heading font-semibold text-foreground mb-1">
              {leader.name}
            </div>
            <div className="text-sm text-muted-foreground">{leader.title}</div>
          </div>
        ))}

        {boardMembers.map((member) => (
          <div key={member.name} className="glass-card p-6 text-center hover-lift">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="font-heading text-xl font-semibold text-accent">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div className="font-heading font-semibold text-foreground mb-1">
              {member.name}
            </div>
            <div className="text-sm text-muted-foreground">{member.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
