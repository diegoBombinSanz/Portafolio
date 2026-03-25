import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient.ts";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating?: number;
  created_at: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false }) as { data: Testimonial[] | null; error: any };

      if (error) {
        console.error("Error fetching testimonials:", error);
      } else {
        console.log(data)
        setTestimonials(data || []);
      }
    }

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white shadow-md rounded-xl p-6">
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <p className="font-semibold text-gray-900">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}