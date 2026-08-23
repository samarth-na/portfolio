export function ProfileCard() {
  return (
    <section
      id="profile"
      className="relative bg-cream px-6 py-20 md:px-12 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 animate-reveal-up">
          {/* Left: label + large display */}
          <div className="lg:col-span-6 overflow-hidden">
            <p className="label text-text-muted mb-6">01 :: ABOUT RECORD</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-ink">
              COLLECTED
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-md">
              Backend-focused developer obsessed with systems, infrastructure,
              performance, and browser-native tech.
            </p>
          </div>

          {/* Right: dotted frame card */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 dotted-frame opacity-30 pointer-events-none" />
              <div className="relative border border-ink/20 bg-paper p-6 md:p-10">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
                  <span className="label text-text-muted">
                    INTELLIGENCE SYSTEM
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-ink" />
                    <span className="w-3 h-3 bg-ink" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="label text-text-muted mb-2">SUBJECT NAME</p>
                    <p className="font-mono text-xl md:text-2xl text-ink">
                      Samarth (Sam) Nagar
                    </p>
                  </div>
                  <div>
                    <p className="label text-text-muted mb-2">DOCUMENT ID</p>
                    <div className="inline-block bg-slate/40 px-4 py-2 font-mono text-lg">
                      SN-ABT-001
                    </div>
                  </div>
                  <div>
                    <p className="label text-text-muted mb-2">EDUCATION</p>
                    <p className="font-mono text-sm md:text-base leading-relaxed">
                      SAGE University Indore
                      <br />
                      Institute of Advanced Computing
                      <br />
                      B.Tech (Hons.) Computer Science &amp; Technology
                      <br />
                      Expected 2027 · CGPA 7.8/10
                    </p>
                  </div>
                  <div>
                    <p className="label text-text-muted mb-2">LOCATION</p>
                    <p className="font-mono text-sm md:text-base leading-relaxed">
                      Indore, India
                      <br />
                      UTC+05:30
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10">
                  <p className="label text-text-muted mb-3">SUMMARY</p>
                  <p className="text-text-secondary leading-relaxed">
                    I build TypeScript &amp; Node.js applications, APIs,
                    relational-database-heavy systems, and real-time features.
                    Practical experience with WebSockets, WebRTC, REST APIs, and
                    deployment through CI/CD, containers, Linux servers, and
                    distributed serverless services. I design modular software
                    focused on robustness and resource utilization, inspired by
                    the Unix philosophy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
