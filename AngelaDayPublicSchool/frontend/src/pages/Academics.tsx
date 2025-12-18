import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Dumbbell, Brain, Monitor, Palette, Music, MessageSquare, Laptop, Blocks, Box } from "lucide-react";

const curriculum = [
  { icon: BookOpen, title: "Subjects Offered", items: ["Mathematics", "Science", "English", "Social Studies", "Hindi", "Computer Science", "Environmental Studies", "Art & Craft"] },
  { icon: Brain, title: "Examination System", items: ["Continuous Assessment", "Quarterly Exams", "Half-Yearly Exams", "Annual Exams", "Project-Based Evaluation"] },
  { icon: Monitor, title: "Educational Standards", items: ["CBSE Curriculum", "NCF Guidelines", "21st Century Skills", "Digital Literacy Program"] },
];

const activities = [
  { icon: Dumbbell, title: "Physical Training", description: "Regular PT sessions, sports activities, and fitness programs to keep students healthy and active.", color: "coral" },
  { icon: Blocks, title: "Yoga & Meditation", description: "Daily yoga sessions for mental wellness, focus, and physical flexibility.", color: "teal" },
  { icon: Music, title: "Dancing", description: "Classical, folk, and contemporary dance forms taught by expert choreographers.", color: "purple" },
  { icon: MessageSquare, title: "English Speaking", description: "Communication skills, public speaking, and debate programs for confidence building.", color: "yellow" },
  { icon: Palette, title: "Art & Craft", description: "Creative expression through painting, sculpting, and various craft activities.", color: "green" },
  { icon: BookOpen, title: "Library Hour", description: "Daily reading time with access to our extensive collection of books and digital resources.", color: "coral" },
];

const methodology = [
  { icon: Brain, title: "Logical Based Learning", description: "We encourage critical thinking and problem-solving through logical reasoning exercises and real-world applications.", color: "teal" },
  { icon: Laptop, title: "Smart Classroom", description: "Interactive whiteboards, projectors, and digital content make learning engaging and memorable.", color: "coral" },
  { icon: Box, title: "3D Classroom", description: "Immersive 3D content brings complex concepts to life, from molecular structures to historical events.", color: "purple" },
];

const colorClasses = {
  coral: { bg: "bg-coral-light", text: "text-coral", border: "border-coral/20" },
  teal: { bg: "bg-teal-light", text: "text-teal", border: "border-teal/20" },
  yellow: { bg: "bg-yellow-light", text: "text-yellow", border: "border-yellow/20" },
  purple: { bg: "bg-purple-light", text: "text-purple", border: "border-purple/20" },
  green: { bg: "bg-green-light", text: "text-green", border: "border-green/20" },
};

const Academics = () => {
  const curriculumRef = useRef(null);
  const activitiesRef = useRef(null);
  const methodologyRef = useRef(null);
  const curriculumInView = useInView(curriculumRef, { once: true, margin: "-100px" });
  const activitiesInView = useInView(activitiesRef, { once: true, margin: "-100px" });
  const methodologyInView = useInView(methodologyRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-teal-light text-teal rounded-full text-sm font-semibold mb-4"
          >
            Academics
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Learning That <span className="text-gradient-hero">Inspires</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Our comprehensive curriculum combines traditional excellence with modern innovation to prepare students for the future.
          </motion.p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-background" ref={curriculumRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A well-rounded educational framework designed to nurture every aspect of student development.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl p-6 shadow-card hover:shadow-hover transition-all"
              >
                <div className="w-14 h-14 bg-coral-light rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-2 h-2 bg-coral rounded-full" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-warm" ref={activitiesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-teal-light text-teal rounded-full text-sm font-semibold mb-4">Co-Curricular</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Activities & Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Beyond academics, we offer diverse activities to develop well-rounded individuals.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const colors = colorClasses[activity.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-card rounded-3xl p-6 shadow-card border-2 ${colors.border} hover:shadow-hover transition-all`}
                >
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <activity.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-background" ref={methodologyRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={methodologyInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-coral-light text-coral rounded-full text-sm font-semibold mb-4">Innovation</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Teaching Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Modern teaching approaches that make learning effective and enjoyable.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((method, index) => {
              const colors = colorClasses[method.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={methodologyInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`w-24 h-24 ${colors.bg} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-soft`}>
                    <method.icon className={`w-12 h-12 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;
