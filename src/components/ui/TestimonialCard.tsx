import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index?: number;
}

const TestimonialCard = ({ name, role, content, rating, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-8 border border-border card-hover relative"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-amber-400 fill-amber-400" : "text-muted"
            }`}
          />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6 italic">
        "{content}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-display font-semibold text-primary">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
