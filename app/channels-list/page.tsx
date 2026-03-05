'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Tv, Loader2, ImageOff, ArrowUp } from 'lucide-react';

export default function ChannelsPage() {
  const [allChannels, setAllChannels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(60); // عرض 60 قناة فالبداية

  useEffect(() => {
    // جلب البيانات من المجلد العام public/data/channels.json
    fetch('/data/channels.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load JSON');
        return res.json();
      })
      .then(data => {
        setAllChannels(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  // فلترة ذكية وسريعة لـ 49 ألف قناة
  const filteredChannels = useMemo(() => {
    if (!searchTerm) return allChannels;
    const term = searchTerm.toLowerCase();
    return allChannels.filter(c => 
      c.name?.toLowerCase().includes(term) || 
      c.category?.toLowerCase().includes(term)
    );
  }, [searchTerm, allChannels]);

  const displayChannels = filteredChannels.slice(0, visibleCount);

  // دالة للرجوع للأعلى
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (loading) return (
    <div className="flex flex-col h-screen items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-blue-600 w-14 h-14 mb-4" />
      <p className="font-black text-slate-700 uppercase tracking-widest text-sm">Synchronizing 49K Channels...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
            Apollo <span className="text-blue-600">TV List</span>
          </h1>
          <div className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-200">
            {allChannels.length.toLocaleString()} PREMIUM CHANNELS
          </div>
        </div>

        {/* Search Bar Professional */}
        <div className="relative max-w-3xl mx-auto mb-16 shadow-2xl shadow-blue-100 rounded-3xl overflow-hidden group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 group-focus-within:text-blue-600 transition-colors" />
          <input
            type="text"
            placeholder="Search by Channel, Movie, or Country (e.g. 4K, BEIN, UK...)"
            className="w-full pl-16 pr-8 py-6 bg-white border-none focus:ring-0 outline-none text-xl font-semibold text-slate-800 placeholder:text-slate-300"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(60); 
            }}
          />
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {displayChannels.map((channel, index) => {
            // تنظيف رابط الصورة واستعمال البروكسي لتجاوز الحماية
            const rawLogo = channel.logo?.replace('https://', '').replace('http://', '') || '';
            const proxiedLogo = `https://images.weserv.nl/?url=${encodeURIComponent(rawLogo)}&w=300&h=300&fit=contain&errorredirect=https://placehold.co/300x300/1e293b/3b82f6?text=TV`;

            return (
              <div key={`${channel.id}-${index}`} className="group bg-white rounded-3xl p-4 border border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
                
                {/* Logo Container */}
                <div className="relative aspect-square rounded-2xl bg-slate-50 mb-4 overflow-hidden flex items-center justify-center border border-slate-50">
                  {channel.logo ? (
                    <img 
                      src={proxiedLogo} 
                      alt={channel.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-contain p-3 group-hover:scale-115 transition-transform duration-700"
                    />
                  ) : (
                    <Tv className="w-12 h-12 text-slate-200" />
                  )}
                  
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md text-[9px] font-black text-slate-400 px-2 py-0.5 rounded-lg shadow-sm border border-slate-100">
                    #{channel.id}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-black text-[12px] text-slate-800 line-clamp-2 min-h-[34px] leading-tight mb-2 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {channel.name}
                </h3>
                
                <div className="text-[9px] font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded-xl uppercase inline-block max-w-full truncate border border-blue-100/50 shadow-sm">
                  {channel.category || 'LIVE TV'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Section */}
        {visibleCount < filteredChannels.length && (
          <div className="mt-20 text-center pb-20">
            <button 
              onClick={() => setVisibleCount(prev => prev + 60)}
              className="group relative px-12 py-5 bg-slate-900 text-white font-black rounded-full hover:bg-blue-600 transition-all shadow-2xl active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">LOAD MORE CHANNELS</span>
              <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <p className="mt-4 text-slate-400 text-sm font-bold">
              Viewing {visibleCount.toLocaleString()} of {filteredChannels.length.toLocaleString()}
            </p>
          </div>
        )}

        {/* Empty State */}
        {filteredChannels.length === 0 && !loading && (
          <div className="text-center py-32 bg-white rounded-3xl shadow-sm border border-slate-100">
            <ImageOff className="mx-auto w-20 h-20 text-slate-100 mb-6" />
            <p className="text-slate-400 text-xl font-black italic">No channels found for "{searchTerm}"</p>
            <button onClick={() => setSearchTerm('')} className="mt-4 text-blue-600 font-bold underline">Clear search</button>
          </div>
        )}
      </div>

      {/* Floating Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-2xl shadow-2xl hover:bg-slate-900 transition-all hover:scale-110 active:scale-90 z-50"
      >
        <ArrowUp className="w-6 h-6 font-black" />
      </button>
    </div>
  );
}