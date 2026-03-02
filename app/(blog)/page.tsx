import Link from 'next/link';

export default async function BlogPage() {
  try {
    const res = await fetch('https://backend.appoloiptv.com/wp-json/wp/v2/posts?_embed', {
      next: { revalidate: 60 }
    });
    
    const posts = await res.json();

    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-10 text-center">Apollo Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post: any) => (
            // لاحظ هنا: حيدنا كلمة /blog/ من الرابط
            <Link href={`/${post.slug}`} key={post.id} className="group border border-gray-800 rounded-2xl p-4 hover:border-blue-500 transition-all">
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img 
                  src={post._embedded['wp:featuredmedia'][0].source_url} 
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  alt={post.title.rendered}
                />
              )}
              <h2 className="text-xl font-bold group-hover:text-blue-400" 
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div className="text-gray-400 text-sm mt-2 line-clamp-2"
                   dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div className="text-white text-center p-10">Error loading posts.</div>;
  }
}