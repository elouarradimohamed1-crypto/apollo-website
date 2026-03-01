import Link from 'next/link';

// هاد السطر كيخلي الصفحة تجدد المقالات كل 60 ثانية (ISR)
export const revalidate = 60;

export default async function BlogPage() {
  try {
    // جلب المقالات من ووردبريس مع الصور (via _embed)
    const res = await fetch('https://backend.appoloiptv.com/wp-json/wp/v2/posts?_embed', {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();

    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Apollo Blog
            </h1>
            <p className="text-gray-400 text-xl">أحدث أخبار وتقنيات الـ IPTV والترفيه</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <div className="border border-gray-800 p-4 rounded-[2rem] bg-gray-900/30 hover:bg-gray-900/60 hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col">
                  {/* الصورة البارزة */}
                  <div className="overflow-hidden rounded-2xl mb-6">
                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                      <img 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt={post.title.rendered}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-56 bg-gray-800 flex items-center justify-center text-gray-600">No Image</div>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 line-clamp-2" 
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  
                  <div className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow"
                       dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-800 text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('ar-MA')}</span>
                    <span className="text-blue-500 font-bold group-hover:translate-x-1 transition-transform">Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div className="text-center p-20 text-red-500">Error loading blog. Please check API connection.</div>;
  }
}