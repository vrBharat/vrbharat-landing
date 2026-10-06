"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Founder, TechStart",
    content: "vrBharat didn't just build our app; they helped us refine our vision. The final product was way beyond our expectations.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "CEO, InnovateX",
    content: "Fast, transparent, and incredibly skilled. They delivered our MVP in record time and the code quality was exceptional.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Product Manager, ScaleUp",
    content: "Working with vrBharat felt like having an in-house tech team. Their dedication to the project's success is unmatched.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Feedback</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our partners have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-zinc-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
