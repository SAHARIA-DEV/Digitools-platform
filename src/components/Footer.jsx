import React from 'react';

const Footer = () => (
  <footer className="bg-slate-950 text-white py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-2xl font-bold mb-3">DigiTools</h4>
        <p className="text-slate-400">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-3">Product</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>Features</li>
          <li>Pricing</li>
          <li>Templates</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-3">Company</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-3">Resources</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>Documentation</li>
          <li>Help Center</li>
          <li>Community</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-slate-800 mt-8 pt-5 text-center text-slate-400 text-sm">
      © 2026 DigiTools. All rights reserved.
    </div>
  </footer>
);

export default Footer;