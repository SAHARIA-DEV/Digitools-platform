import React from 'react';

const stepsData = [
  {
    id: 1,
    icon: '👤',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    id: 2,
    icon: '📦',
    title: 'Choose Products',
    description: 'Browse the catalog and select the tools that fit your workflow.',
  },
  {
    id: 3,
    icon: '🚀',
    title: 'Start Creating',
    description: 'Download and start using premium digital tools immediately.',
  },
];

const Steps = () => (
  <section className="bg-slate-100 py-16">
    <div className="container mx-auto px-4 text-center mb-10">
      <h2 className="text-4xl font-extrabold text-slate-900">Get Started In 3 Steps</h2>
      <p className="text-slate-500 mt-2">Start using premium digital tools in minutes, not hours.</p>
    </div>
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stepsData.map((step) => (
        <article key={step.id} className="bg-white rounded-2xl shadow-lg p-8 text-left">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-violet-100 text-violet-600 text-xl font-bold mb-4">{step.id}</div>
          <div className="text-6xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-slate-600 text-sm">{step.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Steps;