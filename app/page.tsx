import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Leaf, Zap, Camera, Lock, Wifi, Package, Activity } from "lucide-react"

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#F8F9FA]/95 via-[#F0FFF8]/90 to-[#E8F5FF]/95 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/digital-forest-background.jpg')",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#22EE99]/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#22EE99] flex items-center justify-center shadow-lg shadow-[#22EE99]/30">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
            </div>
            <span className="text-xl font-bold text-[#2F3E46] font-sans">
              SmartCompost<span className="text-[#22EE99]">DIY</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-[#2F3E46] hover:text-[#22EE99] transition-colors font-sans">
              Products
            </a>
            <a href="#features" className="text-[#2F3E46] hover:text-[#22EE99] transition-colors font-sans">
              Features
            </a>
            <a href="#impact" className="text-[#2F3E46] hover:text-[#22EE99] transition-colors font-sans">
              Impact
            </a>
            <Button className="bg-[#22EE99] hover:bg-[#1ACC88] text-[#2F3E46] shadow-lg shadow-[#22EE99]/30 font-sans">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 backdrop-blur-xl bg-white/80 p-8 rounded-3xl border border-white/60 shadow-2xl">
            <Badge className="bg-[#22EE99]/20 text-[#22EE99] border-[#22EE99]/50 font-sans">
              <Leaf className="w-3 h-3 mr-1" />
              Lease-Friendly Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2F3E46] leading-tight font-sans text-balance">
              Your Sanctuary, <span className="text-[#22EE99]">Untouched</span>.
            </h1>
            <p className="text-xl text-[#2F3E46]/70 leading-relaxed font-sans">
              High-IQ home monitoring that respects your lease and the planet. No drills, no waste, just total control.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-[#22EE99] hover:bg-[#1ACC88] text-[#2F3E46] shadow-xl shadow-[#22EE99]/40 font-sans"
              >
                <Shield className="w-4 h-4 mr-2" />
                Start Protecting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2F3E46] text-[#2F3E46] hover:bg-[#2F3E46] hover:text-white font-sans bg-white/50 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#22EE99] font-sans">100%</div>
                <div className="text-sm text-[#2F3E46]/60 font-sans">Removable</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#22EE99] font-sans">Zero</div>
                <div className="text-sm text-[#2F3E46]/60 font-sans">Damage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#22EE99] font-sans">24/7</div>
                <div className="text-sm text-[#2F3E46]/60 font-sans">Monitoring</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#22EE99]/20 to-[#FF6B35]/20 blur-3xl rounded-full" />
            <div className="relative backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-8 shadow-2xl">
              <img
                src="/modern-apartment-door-with-glowing-green-sensors-a.jpg"
                alt="Smart Security Door"
                className="rounded-xl w-full"
              />
              <div className="absolute top-4 right-4 backdrop-blur-md bg-white/80 rounded-full p-3 shadow-lg">
                <Shield className="w-6 h-6 text-[#22EE99] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-white/50 backdrop-blur-sm rounded-3xl my-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2F3E46] mb-4 font-sans">
            Security Without <span className="text-[#22EE99]">Scars</span>
          </h2>
          <p className="text-lg text-[#2F3E46]/70 max-w-2xl mx-auto font-sans">
            Every product is designed to protect you and your deposit. No permanent installation required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 backdrop-blur-xl bg-white/60 border-[#22EE99]/30 hover:border-[#22EE99] transition-all hover:shadow-xl hover:shadow-[#22EE99]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#22EE99] to-[#1ACC88] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#22EE99]/30">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2F3E46] mb-2 font-sans">The Invisible Watchman</h3>
            <p className="text-[#2F3E46]/70 leading-relaxed font-sans">
              Non-permanent window & door sensors that stick with command strips. Glowing alerts, zero damage.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-xl bg-white/60 border-[#FF6B35]/30 hover:border-[#FF6B35] transition-all hover:shadow-xl hover:shadow-[#FF6B35]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8555] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#FF6B35]/30">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2F3E46] mb-2 font-sans">Resource Radar</h3>
            <p className="text-[#2F3E46]/70 leading-relaxed font-sans">
              Track your energy, water, and waste. Magnetic clip-on meters that report to your phone in real-time.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-xl bg-white/60 border-[#22EE99]/30 hover:border-[#22EE99] transition-all hover:shadow-xl hover:shadow-[#22EE99]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#22EE99] to-[#1ACC88] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#22EE99]/30">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2F3E46] mb-2 font-sans">Ghost Cam</h3>
            <p className="text-[#2F3E46]/70 leading-relaxed font-sans">
              Wireless security camera with suction mount. See everything, leave nothing behind when you move.
            </p>
          </Card>
        </div>
      </section>

      {/* Products Dashboard Section */}
      <section id="products" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 backdrop-blur-xl bg-white/80 p-8 rounded-3xl border border-white/60 shadow-xl max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2F3E46] mb-4 font-sans">
            The Lease-Friendly <span className="text-[#22EE99]">Dashboard</span>
          </h2>
          <p className="text-lg text-[#2F3E46]/70 max-w-2xl mx-auto font-sans">
            Modular security products categorized by their environmental and renter-friendly impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, name: "Door Sensor Pro", impact: "Zero Install", color: "#22EE99" },
            { icon: Camera, name: "Window Guardian", impact: "Reusable", color: "#22EE99" },
            { icon: Wifi, name: "Smart Hub", impact: "Energy Efficient", color: "#FF6B35" },
            { icon: Activity, name: "Motion Detector", impact: "Battery Powered", color: "#22EE99" },
            { icon: Lock, name: "Smart Lock Overlay", impact: "No Drilling", color: "#22EE99" },
            { icon: Package, name: "Package Alert", impact: "Recycled Materials", color: "#FF6B35" },
            { icon: Zap, name: "Energy Monitor", impact: "Solar Charged", color: "#FF6B35" },
            { icon: Leaf, name: "Air Quality Sensor", impact: "Compostable", color: "#FF6B35" },
          ].map((product, i) => (
            <Card
              key={i}
              className="p-6 backdrop-blur-xl bg-white/60 border-white/60 hover:scale-105 transition-transform cursor-pointer group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-shadow group-hover:shadow-xl"
                style={{
                  backgroundColor: `${product.color}20`,
                  boxShadow: `0 8px 24px ${product.color}30`,
                }}
              >
                <product.icon className="w-8 h-8" style={{ color: product.color }} />
              </div>
              <h3 className="text-lg font-bold text-[#2F3E46] mb-2 font-sans">{product.name}</h3>
              <Badge
                className="font-sans text-xs"
                style={{
                  backgroundColor: `${product.color}20`,
                  color: product.color,
                  borderColor: `${product.color}50`,
                }}
              >
                {product.impact}
              </Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className="container mx-auto px-4 py-20 bg-gradient-to-r from-[#22EE99]/20 to-[#FF6B35]/20 backdrop-blur-xl bg-white/70 rounded-3xl my-12 border border-white/60 shadow-xl"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#2F3E46] mb-8 font-sans">
            Your Impact, <span className="text-[#22EE99]">Visualized</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 border border-[#22EE99]/30">
              <div className="text-5xl font-bold text-[#22EE99] mb-2 font-sans">47kg</div>
              <div className="text-sm text-[#2F3E46]/70 font-sans">CO₂ Saved Monthly</div>
              <Leaf className="w-8 h-8 text-[#22EE99] mx-auto mt-4" />
            </div>
            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 border border-[#FF6B35]/30">
              <div className="text-5xl font-bold text-[#FF6B35] mb-2 font-sans">89%</div>
              <div className="text-sm text-[#2F3E46]/70 font-sans">Waste Reduction</div>
              <Package className="w-8 h-8 text-[#FF6B35] mx-auto mt-4" />
            </div>
            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 border border-[#22EE99]/30">
              <div className="text-5xl font-bold text-[#22EE99] mb-2 font-sans">100%</div>
              <div className="text-sm text-[#2F3E46]/70 font-sans">Deposit Protected</div>
              <Shield className="w-8 h-8 text-[#22EE99] mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="backdrop-blur-xl bg-gradient-to-r from-[#22EE99]/20 to-[#FF6B35]/20 rounded-3xl p-12 md:p-20 border border-white/60">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F3E46] mb-6 font-sans text-balance">
            Ready to Protect Your Space Without <span className="text-[#22EE99]">Compromise</span>?
          </h2>
          <p className="text-xl text-[#2F3E46]/70 mb-8 max-w-2xl mx-auto font-sans">
            Join thousands of renters who are securing their homes sustainably.
          </p>
          <Button
            size="lg"
            className="bg-[#22EE99] hover:bg-[#1ACC88] text-[#2F3E46] shadow-2xl shadow-[#22EE99]/50 text-lg px-8 py-6 font-sans"
          >
            <Shield className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-[#22EE99]/20 backdrop-blur-xl bg-white/80 rounded-3xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#22EE99] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="font-bold text-[#2F3E46] font-sans">SmartCompostDIY</span>
            </div>
            <p className="text-sm text-[#2F3E46]/60 font-sans">
              Security without scars. Sustainability without sacrifice.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#2F3E46] mb-4 font-sans">Products</h4>
            <ul className="space-y-2 text-sm text-[#2F3E46]/70 font-sans">
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Sensors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Cameras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Smart Hub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2F3E46] mb-4 font-sans">Company</h4>
            <ul className="space-y-2 text-sm text-[#2F3E46]/70 font-sans">
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2F3E46] mb-4 font-sans">Support</h4>
            <ul className="space-y-2 text-sm text-[#2F3E46]/70 font-sans">
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#22EE99] transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#22EE99]/20 text-center text-sm text-[#2F3E46]/60 font-sans">
          © 2025 SmartCompostDIY. All rights reserved. Built for renters, by renters.
        </div>
      </footer>
    </div>
  )
}
