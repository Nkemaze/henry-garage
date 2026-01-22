import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Trophy, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import heroImage from "@/assets/hero-garage.jpg";

const achievements = [
  {
    icon: Trophy,
    title: "Meilleur Garage de Yaoundé 2023",
    description: "Récompensé pour l'excellence de nos services et la satisfaction de nos clients.",
    date: "Décembre 2023",
  },
  {
    icon: Award,
    title: "Certification ISO 9001",
    description: "Notre engagement qualité reconnu par une certification internationale.",
    date: "Juin 2022",
  },
  {
    icon: Star,
    title: "5000 Clients Satisfaits",
    description: "Cap symbolique atteint grâce à la confiance de notre communauté.",
    date: "Mars 2024",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Henri Garage remporte le prix de l'innovation",
    excerpt: "Notre engagement envers l'innovation technologique a été récompensé lors du salon de l'automobile de Yaoundé.",
    image: heroImage,
    date: "15 Jan 2024",
    author: "Équipe Henri Garage",
    category: "Actualités",
  },
  {
    id: 2,
    title: "Interview exclusive avec Mr. Henri",
    excerpt: "Découvrez le parcours inspirant de notre fondateur et sa vision pour l'avenir de l'automobile au Cameroun.",
    image: heroImage,
    date: "8 Jan 2024",
    author: "Presse Locale",
    category: "Interview",
  },
  {
    id: 3,
    title: "Nouveau partenariat avec les constructeurs européens",
    excerpt: "Henri Garage élargit son réseau de partenaires pour vous offrir des pièces d'origine de qualité.",
    image: heroImage,
    date: "28 Dec 2023",
    author: "Équipe Henri Garage",
    category: "Partenariat",
  },
  {
    id: 4,
    title: "Formation continue : nos techniciens se perfectionnent",
    excerpt: "Investir dans la formation pour vous garantir un service toujours à la pointe de la technologie.",
    image: heroImage,
    date: "15 Dec 2023",
    author: "RH Henri Garage",
    category: "Formation",
  },
];

const Media = () => {
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
              Média & Blog
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Actualités & Exploits
            </h1>
            <p className="text-xl text-muted-foreground">
              Suivez les dernières nouvelles de Henri Garage, les exploits de notre équipe et les interviews de Mr. Henri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            badge="Nos Exploits"
            title="Récompenses & Réalisations"
            subtitle="Les distinctions qui témoignent de notre engagement envers l'excellence."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border card-hover text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{achievement.date}</span>
                <h3 className="font-display font-semibold text-xl mt-2 mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-muted">
        <div className="container">
          <SectionTitle
            badge="Blog & Actualités"
            title="Dernières Nouvelles"
            subtitle="Restez informé des dernières actualités de Henri Garage."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden card-hover group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Lire plus
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Mr. Henri - Fondateur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <p className="font-display font-bold text-2xl">Mr. Henri</p>
                <p className="text-sm opacity-80">Fondateur & Visionnaire</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Portrait
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                L'Homme Derrière le Succès
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mr. Henri, fondateur et directeur de Henri Garage, est une figure emblématique de l'industrie automobile camerounaise. Son parcours, marqué par la passion et la persévérance, inspire toute une génération d'entrepreneurs.
                </p>
                <p>
                  "Mon rêve a toujours été de créer un garage où chaque client serait traité comme un membre de la famille. Aujourd'hui, avec une équipe formidable et des clients fidèles, ce rêve est devenu réalité."
                </p>
                <p className="font-medium text-foreground italic">
                  — Mr. Henri, lors d'une interview avec la presse locale
                </p>
              </div>
              <Button asChild className="mt-8">
                <Link to="/a-propos">
                  Découvrir notre histoire
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
