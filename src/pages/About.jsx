import React from "react";
import {
  CreditCard,
  Users,
  Zap,
  Shield,
  Globe,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
  TrendingUp,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-gradient to-brand-dark text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Next Generation Networking
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            Revolutionizing Connections
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              with Smart NFC Cards
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Transform how you share information in the digital age. One tap,
            endless possibilities, zero waste.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-brand-accent hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Get Your Card
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20 hover:border-white/40">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                  Our Journey
                </span>
              </div>
              <h2 className="text-5xl font-bold text-brand-dark leading-tight">
                Redefining Professional
                <span className="text-brand-primary"> Networking</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2024, we identified a critical gap in professional
                  networking: traditional business cards are wasteful, outdated,
                  and limited in functionality.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We engineered a solution that seamlessly merges physical
                  elegance with digital power. Our smart NFC cards create a
                  bridge between tangible connection and limitless digital
                  possibilities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we're proud to empower thousands of forward-thinking
                  professionals worldwide to make unforgettable first
                  impressions and build lasting relationships.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-gradient p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-8">
                  <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                    <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                      <Users className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-3xl text-white mb-1">
                        50,000+
                      </h3>
                      <p className="text-blue-100 font-medium">Active Users</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                    <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                      <Globe className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-3xl text-white mb-1">
                        120+
                      </h3>
                      <p className="text-blue-100 font-medium">
                        Countries Worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                    <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                      <Zap className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-3xl text-white mb-1">
                        1M+
                      </h3>
                      <p className="text-blue-100 font-medium">
                        Connections Made
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-brand-accent/20 rounded-3xl blur-3xl"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 bg-brand-primary/20 rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Our Solutions
            </span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6">
              What We <span className="text-brand-primary">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart NFC technology that transforms networking into an elegant,
              sustainable, and memorable experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-brand-primary hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-all"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-primary to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <CreditCard className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                  Smart NFC Cards
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Premium physical cards embedded with cutting-edge NFC
                  technology. Share your digital presence instantly with a
                  simple tap.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-primary/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      Waterproof & ultra-durable
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-primary/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      Fully customizable designs
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-primary/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      Universal smartphone compatibility
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-white to-red-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-brand-accent hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-all"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-accent to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Smartphone className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                  Digital Profiles
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build a stunning digital profile that showcases your complete
                  professional identity. Update instantly, share everywhere.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-accent/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-accent" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      Unlimited real-time updates
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-accent/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-accent" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      Full social media integration
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-accent/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-accent" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      Advanced analytics dashboard
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-brand-primary hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-all"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-primary to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                  Secure Platform
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enterprise-grade security protecting your data. Full control
                  over your information with comprehensive analytics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-primary/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      End-to-end encryption
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-primary/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      Granular privacy controls
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-primary/10 p-1 rounded-full">
                      <CheckCircle className="text-brand-primary" size={18} />
                    </div>
                    <span className="text-sm font-medium">
                      GDPR fully compliant
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-brand-light to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Simple Process
            </span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6">
              How It <span className="text-brand-primary">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in three effortless steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary opacity-20"></div>

            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="bg-gradient-to-br from-brand-primary to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl transform hover:scale-110 transition-transform">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full animate-ping"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                Create Your Profile
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sign up and craft your digital profile in minutes. Add contact
                details, social links, portfolio, and customize your design to
                reflect your unique brand.
              </p>
            </div>

            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="bg-gradient-to-br from-brand-accent to-red-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl transform hover:scale-110 transition-transform">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary rounded-full animate-ping delay-150"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                Order Your Card
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Select from our premium card collection or design a custom card.
                We'll deliver your NFC-enabled card directly to you, ready to
                make an impact.
              </p>
            </div>

            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="bg-gradient-to-br from-brand-primary to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl transform hover:scale-110 transition-transform">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full animate-ping delay-300"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                Start Connecting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tap your card on any smartphone to instantly share your profile.
                Monitor engagement, update information anytime, and never worry
                about running out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden bg-brand-gradient to-blue-700 text-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed text-blue-50">
                  To empower professionals and businesses worldwide with
                  innovative networking solutions that are sustainable,
                  efficient, and memorable. We believe in creating connections
                  that matter while reducing environmental impact and embracing
                  the digital future.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-brand-accent via-red-500 to-red-600 text-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed text-red-50">
                  A world where every professional interaction is seamless,
                  sustainable, and smart. We're building the future of
                  networking—one tap at a time—where physical elegance meets
                  digital innovation to create lasting impressions and
                  meaningful relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Core Principles
            </span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6">
              Our <span className="text-brand-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all border-2 border-transparent hover:border-brand-primary hover:-translate-y-2">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Constantly pushing boundaries to deliver cutting-edge networking
                solutions that set new industry standards.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all border-2 border-transparent hover:border-brand-primary hover:-translate-y-2">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                🌱
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to reducing waste and promoting eco-friendly
                alternatives for a better tomorrow.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all border-2 border-transparent hover:border-brand-primary hover:-translate-y-2">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                Connection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building meaningful relationships between people and businesses
                that stand the test of time.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all border-2 border-transparent hover:border-brand-primary hover:-translate-y-2">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering premium quality in every card and every interaction,
                without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-brand-gradient to-brand-dark text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Join the Revolution</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Your Networking?
            </span>
          </h2>
          <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who have already made the switch to
            smart NFC cards. Start building better connections today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-brand-accent hover:bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2">
              Get Started Today
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all border-2 border-white/20 hover:border-white/40">
              Contact Sales
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-400" />
              <span>Free shipping worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-400" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
