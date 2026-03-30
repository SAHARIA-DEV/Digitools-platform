import React from 'react';
import bannerImg from '../assets/banner.png';

const Banner = ({ onCartClick, onExploreClick }) => {
  return (
    <header className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className='ml-26'>
            <p className="inline-flex items-center rounded-full bg-violet-100 text-violet-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              New: AI-Powered Tools Available
            </p>
            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
              Supercharge Your Digital Workflow
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onExploreClick} className="btn rounded-3xl cursor-pointer bg-gradient-to-r from-fuchsia-600 to-violet-500 border-0 text-white px-8 py-3 shadow-lg">Explore Products</button>
              <button onClick={onCartClick} className="btn cursor-pointer rounded-3xl btn-outline border-violet-500 text-violet-900 hover:bg-violet-400 px-8 py-3 inline-flex items-center gap-2">
                <span className="h-5 w-5 inline-flex items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  {/* Play icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex justify-center mx-auto md:justify-end">
            <img
              src={bannerImg}
              alt="Digital workflow dashboard"
              className="w-full max-w-md rounded-3xl shadow-2xl border border-violet-100"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;