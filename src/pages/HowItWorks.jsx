import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-brand-gradient text-white py-28 md:py-32 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            How It <span className="text-brand-accent">Works</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Create your profile, tap your card, and share your world in seconds.
          </p>
        </div>
      </section>

      {/* =============== VIDEO SECTION =============== */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Watch How Your NFC Card{" "}
            <span className="text-brand-accent">Works</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            A quick demo showing how one tap opens your profile instantly.
          </p>

          {/* 3D Video Card */}
          <div
            className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-blue-200 mx-auto 
                       bg-gradient-to-br from-blue-500 to-blue-900
                       transition-transform duration-500 transform-gpu
                       hover:shadow-2xl hover:[transform:translateY(-6px)_rotateX(3deg)]"
            style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          >
            {/* Header Badges */}
            <div className="absolute top-4 left-4 bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
              Live Demo • Smart NFC Card
            </div>

            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md border border-white/20 flex items-center gap-1">
              <span className="text-white/80">➤</span> NFC Enabled
            </div>

            {/* VIDEO AREA */}
            <div className="relative w-full h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-900 opacity-80" />

              <button className="relative z-10 bg-white/30 backdrop-blur-md w-24 h-24 rounded-full flex items-center justify-center hover:bg-white/40 transition shadow-xl border border-white/20 cursor-pointer">
                <div className="w-0 h-0 border-t-[18px] border-t-transparent border-l-[32px] border-l-white border-b-[18px] border-b-transparent ml-1" />
              </button>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Replace with your real video source.
          </p>
        </div>
      </section>

      {/* ================= BEFORE / AFTER ================= */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-6xl mx-auto">
          {/* عنوان بنفس ستايل اللي فوق */}
          <div className="text-center mb-12">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Before vs After
            </span>

            <h2 className="text-4xl font-bold text-brand-dark mb-3">
              From Card to <span className="text-brand-accent">Connection</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              See the difference between traditional cards and smart NFC
              sharing.
            </p>
          </div>

          {/* 3D Boxes */}
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div
              className="bg-white rounded-2xl border border-red-100 p-5 shadow-md
                         transition-transform duration-500 transform-gpu
                         hover:shadow-2xl hover:[transform:translateY(-6px)_rotateX(4deg)]"
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
            >
              <p className="text-[11px] font-semibold text-red-500 mb-1 uppercase tracking-wide">
                Before
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Paper cards, lost contacts, typing numbers and emails every
                time.
              </p>
            </div>

            <div
              className="bg-brand-primary/5 rounded-2xl border border-brand-primary/20 p-5 shadow-md
                         transition-transform duration-500 transform-gpu
                         hover:shadow-2xl hover:[transform:translateY(-6px)_rotateX(4deg)]"
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
            >
              <p className="text-[11px] font-semibold text-brand-primary mb-1 uppercase tracking-wide">
                After
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                One smart card, live profile, and every connection saved in one
                place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-3">
            You&apos;re one tap away from smarter networking.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              to="/create-card"
              className="group bg-brand-accent hover:bg-red-600 text-white
                         px-10 py-4 rounded-xl font-bold text-lg
                         transition-all transform hover:scale-105 shadow-xl
                         inline-flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/pricing"
              className="group bg-blue-600 hover:bg-blue-700 text-white
                         px-10 py-4 rounded-xl font-bold text-lg
                         transition-all transform hover:scale-105 shadow-xl
                         inline-flex items-center gap-2"
            >
              View Pricing
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span>Free account setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span>No monthly fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span>Lifetime updates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
