import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Car, Shield, Phone, ChevronRight, Settings, Paintbrush, Snowflake, Truck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionTitle from "@/components/ui/SectionTitle";
import heroImage from "@/assets/hero-garage.jpg";

const services = [
  {
    icon: Settings,
    title: "Entretien Général & Préventif",
    description: "Vidange, révisions complètes, contrôle technique et maintenance préventive pour une longévité optimale de votre véhicule.",
  },
  {
    icon: Wrench,
    title: "Réparation Mécanique & Systèmes Embarqués",
    description: "Diagnostics électroniques, réparation moteur, transmission et tous systèmes embarqués modernes.",
  },
  {
    icon: Paintbrush,
    title: "Carrosserie & Peinture",
    description: "Réparation de carrosserie, débosselage, peinture automobile et finitions haut de gamme.",
  },
  {
    icon: Snowflake,
    title: "Climatisation & Confort",
    description: "Installation, entretien et réparation de climatisation pour un confort optimal en toute saison.",
  },
  {
    icon: Truck,
    title: "Assistance & Dépannage",
    description: "Service de dépannage disponible pour vous assister en cas de panne sur la route.",
  },
  {
    icon: FileText,
    title: "Gestion de Parc & Contrats",
    description: "Solutions complètes de gestion de flotte automobile et contrats de maintenance personnalisés.",
  },
];

const testimonials = [
  {
    name: "Jean-Pierre Kamga",
    role: "Chef d'entreprise",
    content: "Henri Garage a transformé ma vieille voiture en véhicule comme neuf. Service exceptionnel et équipe très professionnelle. Je recommande vivement!",
    rating: 5,
  },
  {
    name: "Marie-Claire Nguemo",
    role: "Particulier",
    content: "Excellent service de climatisation! L'équipe est ponctuelle, compétente et les prix sont très compétitifs. Merci Henri Garage!",
    rating: 5,
  },
  {
    name: "Patrick Essomba",
    role: "Gérant de flotte",
    content: "Nous confions l'entretien de notre flotte de 15 véhicules à Henri Garage. Fiabilité et qualité au rendez-vous depuis 3 ans.",
    rating: 5,
  },
];

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "5000+", label: "Clients satisfaits" },
  { value: "20+", label: "Techniciens experts" },
  { value: "24/7", label: "Assistance disponible" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Henri Garage - Atelier moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
                <Car className="w-4 h-4" />
                Votre garage de confiance à Yaoundé
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-6 leading-tight"
            >
              L'Excellence
              <br />
              Automobile au
              <br />
              <span className="text-accent">Cameroun</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-foreground/80 mb-8 max-w-xl"
            >
              Henri Garage vous offre des services d'entretien et de réparation automobile de qualité supérieure avec une équipe d'experts passionnés.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 group">
                <Link to="/services">
                  Nos Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">
                  <Phone className="mr-2 w-5 h-5" />
                  Nous Contacter
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary-foreground"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            badge="Nos Services"
            title="Une Expertise Complète"
            subtitle="Des solutions automobiles professionnelles adaptées à tous vos besoins, de l'entretien courant aux réparations complexes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild className="group">
              <Link to="/services">
                Voir tous nos services
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Pourquoi Nous Choisir
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                L'Excellence à Votre Service
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Chez Henri Garage, nous combinons expertise technique, équipements modernes et passion automobile pour vous offrir un service irréprochable.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Garantie Qualité", desc: "Travail garanti avec pièces d'origine" },
                  { icon: Wrench, title: "Équipements Modernes", desc: "Outils de diagnostic dernière génération" },
                  { icon: Car, title: "Toutes Marques", desc: "Expertise sur véhicules européens, asiatiques et américains" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Atelier Henri Garage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="font-display font-bold text-4xl">15+</p>
                <p className="text-sm opacity-80">Années d'excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            badge="Témoignages"
            title="Ce Que Disent Nos Clients"
            subtitle="La satisfaction de nos clients est notre plus grande fierté. Découvrez leurs expériences."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Prêt à Prendre Soin de Votre Véhicule?
            </h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour un devis gratuit ou prenez rendez-vous en ligne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link to="/contact">Prendre Rendez-vous</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+237675097329">
                  <Phone className="mr-2 w-5 h-5" />
                  675 097 329
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
