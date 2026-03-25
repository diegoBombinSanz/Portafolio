// src/components/Blog.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient.ts";

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = (await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })) as {
        data: Post[] | null;
        error: any;
      }
      if (error) console.error(error);
      else setPosts(data || []);
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) return null;


  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section id="blog" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Consejos y tips técnicos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Artículos y recomendaciones para mantener tus equipos en óptimas condiciones.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => {
            const isExpanded = expandedIds.includes(post.id);
            const snippet = post.content.slice(0, 120); // primera parte
            return (
              <div
                key={post.id}
                className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-bold text-black mb-2">{post.title}</h3>
                <p className={`text-gray-700 leading-relaxed transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>
                  {isExpanded ? post.content : snippet + (post.content.length > 120 ? "..." : "")}
                </p>
                {post.content.length > 120 && (
                  <button
                    onClick={() => toggleExpand(post.id)}
                    className="mt-4 self-start text-blue-600 font-semibold hover:underline transition-colors"
                  >
                    {isExpanded ? "Mostrar menos" : "+ Info"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
