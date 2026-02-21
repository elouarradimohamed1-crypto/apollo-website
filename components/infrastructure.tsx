import { Server, Zap, Globe, Lock } from 'lucide-react'

export default function Infrastructure() {
  return (
    <section className="py-20 md:py-32 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto font-semibold">
            Powered by world-class servers and CDN networks for unmatched performance and reliability.
          </p>
        </div>

        {/* Infrastructure Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Headend Servers */}
          <div className="p-8 rounded-xl bg-background border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Headend Servers</h3>
                <p className="text-foreground leading-relaxed">
                  Our state-of-the-art headend servers handle millions of simultaneous streams with redundant systems ensuring zero downtime. 
                  Multiple geographic locations provide local optimization for reduced latency and faster content delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Global CDN */}
          <div className="p-8 rounded-xl bg-background border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Global CDN Network</h3>
                <p className="text-foreground leading-relaxed">
                  Apollo IPTV utilizes a distributed Content Delivery Network (CDN) across multiple continents. 
                  This ensures fast, reliable content delivery regardless of user location, with automatic failover for maximum uptime.
                </p>
              </div>
            </div>
          </div>

          {/* 99.9% Uptime */}
          <div className="p-8 rounded-xl bg-background border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">99.9% Uptime Guarantee</h3>
                <p className="text-foreground leading-relaxed">
                  With redundant systems and load balancing across multiple data centers, Apollo IPTV guarantees 99.9% service availability. 
                  Our monitoring systems detect and resolve issues in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="p-8 rounded-xl bg-background border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Advanced Security</h3>
                <p className="text-foreground leading-relaxed">
                  Military-grade encryption, DDoS protection, and secure authentication protocols safeguard your data. 
                  All traffic is encrypted end-to-end for maximum privacy and security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="text-4xl font-black text-primary mb-2">34K+</div>
            <p className="text-foreground font-semibold">Live Channels</p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="text-4xl font-black text-primary mb-2">130K+</div>
            <p className="text-foreground font-semibold">VOD Content</p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="text-4xl font-black text-primary mb-2">99.9%</div>
            <p className="text-foreground font-semibold">Uptime SLA</p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="text-4xl font-black text-primary mb-2">50M+</div>
            <p className="text-foreground font-semibold">Active Users</p>
          </div>
        </div>
      </div>
    </section>
  )
}
