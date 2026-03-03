import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// 1. دالة توليد الـ Metadata (SEO التقني)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const res = await fetch(`https://backend.appoloiptv.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, { next: { revalidate: 3600 } });
  const posts = await res.json();
  const post = posts[0];

  if (!post) return { title: 'Post Not Found' };

  const cleanDescription = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160);
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://www.appoloiptv.com/og-image.jpg';

  return {
    title: `${post.title.rendered.replace(/&#8211;/g, '-')} | Apollo IPTV 2026`,
    description: cleanDescription,
    alternates: {
      canonical: `https://www.appoloiptv.com/${slug}`,
    },
    openGraph: {
      title: post.title.rendered,
      description: cleanDescription,
      url: `https://www.appoloiptv.com/${slug}`,
      siteName: 'Apollo IPTV',
      images: [{ url: featuredImage }],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.rendered,
      description: cleanDescription,
      images: [featuredImage],
    },
    // الكلمات المفتاحية (Focus Keywords)
    keywords: ["Apollo IPTV", "IPTV Guide 2026", "Best IPTV Subscription", slug.replace(/-/g, ' ')],
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const res = await fetch(`https://backend.appoloiptv.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, { next: { revalidate: 3600 } });
  const posts = await res.json();
  const post = posts[0];

  if (!post) notFound();

  // 2. إعداد الـ JSON-LD Schema (اللغة اللي كيفهمها Google Bot)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title.rendered,
    "image": post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://www.appoloiptv.com/og-image.jpg',
    "datePublished": post.date,
    "dateModified": post.modified,
    "author": {
      "@type": "Organization",
      "name": "Apollo IPTV",
      "url": "https://www.appoloiptv.com"
    },
    "description": post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.appoloiptv.com/${slug}`
    }
  };

  return (
    <>
      {/* إضافة الـ Schema للكود (خفي على المستخدم) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-black text-white p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          
          {/* العنوان الرئيسي H1 */}
          <h1 
            className="text-3xl md:text-5xl font-black mb-8 text-blue-400 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
          />

          {/* الصورة البارزة */}
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-800 shadow-2xl shadow-blue-500/10">
              <img 
                src={post._embedded['wp:featuredmedia'][0].source_url} 
                className="w-full h-auto object-cover"
                alt={post.title.rendered}
              />
            </div>
          )}

          {/* محتوى المقال مجهز للـ SEO */}
          <div 
            className="prose prose-invert prose-blue max-w-none 
            prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed
            prose-headings:text-white prose-strong:text-blue-400
            prose-a:text-blue-500 hover:prose-a:text-blue-400 transition-colors"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
          />
          
          {/* تاريخ النشر (اختياري لزيادة المصداقية) */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            Published on: {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </article>
    </>
  );
}