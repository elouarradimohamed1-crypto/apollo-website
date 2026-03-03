export default async function BlogPage() {
  const res = await fetch('https://backend.appoloiptv.com/wp-json/wp/v2/posts', { cache: 'no-store' });
  const posts = await res.json();

  return (
    <div className="p-20 text-white bg-black min-h-screen">
      <h1 className="text-2xl mb-4">Debug Blog Page</h1>
      <p>Number of posts found: {posts.length}</p>
      
      {/* هاد السطر غادي يوريك كاع الداتا اللي جاية من ووردبريس ديريكت في الشاشة */}
      <pre className="bg-gray-900 p-4 rounded mt-4 overflow-auto max-h-96 text-xs">
        {JSON.stringify(posts, null, 2)}
      </pre>

      <div className="mt-10">
        {posts.map((post: any) => (
          <div key={post.id} className="mb-4 p-4 border border-gray-700">
            {post.title.rendered} - <span className="text-blue-500">{post.slug}</span>
          </div>
        ))}
      </div>
    </div>
  );
}