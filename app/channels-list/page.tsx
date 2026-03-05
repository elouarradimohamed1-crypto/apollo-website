'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Tv, Loader2, ImageOff } from 'lucide-react';

export default function ChannelsPage() {
  const [allChannels, setAllChannels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(48);

  useEffect(() => {
    // جلب البيانات من المجلد العام public/data/channels.json
    fetch('/data/channels.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setAllChannels(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading channels:", err);
        setLoading(false);
      });
  }, []);

  // الفلترة الذكية للبحث (Search)
  const filteredChannels = useMemo(() => {
    if (!searchTerm) return allChannels;
    const term = searchTerm.toLowerCase();
    return allChannels.filter(c => 
      c.name?.toLowerCase().includes(term) || 
      c.category?.toLowerCase().includes(term)
    );
  }, [searchTerm, allChannels]);

  // القنوات اللي غيتم عرضها حالياً (Pagination)
  const displayChannels = filteredChannels.slice(0, visibleCount);

  if (loading) return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-50">
      <Loader2 className="animate-spin text-blue-600 w-12 h-12 mb-4" />
      <p className="font-bold text-gray-600 uppercase tracking-widest">Loading 49K Channels...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
            Apollo IPTV <span className="text-blue-600">Channels</span>
          </h1>
          <p className="text-slate-500 font-medium tracking-tight">
            Explore {allChannels.length.toLocaleString()} worldwide channels & movies
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mb-12 shadow-2xl rounded-2xl overflow-hidden">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Search by name or category (e.g. 4K, Sports, UK...)"
            className="w-full pl-14 pr-6 py-5 bg-white border-none focus:ring-4 focus:ring-blue-500/20 outline-none text-lg font-medium text-slate-800"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(48); // إعادة التصفير عند البحث
            }}
          />
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayChannels.map((channel, index) => (
            <div key={`${channel.id}-${index}`} className="group bg-white rounded-2xl p-3 border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative aspect-square rounded-xl bg-slate-100 mb-3 overflow-hidden flex items-center justify-center border border-slate-50">
                {channel.logo ? (
                  <img 
                    // 1. تحويل الرابط لـ HTTPS لتجنب Mixed Content في Vercel
                    src={channel.logo.replace('http://', 'https://')} 
                    alt={channel.name}
                    // 2. تجاوز حماية السيرفر الأصلي للصور
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // 3. محاولة أخيرة بـ HTTP إيلا ما خدمش HTTPS
                      if (target.src.includes('https://')) {
                        target.src = target.src.replace('https://', 'http://');
                      } else {
                        // 4. صورة افتراضية إيلا مات الرابط تماماً
                        target.src = 'https://placehold.co/200x200/1e293b/3b82f6?text=TV';
                        target.onerror = null; 
                      }
                    }}
                  />
                ) : (
                  <Tv className="w-10 h-10 text-slate-300" />
                )}
                
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-[8px] font-bold text-white px-1.5 py-0.5 rounded shadow-sm">
                  ID: {channel.id}
                </div>
              </div>

              {/* Channel Info */}
              <h3 className="font-bold text-[11px] text-slate-800 line-clamp-2 min-h-[32px] leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                {channel.name}
              </h3>
              
              <div className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase inline-block max-w-full truncate">
                {channel.category || 'General'}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredChannels.length && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 48)}
              className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-xl active:scale-95"
            >
              SHOW MORE ({ (filteredChannels.length - visibleCount).toLocaleString() } LEFT)
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredChannels.length === 0 && !loading && (
          <div className="text-center py-20">
            <ImageOff className="mx-auto w-16 h-16 text-slate-200 mb-4" />
            <p className="text-slate-400 font-bold italic">No channels found for "{searchTerm}"</p>
          </div>
        )}

      </div>
    </div>
  );
}