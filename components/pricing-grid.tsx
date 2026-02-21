'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    id: 1,
    name: '1 Day Trial',
    price: '$5',
    period: 'one-time',
    featured: false,
    description: 'Test it out',
    whatsappLink: 'https://api.whatsapp.com/send/?phone=212707711512&text=goldengateiptv.com%20-%201%20Day%20/%201%20Device%20-%205%20USD',
    features: [
      '4K Quality',
      '1 Device',
      '34,000+ Channels',
      'Instant Activation',
    ],
  },
  {
    id: 2,
    name: '1 Month',
    price: '$17',
    period: 'per month',
    featured: false,
    description: 'Popular choice',
    whatsappLink: 'https://wa.me/212707711512?text=Order%20Apollo%20IPTV%201%20Month',
    features: [
      '4K Quality',
      'Multiple Devices',
      '34,000+ Channels',
      '130k+ VODs',
      '24/7 Support',
    ],
  },
  {
    id: 3,
    name: '3 Months',
    price: '$37',
    period: '3 months',
    featured: false,
    description: 'Save money',
    whatsappLink: 'https://wa.me/212707711512?text=Order%20Apollo%20IPTV%203%20Months',
    features: [
      '4K Quality',
      'Multiple Devices',
      '34,000+ Channels',
      '130k+ VODs',
      '24/7 Priority Support',
      'Instant Activation',
    ],
  },
  {
    id: 4,
    name: '6 Months',
    price: '$49',
    period: '6 months',
    featured: false,
    description: 'Better value',
    whatsappLink: 'https://wa.me/212707711512?text=Order%20Apollo%20IPTV%206%20Months',
    features: [
      '4K Quality',
      'Multiple Devices',
      '34,000+ Channels',
      '130k+ VODs',
      '24/7 Priority Support',
      'Instant Activation',
    ],
  },
  {
    id: 5,
    name: '1 Year',
    price: '$77',
    period: 'per year',
    featured: true,
    description: 'BEST VALUE',
    whatsappLink: 'https://wa.me/212707711512?text=Order%20Apollo%20IPTV%201%20Year',
    features: [
      '4K Quality',
      'Multiple Devices',
      '34,000+ Channels',
      '130k+ VODs',
      '24/7 White-Glove Support',
      'Instant Activation',
      '99.9% Uptime Guarantee',
    ],
  },
  {
    id: 6,
    name: '2 Years',
    price: '$119',
    period: '2 years',
    featured: false,
    description: 'Maximum savings',
    whatsappLink: 'https://wa.me/212707711512?text=Order%20Apollo%20IPTV%202%20Years',
    features: [
      '4K Quality',
      'Multiple Devices',
      '34,000+ Channels',
      '130k+ VODs',
      '24/7 White-Glove Support',
      'Instant Activation',
      '99.9% Uptime Guarantee',
      'Anti-Freeze 9.8 Tech',
    ],
  },
]

export default function PricingGrid() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto font-semibold">
            Affordable pricing with no hidden fees. Instant activation and 99.9% uptime guaranteed.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl transition-all hover:shadow-xl ${
                plan.featured
                  ? 'ring-2 ring-secondary bg-card border border-secondary/20 shadow-lg scale-105 md:scale-100'
                  : 'bg-card border border-border hover:border-secondary/50'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-primary mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">/{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={plan.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg font-bold mb-6 transition text-center ${
                    plan.featured
                      ? 'bg-primary hover:bg-blue-700 text-white'
                      : 'bg-primary hover:bg-blue-700 text-white'
                  }`}
                >
                  Order Now
                </a>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a <span className="font-semibold text-foreground">7-day free trial</span>. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
