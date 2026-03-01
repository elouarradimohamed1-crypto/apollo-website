import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const res = await fetch(`https://backend.appoloiptv.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  const posts = await res.json();
  const post = posts[0];

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* العنوان منسق كـ HTML باش تحيد الرموز الغريبة */}
        <h1 
          className="text-3xl md:text-5xl font-black mb-8 text-blue-400 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
        />

        {/* عرض الصورة البارزة بشكل احترافي */}
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-gray-800">
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url} 
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
        )}

        {/* المحتوى مع كلاس prose اللي زدنا في globals.css */}
        <div 
          className="prose prose-invert prose-blue max-w-none 
          prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed
          prose-headings:text-white prose-strong:text-blue-500"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
        />
        
      </div>
    </article>
  );
}