'use client';

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-0.5 bg-blue-600"></span>
              Simple, transparent pricing
            </p>
            <h1 className="text-5xl font-bold font-georgia mb-4">
              Pricing that <em className="text-cyan-500 not-italic">scales with you.</em>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Clear rates based on complexity, material, and volume. No hidden fees. Get a custom quote for your specific project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Single Part',
                desc: 'Perfect for one-off prototypes and replacements',
                price: '$15–50',
                details: ['Based on dimensions and material', '24-hour turnaround typical', 'Design review included', 'Basic finishing'],
              },
              {
                name: 'Small Batch (2–10)',
                desc: 'Ideal for testing and limited production',
                price: '$12–40/pc',
                details: ['Per-piece pricing', 'Consistent quality across batch', 'Color variations available', 'Bulk discount applied'],
                featured: true,
              },
              {
                name: 'Large Batch (50+)',
                desc: 'Cost-effective for scaling production',
                price: '$5–25/pc',
                details: ['Volume discount tier', 'Custom finishing options', 'Dedicated communication', 'Rush options available'],
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border transition transform ${
                  tier.featured
                    ? 'bg-slate-900 text-white border-slate-800 lg:scale-105 shadow-xl'
                    : 'bg-white border-slate-200 hover:shadow-lg'
                }`}
              >
                <h3 className="text-2xl font-bold font-georgia mb-2">{tier.name}</h3>
                <p className={`mb-6 text-sm ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>{tier.desc}</p>
                <div className="text-4xl font-bold font-georgia mb-8">{tier.price}</div>
                <ul className="space-y-3">
                  {tier.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className={tier.featured ? 'text-cyan-400' : 'text-blue-600'}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className={`block w-full text-center py-3 rounded-lg font-bold mt-8 transition ${
                    tier.featured
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>

          <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold font-georgia mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Design Review', desc: 'Free consultation on printability, material selection, and optimizations.' },
                { title: 'Material Advice', desc: 'Recommendations based on your part\'s function and environment.' },
                { title: 'Finishing', desc: 'Basic sanding, cleaning, and inspection included in all quotes.' },
                { title: 'Rush Options', desc: 'Need it faster? We offer expedited timelines for an additional fee.' },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
