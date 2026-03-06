'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Tv, Loader2, ImageOff, ArrowUp, Globe } from 'lucide-react';

export default function ChannelsPage() {
  const [allChannels, setAllChannels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(60);

  useEffect(() => {
    fetch('/data/channels.json')
      .then(res => res.json())
      .then(data => {
        setAllChannels(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredChannels = useMemo(() => {
    if (!searchTerm) return allChannels;
    const term = searchTerm.toLowerCase();
    return allChannels.filter(c => 
      c.name?.toLowerCase().includes(term) || 
      c.category?.toLowerCase().includes(term)
    );
  }, [searchTerm, allChannels]);

  const displayChannels = filteredChannels.slice(0, visibleCount);

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-blue-600 w-12 h-12" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SEO Optimized Header --- */}
        <div className="text-center mb-12">
          {/* H1 ضروري لجوجل فيه الكلمات المفتاحية */}
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
            Best <span className="text-blue-600">IPTV Channel List</span> 2026
          </h1>
          
          {/* نص وصفي غني بالكلمات اللي كيقلبو عليها الناس */}
          <div className="max-w-3xl mx-auto mb-6">
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Explore the most stable <span className="text-slate-900 font-bold">Apollo IPTV lineup</span>. 
              With over {allChannels.length.toLocaleString()} channels, including 
              <span className="text-blue-600 font-bold"> 4K Sports, Premium Movies, and International News</span>. 
              Our servers provide buffer-free streaming for all UK, US, Arabic, and European channels.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">#1 IPTV Subscription</span>
            <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">4K Ultra HD</span>
            <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Fast Activation</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-20"></div>
          <div className="relative bg-white rounded-[2rem] shadow-xl overflow-hidden flex items-center">
            <Search className="ml-6 text-slate-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search 49,000+ Channels (e.g. Cinema, Sports, UK...)"
              className="w-full pl-4 pr-8 py-6 outline-none text-xl font-semibold text-slate-800"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(60); 
              }}
            />
          </div>
        </div>

        {/* --- Channels Grid --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {displayChannels.map((channel, index) => {
            const rawLogo = channel.logo?.replace('https://', '').replace('http://', '') || '';
            const proxiedLogo = `https://images.weserv.nl/?url=${encodeURIComponent(rawLogo)}&w=300&h=300&fit=contain&errorredirect=https://placehold.co/300x300/1e293b/3b82f6?text=TV`;

            return (
              <div key={`${channel.id}-${index}`} className="group bg-white rounded-3xl p-4 border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-square rounded-2xl bg-slate-50 mb-4 overflow-hidden flex items-center justify-center border border-slate-50">
                  <img 
                    src={proxiedLogo} 
                    alt={`${channel.name} IPTV Channel`} // SEO: زدنا كلمة IPTV Channel ف الـ Alt
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h2 className="font-bold text-[12px] text-slate-800 line-clamp-2 min-h-[34px] leading-tight mb-2 uppercase tracking-tight">
                  {channel.name}
                </h2>
                <div className="flex items-center gap-1 text-[9px] font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded-xl uppercase truncate">
                  <Globe className="w-3 h-3" />
                  {channel.category || 'World TV'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        {visibleCount < filteredChannels.length && (
          <div className="mt-20 text-center pb-20">
            <button 
              onClick={() => setVisibleCount(prev => prev + 60)}
              className="px-12 py-5 bg-slate-900 text-white font-black rounded-full hover:bg-blue-600 transition-all shadow-xl"
            >
              LOAD MORE CHANNELS
            </button>
          </div>
        )}

        {/* --- SEO Footer Text --- */}
        {/* هاد الجزء مخفي للعين ولكن جوجل كيقراه وكيحسّن الأرشفة */}
        <footer className="mt-20 pt-10 border-t border-slate-200 text-slate-400 text-xs leading-relaxed max-w-4xl mx-auto text-center">
          <p>
            Apollo IPTV provides the most comprehensive <strong>IPTV channels list</strong> on the market. 
            Whether you are looking for <strong>high-quality sports streaming</strong>, latest movies, 
            or international news from <strong>UK, USA, Canada, Arabic countries</strong> and more. 
            Our <strong>49k channels list</strong> is optimized for all devices including Smart TV, Android, and MAG. 
            Join thousands of satisfied users with our <strong>premium IPTV subscription</strong> today.
          </p>
        </footer>
      </div>
    </div>
  );
}