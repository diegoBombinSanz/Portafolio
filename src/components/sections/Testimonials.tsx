import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient.ts";
import { Star } from "lucide-react";

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
        setTestimonials(data || []);
      }
    }

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencias reales de clientes que han confiado en DBS Freelance Tech.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-gray-300 hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-700 leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center mb-2">
                {t.rating && Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="font-bold text-black">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}