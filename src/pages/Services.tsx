import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings, Wrench, Paintbrush, Snowflake, Truck, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: Settings,
    title: "Entretien Général & Préventif",
    description: "Maintenez votre véhicule en parfait état avec nos services d'entretien complets et préventifs.",
    features: [
      "Vidange huile et filtres",
      "Révision complète",
      "Contrôle technique",
      "Changement de courroie",
      "Équilibrage et parallélisme",
      "Remplacement plaquettes de frein",
    ],
  },
  {
    icon: Wrench,
    title: "Réparation Mécanique & Systèmes Embarqués",
    description: "Diagnostics et réparations de haute précision pour tous types de pannes mécaniques et électroniques.",
    features: [
      "Diagnostic électronique",
      "Réparation moteur",
      "Boîte de vitesses",
      "Système d'injection",
      "Capteurs et calculateurs",
      "Système de freinage ABS",
    ],
  },
  {
    icon: Paintbrush,
    title: "Carrosserie & Peinture",
    description: "Redonnez à votre véhicule son éclat d'origine avec notre expertise en carrosserie et peinture.",
    features: [
      "Débosselage",
      "Redressage châssis",
      "Peinture complète",
      "Retouches localisées",
      "Polissage et lustrage",
      "Protection céramique",
    ],
  },
  {
    icon: Snowflake,
    title: "Climatisation & Confort",
    description: "Profitez d'un confort optimal en toute saison grâce à notre expertise en climatisation automobile.",
    features: [
      "Recharge climatisation",
      "Diagnostic système",
      "Remplacement compresseur",
      "Nettoyage circuit",
      "Changement filtre habitacle",
      "Réparation fuites",
    ],
  },
  {
    icon: Truck,
    title: "Assistance & Dépannage",
    description: "Un problème sur la route ? Notre équipe d'assistance est là pour vous aider rapidement.",
    features: [
      "Dépannage sur place",
      "Remorquage",
      "Crevaison",
      "Panne de batterie",
      "Panne sèche",
      "Intervention rapide",
    ],
  },
  {
    icon: FileText,
    title: "Gestion de Parc & Contrats de Maintenance",
    description: "Solutions sur mesure pour la gestion et l'entretien de votre flotte de véhicules professionnels.",
    features: [
      "Contrats personnalisés",
      "Suivi kilométrique",
      "Rapports d'entretien",
      "Tarifs préférentiels",
      "Véhicule de remplacement",
      "Interlocuteur dédié",
    ],
  },
];

const Services = () => {
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
              Nos Services
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Services Automobiles Complets
            </h1>
            <p className="text-xl text-muted-foreground">
              Une gamme complète de prestations pour répondre à tous vos besoins automobiles, de l'entretien courant aux réparations les plus complexes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <Button asChild className="group">
                    <Link to="/contact">
                      Demander un devis
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className={`bg-muted rounded-3xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="font-semibold text-foreground mb-6">Prestations incluses :</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Besoin d'un Service ?
            </h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis personnalisé ou prenez rendez-vous directement en ligne.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
