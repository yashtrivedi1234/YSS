import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/three/FloatingShapes";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-warm pt-20">
      {/* 3D Background */}
      <FloatingShapes className="opacity-60" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Welcome to Our School</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              Where Learning Meets{" "}
              <span className="text-gradient-hero">Adventure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              At Angela Day Public School, we nurture curious minds and build tomorrow's leaders through innovative education, creativity, and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/admission">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Gallery
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              {[
                { number: "25+", label: "Years of Excellence" },
                { number: "500+", label: "Happy Students" },
                { number: "50+", label: "Expert Teachers" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-hero rounded-full opacity-20 animate-pulse-soft" />
              <div className="absolute inset-4 bg-card rounded-full shadow-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto mb-4"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="10 5" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">🎓</h3>
                  <p className="text-4xl font-bold text-gradient-hero">ADPS</p>
                  <p className="text-sm text-muted-foreground mt-2">Est. 1995</p>
                </div>
              </div>

              {/* Floating badges */}
              {[
                { emoji: "📚", label: "Learning", position: "top-0 left-0" },
                { emoji: "🎨", label: "Creativity", position: "top-0 right-0" },
                { emoji: "⚽", label: "Sports", position: "bottom-0 left-0" },
                { emoji: "🌟", label: "Excellence", position: "bottom-0 right-0" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`absolute ${badge.position} bg-card p-3 rounded-2xl shadow-card`}
                >
                  <div className="text-2xl mb-1">{badge.emoji}</div>
                  <p className="text-xs font-medium text-foreground">{badge.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
