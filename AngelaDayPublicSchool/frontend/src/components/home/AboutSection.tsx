import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Eye, BookOpen, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Eye,
    title: "Vision & Mission",
    description: "To empower every child to become a confident, creative, and compassionate global citizen through holistic education.",
    color: "coral",
  },
  {
    icon: BookOpen,
    title: "Our History",
    description: "Founded in 1995, Angela Day Public School has grown from a small community school to a leading educational institution with 500+ students.",
    color: "teal",
  },
  {
    icon: Building2,
    title: "Facilities",
    description: "Modern classrooms, science labs, computer centers, sports complex, library, and arts studio equipped with latest technology.",
    color: "yellow",
  },
];

const highlights = [
  "CBSE Affiliated School",
  "Smart Digital Classrooms",
  "Olympic-sized Swimming Pool",
  "Award-winning Faculty",
  "Safe & Secure Campus",
  "Transportation Available",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-warm relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal rounded-full text-sm font-semibold mb-4">
            About Our School
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nurturing <span className="text-gradient-hero">Tomorrow's</span> Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a supportive and stimulating environment where children discover their passions and develop lifelong skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-card rounded-2xl shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}-light flex items-center justify-center shrink-0`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Link to="/academics">
                <Button variant="hero" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-muted rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                    <span className="text-sm font-medium text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-gradient-warm rounded-2xl border-l-4 border-primary">
                <p className="text-foreground italic mb-3">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
                <p className="text-sm text-muted-foreground font-medium">— William Butler Yeats</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
