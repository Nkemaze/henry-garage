import { motion } from "framer-motion";
import { Target, Users, Award, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import heroImage from "@/assets/hero-garage.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque intervention, du diagnostic à la finition.",
  },
  {
    icon: Users,
    title: "Confiance",
    description: "Une relation de confiance avec nos clients, basée sur la transparence et l'honnêteté.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Une équipe de techniciens qualifiés et formés aux dernières technologies automobiles.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "L'amour de l'automobile nous pousse à donner le meilleur de nous-mêmes chaque jour.",
  },
];

const timeline = [
  { year: "2008", title: "Création", desc: "Ouverture du premier atelier par Mr. Henri à Yaoundé." },
  { year: "2012", title: "Expansion", desc: "Agrandissement des locaux et acquisition d'équipements modernes." },
  { year: "2016", title: "Innovation", desc: "Introduction des diagnostics électroniques avancés." },
  { year: "2020", title: "Excellence", desc: "Reconnaissance comme l'un des meilleurs garages de la région." },
  { year: "2024", title: "Aujourd'hui", desc: "Plus de 5000 clients satisfaits et une équipe de 20+ experts." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Henri Garage" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              À Propos
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              L'Histoire d'Henri Garage
            </h1>
            <p className="text-xl text-muted-foreground">
              Depuis plus de 15 ans, Henri Garage accompagne les automobilistes de Yaoundé avec passion, expertise et dévouement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fondé par Mr. Henri, passionné d'automobile depuis son plus jeune âge, Henri Garage est né d'un rêve simple : offrir aux automobilistes camerounais un service de qualité digne des plus grands standards internationaux.
                </p>
                <p>
                  Après des années d'apprentissage et de perfectionnement auprès des meilleurs mécaniciens, Mr. Henri a ouvert son premier atelier en 2008 à Yaoundé. Ce qui a commencé comme un petit garage familial s'est transformé au fil des années en une référence incontournable de l'automobile au Cameroun.
                </p>
                <p>
                  Aujourd'hui, Henri Garage c'est une équipe de plus de 20 techniciens experts, des équipements de pointe et surtout, des milliers de clients satisfaits qui nous font confiance pour l'entretien de leurs véhicules.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Mr. Henri et son équipe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <p className="font-display font-bold text-3xl">Mr. Henri</p>
                <p className="text-sm opacity-80">Fondateur & Directeur</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container">
          <SectionTitle
            badge="Nos Valeurs"
            title="Ce Qui Nous Définit"
            subtitle="Nos valeurs guident chacune de nos actions et font de nous le partenaire idéal pour votre véhicule."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            badge="Notre Parcours"
            title="15 Ans d'Excellence"
            subtitle="Retracez les étapes clés de notre développement."
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="w-24 shrink-0">
                  <span className="font-display font-bold text-2xl text-primary">{item.year}</span>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
