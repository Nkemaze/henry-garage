import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["675 097 329", "691 509 578"],
    action: "tel:+237675097329",
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Yaoundé, Cameroun"],
    action: "#map",
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven: 8h - 18h", "Sam: 8h - 14h", "Dim: Fermé"],
  },
  {
    icon: Facebook,
    title: "Facebook",
    details: ["@henrigarage44xofficiel"],
    action: "https://facebook.com/henrigarage44xofficiel",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
              Contact
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-muted-foreground">
              Une question, un devis ou un rendez-vous ? Notre équipe est à votre écoute pour répondre à tous vos besoins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {info.action && i === 0 ? (
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="hover:text-primary transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                Envoyez-nous un Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" placeholder="Votre nom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="Votre numéro" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Objet de votre message" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre demande..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 w-5 h-5" />
                  Envoyer le Message
                </Button>
              </form>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-muted rounded-3xl h-80 flex items-center justify-center" id="map">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Yaoundé, Cameroun</p>
                </div>
              </div>

              <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                <h3 className="font-display font-bold text-2xl mb-4">
                  Besoin d'une Réponse Rapide ?
                </h3>
                <p className="opacity-80 mb-6">
                  Appelez-nous directement ou contactez-nous sur WhatsApp pour une réponse immédiate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="tel:+237675097329">
                      <Phone className="mr-2 w-5 h-5" />
                      675 097 329
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="https://wa.me/237675097329" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
