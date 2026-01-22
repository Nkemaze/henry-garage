import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-garage.jpg";
import img1 from "@/assets/1.jpeg"
import img2 from "@/assets/2.jpeg"
import img3 from "@/assets/3.jpeg"
import img4 from "@/assets/4.jpeg"
import img5 from "@/assets/5.jpeg"
import img6 from "@/assets/6.jpeg"
import img7 from "@/assets/7.jpeg"


const categories = ["Tous", "Huiles", "Pneus", "Freins", "Filtres", "Batteries", "Accessoires"];

const products = [
  {
    id: 1,
    name: "Huile Moteur 5W-30",
    category: "Huiles",
    price: "25,000",
    image: img1,
    inStock: true,
  },
  {
    id: 2,
    name: "Pneu Continental 205/55R16",
    category: "Pneus",
    price: "85,000",
    image: img2,
    inStock: true,
  },
  {
    id: 3,
    name: "Plaquettes de Frein Avant",
    category: "Freins",
    price: "35,000",
    image: img3,
    inStock: true,
  },
  {
    id: 4,
    name: "Filtre à Air Performance",
    category: "Filtres",
    price: "15,000",
    image: img4,
    inStock: false,
  },
  {
    id: 5,
    name: "Batterie 12V 70Ah",
    category: "Batteries",
    price: "95,000",
    image: img5,
    inStock: true,
  },
  {
    id: 6,
    name: "Kit d'Entretien Complet",
    category: "Accessoires",
    price: "45,000",
    image: img6,
    inStock: true,
  },
  {
    id: 7,
    name: "Huile Transmission Automatique",
    category: "Huiles",
    price: "30,000",
    image: img7,
    inStock: true,
  },
  {
    id: 8,
    name: "Disques de Frein Ventilés",
    category: "Freins",
    price: "55,000",
    image: img6,
    inStock: true,
  },
];

const Products = () => {
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
              Produits
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Notre Boutique
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre sélection de pièces et accessoires automobiles de qualité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                className="pl-12"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Rupture de stock
                      </span>
                    </div>
                  )}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="font-display font-bold text-xl text-primary">
                      {product.price} <span className="text-sm font-normal">FCFA</span>
                    </p>
                    <Button
                      size="sm"
                      disabled={!product.inStock}
                      className="group/btn"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-muted rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contactez-nous pour toute demande spécifique. Nous pouvons commander des pièces sur mesure pour votre véhicule.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
