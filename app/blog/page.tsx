'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Calendar, User, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Papa from 'papaparse';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ضع رابط الـ CSV الخاص بك هنا (الذي ينتهي بـ output=csv)
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOqKQGJFFpx8TXR_tLbwBWe6gI2vvyfBjRewKudCf036GdM5aN1nkRA7cxchKKUKY2IGrt-hJiwkhX/pub?output=csv";
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();
    
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            // تصفية السطور التي قد تكون فارغة أو لا تحتوي على عنوان
            const validPosts = results.data.filter((post: any) => post.Title && post.Title.trim() !== "");
            setPosts(validPosts);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-bold">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-[#2563eb]" size={40} />
        <p className="text-gray-400 animate-pulse">Loading Apollo Blog...</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#020617] text-[#f8fafc] min-h-screen">
      {/* Header / Navigation Support */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#2563eb] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Official Blog</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Apollo <span className="text-[#2563eb]">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Discover tips, streaming guides, and the latest sports updates directly from our experts.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-gray-800 rounded-3xl">
              <p className="text-gray-500 text-lg">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article 
                  key={index} 
                  className="bg-[#0f172a]/50 border border-[#1e293b] rounded-3xl overflow-hidden hover:border-[#2563eb]/50 transition-all duration-300 group flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.Image || "https://images.unsplash.com/photo-1593784991095-a205039470b6?q=80&w=2070"} 
                      alt={post.Title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5 bg-gray-900 px-2 py-1 rounded">
                        <Calendar size={12} className="text-[#2563eb]" /> {post.Date || "Recent"}
                      </span>
                      <span className="flex items-center gap-1.5 bg-gray-900 px-2 py-1 rounded">
                        <User size={12} className="text-[#2563eb]" /> {post.Author || "Admin"}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 group-hover:text-[#2563eb] transition-colors leading-tight">
                      {post.Title}
                    </h2>

                    <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3">
                      {post.Excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link 
                        href={`/blog/${index}`} 
                        className="inline-flex items-center gap-2 text-white font-bold text-sm bg-[#1e293b] hover:bg-[#2563eb] px-6 py-3 rounded-xl transition-all w-full justify-center shadow-lg shadow-black/20"
                      >
                        Read Full Article <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="bg-[#2563eb] rounded-[3rem] p-12 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 italic">STAY UPDATED!</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium text-lg">
              Follow our blog for the latest channel updates and server status.
            </p>
            <a 
              href="https://wa.me/212707711512" 
              className="bg-white text-[#2563eb] px-10 py-4 rounded-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform inline-block shadow-2xl"
            >
              Contact Support
            </a>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
      </section>
    </div>
  );
}