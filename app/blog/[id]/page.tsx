'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Calendar, User, ArrowLeft, Loader2, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost() {
  const params = useParams();
  const id = params?.id;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOqKQGJFFpx8TXR_tLbwBWe6gI2vvyfBjRewKudCf036GdM5aN1nkRA7cxchKKUKY2IGrt-hJiwkhX/pub?output=csv";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (h) => h.trim(),
          complete: (results) => {
            const article = results.data[Number(id)];
            setPost(article);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    if (id !== undefined) fetchPost();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-bold">
      <Loader2 className="animate-spin text-[#2563eb] mr-2" size={40} />
      <p>LOADING...</p>
    </div>
  );

  if (!post || !post.Title) return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
      <Link href="/blog" className="px-8 py-3 bg-[#2563eb] rounded-xl font-bold">Back to Blog</Link>
    </div>
  );

  return (
    <div className="bg-[#020617] text-[#f8fafc] min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-10 mb-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2563eb] font-black uppercase text-[10px] tracking-[0.3em]">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter uppercase italic text-white">
            {post.Title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] border-b border-gray-800 pb-8">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-[#2563eb]" /> {post.Date}</span>
            <span className="flex items-center gap-2"><User size={14} className="text-[#2563eb]" /> By {post.Author}</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-[#2563eb]" /> 5 min read</span>
          </div>
        </header>

        <div className="relative h-[300px] md:h-[550px] w-full mb-16 rounded-[2.5rem] overflow-hidden border border-gray-800">
          <img src={post.Image} alt={post.Title} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div 
          className="text-gray-300 leading-[1.8] text-lg font-medium
                     [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:uppercase [&>h2]:italic [&>h2]:border-l-4 [&>h2]:border-[#2563eb] [&>h2]:pl-5
                     [&>h3]:text-xl [&>h3]:font-black [&>h3]:text-blue-500 [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:uppercase
                     [&>p]:mb-8 [&>p]:leading-relaxed
                     [&>ul]:list-disc [&>ul]:ml-8 [&>ul]:space-y-3 [&>ul]:mb-8 [&>ul]:text-[#2563eb]
                     [&>ul>li]:text-gray-300
                     [&>strong]:text-white [&>strong]:font-black [&>strong]:underline [&>strong]:decoration-[#2563eb]"
          dangerouslySetInnerHTML={{ __html: post.Content }} 
        />

        {/* CTA Section - هادي هي البلاصة اللي كان فيها المشكل */}
        <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-[#0f172a] to-[#020617] border border-[#2563eb]/30 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4 italic uppercase tracking-tighter text-white">
              Ready to upgrade your TV?
            </h3>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto font-medium text-lg">
              Join thousands of viewers and start your premium journey with Apollo today.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/212707711512" 
                className="bg-[#2563eb] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-xl shadow-blue-600/30 w-full md:w-auto text-sm"
              >
                Get 3-Hour Free Trial
              </a>
              <button className="flex items-center gap-2 text-gray-400 font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors">
                <Share2 size={16} /> Share Article
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}