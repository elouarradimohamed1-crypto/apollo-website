import { Tv, Smartphone, Gamepad2, Box, Apple } from 'lucide-react'

const devices = [
  {
    id: 1,
    icon: Tv,
    name: 'Smart TV',
    description: 'Compatible with all modern Smart TV platforms',
  },
  {
    id: 2,
    icon: Smartphone,
    name: 'Android',
    description: 'Stream on all Android phones and tablets',
  },
  {
    id: 3,
    icon: Gamepad2,
    name: 'Firestick',
    description: 'Full support for Amazon Fire Stick devices',
  },
  {
    id: 4,
    icon: Box,
    name: 'Mag',
    description: 'Works with all MAG box devices',
  },
  {
    id: 5,
    icon: Apple,
    name: 'iOS',
    description: 'Stream on iPhone, iPad, and Apple devices',
  },
]

export default function DeviceCompatibility() {
  return (
    <section id="installation" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Device Compatibility
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto font-semibold">
            Stream on your favorite devices - full compatibility with all major platforms.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {devices.map((device) => {
            const Icon = device.icon
            return (
              <div
                key={device.id}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{device.name}</h3>
                <p className="text-sm text-foreground">{device.description}</p>
              </div>
            )
          })}
        </div>

        {/* Installation Steps */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Easy Installation Steps:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Choose Your Device</h4>
                <p className="text-foreground text-sm">Select the device you want to install Apollo IPTV on.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Get Subscription</h4>
                <p className="text-foreground text-sm">Subscribe to a plan via WhatsApp and receive instant credentials.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Start Streaming</h4>
                <p className="text-foreground text-sm">Login with your credentials and enjoy unlimited streaming.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
