'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap, Shield, Smartphone, Clock, Radio, Globe, ChevronDown } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const plans = [
    {
      id: 1,
      name: '1 Day Trial',
      price: '$5',
      period: 'one-time',
      featured: false,
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
  ];

  const whyChooseFeatures = [
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
  ];

  const devices = [
    {
      id: 1,
      name: 'Smart TV',
      icon: '📺',
      steps: ['Search "Apollo IPTV" in app store', 'Install and open the app', 'Login with your credentials'],
    },
    {
      id: 2,
      name: 'Android',
      icon: '📱',
      steps: ['Download from Google Play Store', 'Install the Apollo IPTV app', 'Enter your login details'],
    },
    {
      id: 3,
      name: 'Firestick',
      icon: '🔥',
      steps: ['Go to Firestick app store', 'Search for Apollo IPTV', 'Install and login'],
    },
    {
      id: 4,
      name: 'MAG Box',
      icon: '📦',
      steps: ['Enter settings menu', 'Add portal URL', 'Reboot device'],
    },
    {
      id: 5,
      name: 'iOS',
      icon: '🍎',
      steps: ['Download from App Store', 'Install Apollo IPTV', 'Sign in with your account'],
    },
  ];

  const infrastructure = [
    {
      title: 'Headend Servers',
      description: 'Enterprise-grade server infrastructure with redundant systems',
      icon: '🖥️',
    },
    {
      title: 'Global CDN',
      description: 'Content delivery network spanning 6 continents',
      icon: '🌍',
    },
    {
      title: '99.9% Uptime',
      description: 'Guaranteed service availability with automatic failover',
      icon: '⚡',
    },
    {
      title: 'Security',
      description: 'Military-grade encryption and DDoS protection',
      icon: '🔒',
    },
  ];

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
  ];

  return (
    <div className="bg-[#020617] text-[#f8fafc] min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#020617] border-b border-[#3f3f46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-[#f8fafc] hidden sm:inline">APOLLO IPTV</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Home</button>
              
              {/* زدنا رابط الـ Blog هنا */}
              <Link href="/blog" className="text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Blog</Link>
              
              <button onClick={() => scrollToSection('installation')} className="text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Installation</button>
              <button onClick={() => scrollToSection('pricing')} className="text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">FAQ</button>
            </nav>

            <div className="hidden md:block">
              <a
                href="https://wa.me/212707711512?text=I%20want%20the%20Free%203%20Hour%20Trial%20Apollo%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Free Trial
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#f8fafc]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Home</button>
              
              {/* زدنا رابط الـ Blog للموبايل */}
              <Link href="/blog" className="block w-full text-left px-4 py-2 text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Blog</Link>
              
              <button onClick={() => scrollToSection('installation')} className="block w-full text-left px-4 py-2 text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Installation</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-[#f8fafc] hover:text-[#2563eb] transition font-semibold">FAQ</button>
              <a
                href="https://wa.me/212707711512?text=I%20want%20the%20Free%203%20Hour%20Trial%20Apollo%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-[#2563eb] text-white font-bold rounded-lg text-center hover:bg-blue-700 transition mt-4"
              >
                Free Trial
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden py-20 md:py-32">
        {/* التصويرة ديال الخلفية */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')", // هنا حط سمية التصويرة اللي غتحط ف مجلد public
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* الطبقة الضبابية الكحلة (Overlay) باش تبان الكتيبة واضحة بحال الصورة */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              The Best Apollo IPTV Service Provider USA
              <span className="block text-[#2563eb] mt-2">4K Quality</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 text-balance max-w-3xl mx-auto leading-relaxed font-semibold">
              Over 34,000 Channels & 130k VODs. Instant activation, 99.9% uptime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition transform hover:scale-105"
              >
                Subscribe Now
              </button>
              <a
                href="https://wa.me/212707711512?text=I%20want%20the%20Free%203%20Hour%20Trial%20Apollo%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-lg font-bold transition"
              >
                Get Free 3 Hour Trial
              </a>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-300 mb-4 font-semibold uppercase tracking-widest">Trusted by 100,000+ users worldwide</p>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                <span className="text-white ml-2 font-semibold italic">4.9/5 - 15,000+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVICE COMPATIBILITY */}
      <section id="installation" className="py-20 md:py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Easy Installation Guide
            </h2>
            <p className="text-xl text-[#f8fafc] max-w-2xl mx-auto font-semibold">
              Setup takes just 3 minutes on any of your devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {devices.map((device) => (
              <div key={device.id} className="bg-[#1a1a2e] border border-[#3f3f46] rounded-lg p-6 hover:border-[#2563eb] transition">
                <div className="text-4xl mb-4">{device.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#f8fafc]">{device.name}</h3>
                <ol className="space-y-2">
                  {device.steps.map((step, idx) => (
                    <li key={idx} className="text-sm text-[#f8fafc]/80 flex gap-2">
                      <span className="font-bold text-[#2563eb]">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-20 md:py-32 bg-[#020617] border-t border-[#3f3f46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Enterprise Infrastructure
            </h2>
            <p className="text-xl text-[#f8fafc] max-w-2xl mx-auto font-semibold">
              Built for reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, idx) => (
              <div key={idx} className="bg-[#1a1a2e] border border-[#3f3f46] rounded-lg p-6 text-center hover:border-[#2563eb] transition">
                <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-[#f8fafc]">{item.title}</h3>
                <p className="text-[#f8fafc]/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-[#f8fafc] max-w-2xl mx-auto font-semibold">
              Affordable pricing with no hidden fees. Instant activation and 99.9% uptime guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-lg p-8 transition transform hover:scale-105 ${
                  plan.featured
                    ? 'bg-[#2563eb] text-white border-2 border-[#2563eb]'
                    : 'bg-[#1a1a2e] text-[#f8fafc] border border-[#3f3f46] hover:border-[#2563eb]'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      BEST VALUE
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'text-white/80' : 'text-[#f8fafc]/70'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.featured ? 'text-white/80' : 'text-[#f8fafc]/70'}`}>
                    {plan.period}
                  </span>
                </div>

                <a
                  href={plan.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg font-bold mb-6 transition text-center ${
                    plan.featured
                      ? 'bg-white text-[#2563eb] hover:bg-[#f8fafc]'
                      : 'bg-[#2563eb] hover:bg-blue-700 text-white'
                  }`}
                >
                  Order Now
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.featured ? 'bg-white text-[#2563eb]' : 'bg-[#2563eb] text-white'
                      }`}>
                        ✓
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS & USA LEAGUES SECTION */}
      <section className="py-20 bg-[#020617] border-t border-[#3f3f46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
              Apollo IPTV - Global Sport & USA Leagues
            </h2>
            <p className="text-gray-400 max-w-4xl font-semibold">
              The ultimate destination for sports fans. Stream NFL, NBA, Premier League, and more in 4K quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Premier League (Europe) */}
            <div className="relative group overflow-hidden rounded-xl h-[400px] cursor-pointer border border-white/5">
              <img 
                src="/PremierLeague.jpg" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Premier League"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white">Europe</p>
                <h3 className="text-3xl font-black italic text-white/50 group-hover:text-white transition-colors">PREMIER LEAGUE</h3>
              </div>
            </div>

            {/* 2. NFL (USA) */}
            <div className="relative group overflow-hidden rounded-xl h-[400px] cursor-pointer border border-white/5">
              <img 
                src="/nfl.jpg" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="NFL"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2 inline-block">LIVE USA</span>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white">USA Sports</p>
                <h3 className="text-3xl font-black italic text-white/50 group-hover:text-white transition-colors">NFL TICKETS</h3>
              </div>
            </div>

            {/* 3. La Liga (Europe) */}
            <div className="relative group overflow-hidden rounded-xl h-[400px] cursor-pointer border border-white/5">
              <img 
                src="/LaLiga.jpg" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="La Liga"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white">Europe</p>
                <h3 className="text-3xl font-black italic text-white/50 group-hover:text-white transition-colors">LA LIGA</h3>
              </div>
            </div>

            {/* 4. NBA (USA) */}
            <div className="relative group overflow-hidden rounded-xl h-[400px] cursor-pointer border border-white/5">
              <img 
                src="/nba.jpg" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="NBA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-700/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2 inline-block">LIVE USA</span>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white">USA Sports</p>
                <h3 className="text-3xl font-black italic text-white/50 group-hover:text-white transition-colors">NBA PASS</h3>
              </div>
            </div>

            {/* 5. Serie A (Europe) */}
            <div className="relative group overflow-hidden rounded-xl h-[400px] cursor-pointer border border-white/5">
              <img 
                src="/SerieA.jpg" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Serie A"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white">Europe</p>
                <h3 className="text-3xl font-black italic text-white/50 group-hover:text-white transition-colors">SERIE A</h3>
              </div>
            </div>

            {/* 6. Bundesliga (Europe) */}
            <div className="relative group overflow-hidden rounded-xl h-[400px] cursor-pointer border border-white/5">
              <img 
                src="/bundesliga.jpg"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Bundesliga"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white">Europe</p>
                <h3 className="text-3xl font-black italic text-white/50 group-hover:text-white transition-colors">BUNDESLIGA</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-32 bg-[#020617] border-t border-[#3f3f46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Choose Apollo IPTV
            </h2>
            <p className="text-xl text-[#f8fafc] max-w-2xl mx-auto font-semibold">
              Industry-leading features and unmatched reliability for the best streaming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="bg-[#1a1a2e] border border-[#3f3f46] rounded-lg p-8 hover:border-[#2563eb] transition">
                  <Icon className="w-12 h-12 text-[#2563eb] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[#f8fafc]">{feature.title}</h3>
                  <p className="text-[#f8fafc]/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32 bg-[#020617] border-t border-[#3f3f46]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#f8fafc] font-semibold">
              Everything you need to know about Apollo IPTV
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#1a1a2e] border border-[#3f3f46] rounded-lg overflow-hidden hover:border-[#2563eb] transition"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-[#2563eb]/5 transition"
                >
                  <span className="text-lg font-semibold text-[#f8fafc] text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2563eb] transition-transform ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFAQ === faq.id && (
                  <div className="px-6 py-4 border-t border-[#3f3f46] bg-[#1a1a2e]/50">
                    <p className="text-[#f8fafc]/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20 text-center">
            <h3 className="text-2xl font-bold text-[#f8fafc] mb-2">
              Still have questions?
            </h3>
            <p className="text-[#f8fafc] mb-4 font-semibold">
              Our support team is ready to help 24/7 via WhatsApp
            </p>
            <a
              href="https://wa.me/212707711512"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2563eb] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0e27] border-t border-[#3f3f46] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-[#f8fafc] mb-4">APOLLO IPTV</h3>
              <p className="text-[#f8fafc]/70 text-sm">
                The best IPTV service provider offering 34,000+ channels and 130,000+ VODs with 99.9% uptime guarantee.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#f8fafc] mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[#f8fafc]/70">
                <li><a href="#pricing" className="hover:text-[#2563eb] transition">Pricing</a></li>
                <li><a href="#installation" className="hover:text-[#2563eb] transition">Installation</a></li>
                <li><a href="#faq" className="hover:text-[#2563eb] transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#f8fafc] mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-[#f8fafc]/70">
                <li><a href="https://wa.me/212707711512" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] transition">WhatsApp Support</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#f8fafc] mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-[#f8fafc]/70">
                <li><a href="#" className="hover:text-[#2563eb] transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#2563eb] transition">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#3f3f46] pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#f8fafc]/70 text-sm mb-4 md:mb-0">
              © 2026 Official Apollo IPTV Provider. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#f8fafc]/70 hover:text-[#2563eb] transition">Facebook</a>
              <a href="#" className="text-[#f8fafc]/70 hover:text-[#2563eb] transition">Twitter</a>
              <a href="#" className="text-[#f8fafc]/70 hover:text-[#2563eb] transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/212707711512?text=Hello%20Apollo%20IPTV%20Support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.551 4.2 1.597 6.04L0 24l6.143-1.612a11.758 11.758 0 005.903 1.58h.005c6.636 0 12.05-5.414 12.05-12.052 0-3.213-1.25-6.232-3.52-8.503z" />
        </svg>

        <span className="absolute right-16 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Need Help? Chat with us!
        </span>
      </a>
    </div>
  );
}