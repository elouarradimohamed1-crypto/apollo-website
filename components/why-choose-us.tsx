import { Zap, Shield, Smartphone, Clock, Radio, Globe } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Instant Activation',
    description: 'Get started immediately after subscribing. No waiting, no delays.',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Anti-Freeze 9.8 Tech',
    description: 'Advanced anti-freeze technology ensures zero buffering and smooth playback.',
  },
  {
    id: 3,
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support ready to assist you anytime.',
  },
  {
    id: 4,
    icon: Radio,
    title: '4K/UHD Quality',
    description: 'Crystal clear 4K and Ultra HD streaming for the best viewing experience.',
  },
  {
    id: 5,
    icon: Smartphone,
    title: 'Multi-Device Compatible',
    description: 'Stream on Smart TV, Android, Firestick, Mag, iOS and more.',
  },
  {
    id: 6,
    icon: Globe,
    title: '34,000+ Channels',
    description: 'Access over 34,000 channels and 130,000+ VOD content worldwide.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why Choose Apollo IPTV
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto font-semibold">
            Industry-leading features and unmatched reliability for the best streaming experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="group relative p-8 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition"
              >
                {/* Icon Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition"></div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition">
                    <Icon className="w-6 h-6 text-secondary group-hover:text-accent transition" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
