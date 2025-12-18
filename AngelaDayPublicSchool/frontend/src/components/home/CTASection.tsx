import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-background/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-background/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            >
              Ready to Give Your Child the Best Education?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-primary-foreground/90 text-lg mb-8 max-w-xl"
            >
              Join our community of learners. Admissions are now open for the academic year 2024-25. Limited seats available!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/admission">
                <Button size="xl" className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto">
                  Apply for Admission
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/admission#enquiry">
                <Button size="xl" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-primary w-full sm:w-auto">
                  Make an Enquiry
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", desc: "Mon-Fri, 8am-4pm" },
              { icon: Mail, label: "Email Us", value: "admissions@angeladay.edu", desc: "We reply within 24 hours" },
              { icon: Calendar, label: "Visit Us", value: "Schedule a Campus Tour", desc: "See our facilities in person" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-2xl p-4 border border-background/20 cursor-pointer"
              >
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">{item.label}</p>
                  <p className="font-bold text-primary-foreground">{item.value}</p>
                  <p className="text-xs text-primary-foreground/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
