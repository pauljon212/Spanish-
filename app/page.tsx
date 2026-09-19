'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-sm uppercase tracking-widest text-blue-300 mb-6 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-blue-300"></span>
                Local ideas. Layer by layer.
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-georgia">
                From sketch to <em className="text-cyan-400">something real.</em>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                Fast, thoughtful 3D printing for prototypes, replacement parts, custom gifts, and short production runs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
                  Start your project
                  <span>↗</span>
                </a>
                <a href="#gallery" className="inline-flex items-center justify-center gap-2 text-blue-300 hover:text-white font-bold border-b border-blue-300 pb-1 transition">
                  See sample work
                  <span>↓</span>
                </a>
              </div>
              <ul className="flex flex-wrap gap-8 text-sm">
                <li>
                  <strong className="block text-2xl mb-1">24h</strong>
                  <span className="text-slate-400 uppercase text-xs">Typical reply</span>
                </li>
                <li>
                  <strong className="block text-2xl mb-1">0.1mm</strong>
                  <span className="text-slate-400 uppercase text-xs">Fine layers</span>
                </li>
                <li>
                  <strong className="block text-2xl mb-1">1–100+</strong>
                  <span className="text-slate-400 uppercase text-xs">Part runs</span>
                </li>
              </ul>
            </div>
            <div className="reveal hidden lg:block">
              <div className="relative p-6 border border-slate-700 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur">
                <div className="flex justify-between items-center mb-4 text-xs uppercase tracking-widest text-slate-400">
                  <span>JP / MK-I</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
                <svg className="w-full h-auto mb-4" viewBox="0 0 520 520">
                  <defs>
                    <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#6d5dfc" />
                      <stop offset=".52" stopColor="#9a79ff" />
                      <stop offset="1" stopColor="#35e0c1" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="260" cy="430" rx="146" ry="24" fill="#1e293b" opacity=".6" />
                  <path d="M174 106h172c-18 72-3 102 34 143 62 70 30 165-120 165S78 319 140 249c37-41 52-71 34-143Z" fill="url(#body)" />
                  <ellipse cx="260" cy="106" rx="86" ry="21" fill="#b3a5ff" />
                  <ellipse cx="260" cy="106" rx="65" ry="13" fill="#1e293b" />
                </svg>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-400">
                    <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>Printing
                  </span>
                  <strong className="text-white">87%</strong>
                </div>
                <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-cyan-400 py-4 text-slate-900 font-bold text-sm uppercase tracking-widest transform -skew-y-1">
        <div className="flex gap-8 whitespace-nowrap overflow-hidden">
          {[1, 2].map((n) => (
            <div key={n} className="flex gap-8">
              <span>PROTOTYPES</span>
              <span>✦</span>
              <span>CUSTOM PARTS</span>
              <span>✦</span>
              <span>SMALL BATCHES</span>
              <span>✦</span>
              <span>DESIGN SUPPORT</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section py-20" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-600"></span>
              What we make
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-georgia mb-4">
              Built for the <em className="text-cyan-500 not-italic">real world.</em>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Whether you arrive with a production-ready file or a napkin sketch, we help shape the right path from idea to finished part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rapid Prototyping', desc: 'Test form, fit, and function quickly before committing to tooling or production.', items: ['Functional models', 'Design iterations', 'Fit-check parts'] },
              { num: '02', title: 'Custom Parts', desc: 'One-off solutions, replacement components, organizers, mounts, and clever fixes.', items: ['Reverse engineering', 'Personalized designs', 'Repair components'], featured: true },
              { num: '03', title: 'Small-Batch Runs', desc: 'Consistent, flexible production without the cost or delay of traditional tooling.', items: ['Low-volume production', 'Color variations', 'Simple finishing'] },
            ].map((service, i) => (
              <div key={i} className={`p-8 rounded-2xl border transition transform hover:shadow-lg ${service.featured ? 'bg-slate-900 text-white border-slate-800 lg:scale-105' : 'bg-white border-slate-200'}`}>
                <div className="text-right text-slate-400 mb-6 text-sm font-georgia">{service.num}</div>
                <h3 className="text-2xl font-bold mb-3 font-georgia">{service.title}</h3>
                <p className={`mb-6 ${service.featured ? 'text-slate-300' : 'text-slate-600'}`}>{service.desc}</p>
                <ul className={`space-y-2 text-sm border-t pt-4 ${service.featured ? 'border-slate-700' : 'border-slate-200'}`}>
                  {service.items.map((item, j) => (
                    <li key={j}>
                      <span className={service.featured ? 'text-cyan-400' : 'text-blue-600'}>↗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section py-20 bg-slate-100" id="process">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-blue-600"></span>
                Simple by design
              </p>
              <h2 className="text-4xl font-bold font-georgia mb-6">
                Your idea in.<br />
                <em className="text-cyan-500 not-italic">Your part out.</em>
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-md">
                No jargon maze. No mystery timeline. Just a clear, collaborative path to a part you can hold.
              </p>
              <a href="#quote" className="inline-flex items-center gap-2 text-blue-600 font-bold border-b border-blue-600 pb-1 hover:text-blue-700">
                Tell us what you're making
                <span>↗</span>
              </a>
            </div>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Share your idea', desc: 'Send a sketch, photo, measurements, or an STL/STEP file and tell us what the part needs to do.' },
                { step: '02', title: 'Review & quote', desc: 'We check printability, recommend a material and finish, then send a clear quote and timeline.' },
                { step: '03', title: 'Print & inspect', desc: 'Your part is printed, cleaned, and checked for the dimensions and details that matter.' },
                { step: '04', title: 'Pick up or ship', desc: 'Get it locally or have it packed and shipped. Need a revision? We keep the process moving.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-blue-600 font-bold font-georgia text-2xl min-w-16">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section py-20" id="materials">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-blue-600"></span>
            Material matters
          </p>
          <h2 className="text-4xl font-bold font-georgia mb-8">
            The right plastic<br />
            for the <em className="text-cyan-500 not-italic">job.</em>
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl">
            We match strength, flexibility, appearance, heat resistance, and budget to your application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'PLA', label: 'Everyday', color: 'from-purple-500 to-cyan-400', level: 68, desc: 'Crisp, colorful, and ideal for models, displays, organizers, and concept parts.', features: 'Easy finish · Fine detail' },
              { name: 'PETG', label: 'Durable', color: 'from-teal-600 to-cyan-400', level: 82, desc: 'Tough, slightly flexible, and moisture resistant for practical, hard-working parts.', features: 'Impact resistant · Outdoor-ready' },
              { name: 'TPU', label: 'Flexible', color: 'from-orange-500 to-yellow-400', level: 56, desc: 'Rubber-like performance for grips, bumpers, gaskets, feet, and wearables.', features: 'Bendable · Shock absorbing' },
              { name: 'ASA', label: 'Technical', color: 'from-slate-700 to-slate-500', level: 92, desc: 'UV and weather resistant for outdoor fixtures, enclosures, and automotive uses.', features: 'Heat resistant · UV stable' },
            ].map((mat, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl">
                <div className={`h-24 rounded-lg bg-gradient-to-br ${mat.color} mb-6`}></div>
                <span className="text-xs uppercase text-slate-500">{mat.label}</span>
                <h3 className="text-2xl font-bold font-georgia my-2">{mat.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{mat.desc}</p>
                <div className="h-1 bg-slate-200 rounded-full mb-2 overflow-hidden">
                  <div className="h-full bg-blue-600" style={{width: `${mat.level}%`}}></div>
                </div>
                <small className="text-slate-500 text-xs uppercase">{mat.features}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section py-20 bg-slate-900 text-white" id="gallery">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-cyan-400"></span>
            Sample gallery
          </p>
          <h2 className="text-4xl font-bold font-georgia mb-4">
            Possible, made<br />
            <em className="text-cyan-400 not-italic">tangible.</em>
          </h2>
          <p className="text-slate-300 mb-12 max-w-2xl">
            Original concept renders shown as representative examples. Your project will be made to your requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Geometric Planter', category: 'Home + decor', bg: 'bg-gradient-to-br from-teal-600 to-slate-800', span: 'lg:row-span-2' },
              { title: 'Drive Assembly', category: 'Prototype', bg: 'bg-gradient-to-br from-slate-700 to-slate-900' },
              { title: 'Desk Dock', category: 'Everyday utility', bg: 'bg-gradient-to-br from-slate-600 to-slate-800' },
              { title: 'Color-Coded Fixtures', category: 'Small-batch run', bg: 'bg-gradient-to-br from-slate-700 to-slate-900', span: 'lg:col-span-2' },
            ].map((item, i) => (
              <div key={i} className={`${item.span || ''} h-80 ${item.bg} rounded-xl overflow-hidden group cursor-pointer`}>
                <div className="h-full flex flex-col justify-between p-6 hover:bg-black/20 transition">
                  <div></div>
                  <div>
                    <p className="text-cyan-400 text-xs uppercase mb-2">{item.category}</p>
                    <h3 className="text-2xl font-bold font-georgia">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-right text-slate-500 text-xs uppercase mt-6">Sample/demo project imagery — not customer work.</p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section py-20" id="quote">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-8 lg:p-12">
          <p className="text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-cyan-400"></span>
            Let's build it
          </p>
          <h2 className="text-4xl font-bold font-georgia mb-6">
            Have an idea?<br />
            <em className="text-cyan-300 not-italic">Let's make it real.</em>
          </h2>
          <p className="text-blue-100 mb-8">
            Send a file, photo, or quick description. We'll reply with questions, options, and a no-pressure estimate.
          </p>

          <div className="mb-8 space-y-2">
            <a href="mailto:hello@jp3dprinting.example" className="block text-xl font-georgia hover:text-cyan-300 transition">hello@jp3dprinting.example</a>
            <a href="tel:+15550130101" className="block text-xl font-georgia hover:text-cyan-300 transition">(555) 013-0101</a>
            <small className="block text-blue-200 text-xs uppercase mt-2">Placeholder contact details for this sample site</small>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-blue-200" required />
              <input type="email" placeholder="you@example.com" className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-blue-200" required />
            </div>
            <textarea placeholder="A few details, dimensions, quantity, or material preferences…" rows={4} className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-blue-200" required></textarea>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white">
                <option className="text-slate-900">Just one</option>
                <option className="text-slate-900">2–10</option>
                <option className="text-slate-900">11–50</option>
                <option className="text-slate-900">50+</option>
              </select>
              <select className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white">
                <option className="text-slate-900">Flexible</option>
                <option className="text-slate-900">Within 2 weeks</option>
                <option className="text-slate-900">Within 1 week</option>
                <option className="text-slate-900">Rush</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-slate-100 transition">
              Request a sample quote <span>↗</span>
            </button>
            <p className="text-center text-blue-200 text-xs uppercase">Demo form — submission is not connected to a live inbox.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
