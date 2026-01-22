import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import heroImage from "@/assets/hero-garage.jpg";
import img1 from "@/assets/1.jpeg"
import img2 from "@/assets/2.jpeg"
import img3 from "@/assets/3.jpeg"
import img4 from "@/assets/4.jpeg"
import img5 from "@/assets/5.jpeg"
import img6 from "@/assets/6.jpeg"
import img7 from "@/assets/7.jpeg"

const categories = ["Tous", "Atelier", "Réparations", "Carrosserie", "Équipe"];

const galleryItems = [
  { id: 1, src: img1, category: "Atelier", title: "Notre atelier moderne" },
  { id: 2, src: img2, category: "Réparations", title: "Diagnostic électronique" },
  { id: 3, src: img3, category: "Carrosserie", title: "Travaux de carrosserie" },
  { id: 4, src: img4, category: "Équipe", title: "Notre équipe d'experts" },
  { id: 5, src: img5, category: "Atelier", title: "Zone de travail" },
  { id: 6, src: img6, category: "Réparations", title: "Réparation moteur" },
  { id: 7, src: img7, category: "Carrosserie", title: "Peinture automobile" },
  { id: 8, src: img1, category: "Équipe", title: "Formation continue" },
  { id: 9, src: img1, category: "Atelier", title: "Équipements de pointe" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "Tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Galerie
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Notre Galerie Photos
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre atelier, notre équipe et nos réalisations en images.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-primary-foreground/80 text-sm">{item.category}</span>
                    <h3 className="text-primary-foreground font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[85vh] rounded-lg"
          />
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
