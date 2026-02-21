'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What devices are compatible with Apollo IPTV?',
    answer: 'Apollo IPTV supports all major devices including Smart TV, Android phones and tablets, Firestick, MAG boxes, and iOS devices. Simply install our app or configure manually, login with your credentials, and start streaming on all your devices.',
  },
  {
    id: 2,
    question: 'Is installation difficult?',
    answer: 'No! Installation is simple and takes just a few minutes. After subscribing, we provide step-by-step installation guides for all supported devices. Our 24/7 support team can also assist with setup if you need help.',
  },
  {
    id: 3,
    question: 'What is Anti-Freeze 9.8 Technology?',
    answer: 'Our proprietary Anti-Freeze 9.8 Tech is an advanced buffering prevention system that ensures zero freezing or buffering. It automatically optimizes streaming quality based on your connection speed for an uninterrupted viewing experience.',
  },
  {
    id: 4,
    question: 'How many channels and VODs do you offer?',
    answer: 'Apollo IPTV provides access to over 34,000 live channels and more than 130,000 movies and TV series on demand. Content includes sports, movies, entertainment, news, documentaries, and international channels.',
  },
  {
    id: 5,
    question: 'What is your uptime guarantee?',
    answer: 'We guarantee 99.9% uptime with our enterprise-grade infrastructure. Our servers are distributed globally with redundant systems and automatic failover, ensuring your entertainment never stops.',
  },
  {
    id: 6,
    question: 'How do I subscribe and what payment methods do you accept?',
    answer: 'Subscribe through WhatsApp by clicking "Order Now" on any plan. We accept payments via WhatsApp transfer, bank transfer, and other payment methods. You\'ll receive instant activation credentials immediately after payment.',
  },
]

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground font-semibold">
            Everything you need to know about Apollo IPTV
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-border rounded-xl overflow-hidden bg-card hover:border-secondary/50 transition"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform duration-300 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-primary/5 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-8 rounded-xl bg-primary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-foreground mb-4 font-semibold">
            Our support team is ready to help 24/7 via WhatsApp
          </p>
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
