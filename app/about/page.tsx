'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-600"></span>
              Our story
            </p>
            <h1 className="text-5xl font-bold font-georgia mb-8">
              From idea to <em className="text-cyan-500 not-italic">reality.</em>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              JP Global was founded on a simple belief: great tools and education change how we build. Our 3D printing service brings rapid prototyping and custom manufacturing within reach. Our Spanish learning platform makes language acquisition interactive and enjoyable.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 mb-12">
              <h2 className="text-3xl font-bold font-georgia mb-6">JP 3D Printing</h2>
              <p className="text-slate-600 mb-4">
                We believe that great ideas shouldn't be limited by manufacturing constraints. Our FDM printing technology turns sketches, CAD files, and concepts into tangible, functional parts in hours, not weeks. Whether you're testing a product, creating a replacement part, or running a small batch, we handle the technical details so you can focus on innovation.
              </p>
              <p className="text-slate-600 mb-4">
                Our process is transparent, our timelines are clear, and our prices are fair. We work with you to understand your project's needs and deliver results that exceed expectations.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 mb-12">
              <h2 className="text-3xl font-bold font-georgia mb-6">Spanish Learn</h2>
              <p className="text-slate-600 mb-4">
                Language learning doesn't have to be boring or expensive. Spanish Learn brings interactive, engaging lessons to anyone who wants to master Spanish at their own pace. From vocabulary drills to real-world pronunciation practice, every lesson builds your confidence and competence.
              </p>
              <p className="text-slate-600">
                We believe in learning through practice, immediate feedback, and celebration of progress. Every lesson is designed to be quick, satisfying, and genuinely helpful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: '500+', label: 'Parts printed' },
                { stat: '24h', label: 'Avg response time' },
                { stat: '4.8★', label: 'Customer rating' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold font-georgia text-blue-600 mb-2">{item.stat}</div>
                  <p className="text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
