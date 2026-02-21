'use client';

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background via-background to-background">
      {/* Background gradient blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-balance leading-tight">
            The Best Apollo IPTV Service Provider USA
            <span className="block text-primary mt-2">4K Quality</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground text-balance max-w-3xl mx-auto leading-relaxed font-semibold">
            Over 34,000 Channels & 130k VODs. Instant activation, 99.9% uptime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={scrollToPricing}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition transform hover:scale-105"
            >
              Subscribe Now
            </button>
            <a
              href="https://wa.me/212707711512?text=I%20want%20the%20Free%203%20Hour%20Trial%20Apollo%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-bold transition"
            >
              Get Free 3 Hour Trial
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-8">
            <p className="text-sm text-foreground mb-4 font-semibold">Trusted by 100,000+ users worldwide</p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
              <span className="text-foreground ml-2 font-semibold">4.9/5 - 15,000+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
