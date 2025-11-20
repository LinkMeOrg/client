import React from "react";
import {
  UserPlus,
  CreditCard,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  QrCode,
  Share2,
  BarChart3,
  Settings,
  Eye,
  Wifi,
  Globe,
  Users,
  TrendingUp,
  Lock,
  Paintbrush,
  Bell,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-gradient text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Simple & Powerful</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Works
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Get your smart NFC card up and running in minutes. It's easier than
            you think!
          </p>
          <button className="group bg-brand-accent hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 mx-auto transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl">
            Get Started Now
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Main Steps Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Three Simple Steps
            </span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6">
              Start Networking in{" "}
              <span className="text-brand-primary">Minutes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it incredibly easy to create your
              digital profile and start making connections
            </p>
          </div>

          {/* Step 1 */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <UserPlus className="w-16 h-16 text-white mb-4" />
                      <div className="space-y-4 text-white">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-300" />
                          <span>Create your free account</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-300" />
                          <span>Add your contact information</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-300" />
                          <span>Upload profile photo & logo</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-300" />
                          <span>Connect social media accounts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-brand-accent/20 rounded-3xl blur-3xl"></div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-brand-primary to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl">
                    1
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full"></div>
                </div>
                <h3 className="text-4xl font-bold text-brand-dark mb-6">
                  Create Your Digital Profile
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sign up for free and build your professional digital identity
                  in minutes. Add all your contact details, social media links,
                  portfolio, and more to create a comprehensive profile that
                  showcases who you are.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-primary/10 p-2 rounded-lg mt-1">
                      <Paintbrush className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Customizable Design
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Choose colors, fonts, and layouts that match your brand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-primary/10 p-2 rounded-lg mt-1">
                      <Globe className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Add Unlimited Links
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Connect all your social media, websites, and portfolios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-brand-accent to-red-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl">
                    2
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary rounded-full animate-ping delay-150"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary rounded-full"></div>
                </div>
                <h3 className="text-4xl font-bold text-brand-dark mb-6">
                  Order Your NFC Card
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Choose from our premium card designs or create a fully custom
                  card that represents your brand. Each card is embedded with
                  NFC technology and linked to your digital profile.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-accent/10 p-2 rounded-lg mt-1">
                      <CreditCard className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Premium Materials
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Durable, waterproof cards made from high-quality PVC
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-accent/10 p-2 rounded-lg mt-1">
                      <Paintbrush className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Custom Designs
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Upload your own design or choose from our templates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-accent/10 p-2 rounded-lg mt-1">
                      <Zap className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Fast Delivery
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Worldwide shipping with tracking in 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-brand-accent to-red-500 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <CreditCard className="w-16 h-16 text-white mb-6" />
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                        <div className="flex items-center justify-between text-white mb-3">
                          <span className="text-sm">Card Preview</span>
                          <Wifi className="w-5 h-5" />
                        </div>
                        <div className="bg-white/10 h-32 rounded-lg mb-3 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            Your Design Here
                          </span>
                        </div>
                        <div className="text-white/80 text-xs">
                          NFC-Enabled Smart Card
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 bg-brand-primary/20 rounded-3xl blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <Smartphone className="w-16 h-16 text-white mb-6" />
                      <div className="space-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="flex items-center gap-3 mb-2">
                            <Zap className="w-5 h-5 text-yellow-300" />
                            <span className="font-semibold">
                              Instant Connection
                            </span>
                          </div>
                          <p className="text-sm text-white/80">
                            Tap your card to share profile instantly
                          </p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="flex items-center gap-3 mb-2">
                            <BarChart3 className="w-5 h-5 text-green-300" />
                            <span className="font-semibold">
                              Track Analytics
                            </span>
                          </div>
                          <p className="text-sm text-white/80">
                            Monitor views and engagement in real-time
                          </p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="flex items-center gap-3 mb-2">
                            <Settings className="w-5 h-5 text-blue-300" />
                            <span className="font-semibold">
                              Update Anytime
                            </span>
                          </div>
                          <p className="text-sm text-white/80">
                            Change your info instantly, no reprinting needed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-brand-accent/20 rounded-3xl blur-3xl"></div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-brand-primary to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl">
                    3
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full animate-ping delay-300"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full"></div>
                </div>
                <h3 className="text-4xl font-bold text-brand-dark mb-6">
                  Tap & Share Instantly
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Your card arrives ready to use. Simply tap it on any
                  smartphone to instantly share your digital profile. No app
                  required for your contacts - it works with all modern phones!
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-primary/10 p-2 rounded-lg mt-1">
                      <Smartphone className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Universal Compatibility
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Works with all NFC-enabled smartphones (iPhone &
                        Android)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-primary/10 p-2 rounded-lg mt-1">
                      <Eye className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Track Every Interaction
                      </h4>
                      <p className="text-gray-600 text-sm">
                        See who viewed your profile and when they connected
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-primary/10 p-2 rounded-lg mt-1">
                      <Bell className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Real-Time Updates
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Update your profile anytime and changes reflect
                        instantly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              The Technology
            </span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6">
              How <span className="text-brand-primary">NFC</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Near Field Communication (NFC) enables secure wireless data
              transfer between devices in close proximity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-primary to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Wifi className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                NFC Chip
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your card contains a tiny NFC chip that stores your profile URL
                and communicates wirelessly with smartphones within a few
                centimeters.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-red-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-red-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-accent to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Instant Transfer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When tapped, the NFC chip transfers your profile URL to the
                smartphone instantly - no pairing, no app downloads, just
                instant access.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-primary to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Lock className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Secure & Safe
              </h3>
              <p className="text-gray-600 leading-relaxed">
                NFC is extremely secure with short-range communication, making
                it impossible for others to intercept your data from a distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Powerful Features
            </span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6">
              What You Can <span className="text-brand-primary">Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock endless possibilities with your smart NFC card
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-brand-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Share2 className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Instant Sharing
              </h3>
              <p className="text-gray-600 text-sm">
                Share your entire profile with one tap - faster than typing your
                email
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <QrCode className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                QR Code Backup
              </h3>
              <p className="text-gray-600 text-sm">
                Every profile includes a QR code for non-NFC devices
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-brand-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600 text-sm">
                Track profile views, tap counts, and engagement metrics
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Multiple Links
              </h3>
              <p className="text-gray-600 text-sm">
                Add unlimited social media, websites, and portfolio links
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-brand-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Contact Management
              </h3>
              <p className="text-gray-600 text-sm">
                Save and manage everyone who taps your card in one place
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Lead Generation
              </h3>
              <p className="text-gray-600 text-sm">
                Capture leads and follow up with contacts seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              See It In Action
            </span>
            <h2 className="text-5xl font-bold text-brand-dark mb-6">
              Watch How It <span className="text-brand-primary">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See a live demonstration of our smart NFC cards in action
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-white/30 transition-all">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Demo Video</h3>
                <p className="text-blue-100">Click to watch</p>
              </div>
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
            <span className="text-sm font-medium">Start Your Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Get Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Smart NFC Card?
            </span>
          </h2>
          <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already networking smarter.
            Get started today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-brand-accent hover:bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2">
              Create Your Profile
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all border-2 border-white/20 hover:border-white/40">
              View Pricing
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-400" />
              <span>Free account setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-400" />
              <span>No monthly fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-400" />
              <span>Lifetime updates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
