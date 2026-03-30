import React, { useState } from 'react';

const Navbar = ({ cartItemsLength, onCartClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-30 bg-slate-900 text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">

                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setMenuOpen((prev) => !prev)}
                                className="p-2 rounded-md border border-slate-700 hover:bg-slate-800 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
                            </button>
                        </div>

                        <h1 className="text-3xl font-extrabold text-violet-400">DigiTools</h1>

                    </div>



                    <div className={`absolute top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-lg md:static md:bg-transparent md:backdrop-blur-0 md:flex md:items-center md:gap-8 text-sm font-medium transition-all duration-300 ${menuOpen ? 'block' : 'hidden md:block'}`}>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 p-4 md:p-0">
                            <button className="text-slate-200 hover:text-violet-300" onClick={() => setMenuOpen(false)}>Products</button>
                            <button className="text-slate-200 hover:text-violet-300" onClick={() => setMenuOpen(false)}>Features</button>
                            <button className="text-slate-200 hover:text-violet-300" onClick={() => setMenuOpen(false)}>Pricing</button>
                            <button className="text-slate-200 hover:text-violet-300" onClick={() => setMenuOpen(false)}>Testimonials</button>
                            <button className="text-slate-200 hover:text-violet-300" onClick={() => setMenuOpen(false)}>FAQ</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={onCartClick}
                            className="text-sm px-3 py-1 rounded-lg border border-slate-700 bg-white/10 text-white hover:bg-white/20 transition flex items-center gap-1"
                            aria-label="Open cart"
                        >
                            <span className="text-base">🛒</span>
                            <span>{cartItemsLength} Cart</span>
                        </button>
                        <button className="btn btn-sm bg-gradient-to-r from-fuchsia-600 to-violet-500 text-white border-0 hover:shadow-lg transition-all duration-200">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;