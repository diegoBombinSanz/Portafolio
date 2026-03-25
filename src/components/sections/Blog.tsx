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

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-black">Tips y artículos</h2>
        <div className="space-y-6">
          {posts.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700 line-clamp-3">{p.content}</p>
              <a
                href={`/blog/${p.slug}`}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
