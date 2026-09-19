'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-0.5 bg-blue-600"></span>
              Get in touch
            </p>
            <h1 className="text-5xl font-bold font-georgia mb-4">
              Let's <em className="text-cyan-500 not-italic">talk.</em>
            </h1>
            <p className="text-xl text-slate-600">
              Have a question about 3D printing, Spanish lessons, or anything else? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-2">3D Printing Inquiries</h3>
                <p className="text-slate-600 mb-4">Questions about your project, materials, or timeline?</p>
                <a href="mailto:hello@jp3dprinting.example" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
                  hello@jp3dprinting.example <span>↗</span>
                </a>
                <p className="text-slate-600 text-sm mt-2">Typical response: 24 hours</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Learning Support</h3>
                <p className="text-slate-600 mb-4">Need help with Spanish lessons or account issues?</p>
                <a href="mailto:support@spanishlearn.example" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
                  support@spanishlearn.example <span>↗</span>
                </a>
                <p className="text-slate-600 text-sm mt-2">Typical response: 48 hours</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold font-georgia mb-6">Send us a message</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
            <p className="text-center text-slate-500 text-xs uppercase mt-4">
              Demo form — messages are not stored. For actual inquiries, use the email addresses above.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
