import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GraduationCap, Award, Briefcase, Shield } from "lucide-react";

const teachingStaff = [
  { name: "Dr. Sarah Mitchell", role: "Principal", qualification: "Ph.D. in Education", experience: "25 years", image: "👩‍🏫", color: "coral" },
  { name: "Mr. James Wilson", role: "Vice Principal", qualification: "M.Ed. in Administration", experience: "18 years", image: "👨‍🏫", color: "teal" },
  { name: "Mrs. Emily Brown", role: "Head of Academics", qualification: "M.Sc. in Mathematics", experience: "15 years", image: "👩‍🏫", color: "purple" },
  { name: "Mr. Robert Chen", role: "Science Department Head", qualification: "M.Sc. in Physics", experience: "12 years", image: "👨‍🔬", color: "yellow" },
  { name: "Ms. Amanda Taylor", role: "English Teacher", qualification: "M.A. in English Literature", experience: "10 years", image: "👩‍🎓", color: "green" },
  { name: "Mr. David Lee", role: "Mathematics Teacher", qualification: "B.Ed., M.Sc. Mathematics", experience: "8 years", image: "👨‍🏫", color: "coral" },
  { name: "Mrs. Lisa Johnson", role: "Arts & Crafts Teacher", qualification: "B.F.A., M.Ed.", experience: "9 years", image: "👩‍🎨", color: "teal" },
  { name: "Mr. Michael Park", role: "Physical Education", qualification: "B.P.Ed., Sports Science", experience: "11 years", image: "🏃‍♂️", color: "purple" },
];

const nonTeachingStaff = [
  { name: "Mrs. Jennifer Adams", role: "Office Administrator", department: "Administration", image: "👩‍💼" },
  { name: "Mr. Thomas Wright", role: "Accountant", department: "Finance", image: "👨‍💼" },
  { name: "Mrs. Nancy Clark", role: "Librarian", department: "Library", image: "📚" },
  { name: "Mr. George Miller", role: "IT Support", department: "Technology", image: "💻" },
  { name: "Mrs. Helen Davis", role: "School Nurse", department: "Health Services", image: "👩‍⚕️" },
  { name: "Mr. Frank Martinez", role: "Security Head", department: "Security", image: "🛡️" },
];

const colorClasses = {
  coral: { bg: "bg-coral-light", text: "text-coral", border: "border-coral/30" },
  teal: { bg: "bg-teal-light", text: "text-teal", border: "border-teal/30" },
  purple: { bg: "bg-purple-light", text: "text-purple", border: "border-purple/30" },
  yellow: { bg: "bg-yellow-light", text: "text-yellow", border: "border-yellow/30" },
  green: { bg: "bg-green-light", text: "text-green", border: "border-green/30" },
};

const Staff = () => {
  const teachingRef = useRef(null);
  const nonTeachingRef = useRef(null);
  const teachingInView = useInView(teachingRef, { once: true, margin: "-100px" });
  const nonTeachingInView = useInView(nonTeachingRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-purple-light text-purple rounded-full text-sm font-semibold mb-4"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Meet Our <span className="text-gradient-hero">Faculty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Dedicated educators and support staff committed to nurturing young minds and creating a positive learning environment.
          </motion.p>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 bg-background" ref={teachingRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teachingInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-coral-light px-4 py-2 rounded-full mb-4">
              <GraduationCap className="w-5 h-5 text-coral" />
              <span className="text-sm font-semibold text-coral">Teaching Staff</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Educators</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our qualified teachers bring passion and expertise to every classroom.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingStaff.map((staff, index) => {
              const colors = colorClasses[staff.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={teachingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`bg-card rounded-3xl p-6 shadow-card border-2 ${colors.border} hover:shadow-hover transition-all text-center`}
                >
                  <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}>
                    {staff.image}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{staff.name}</h3>
                  <p className={`text-sm font-semibold ${colors.text} mb-3`}>{staff.role}</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Award className="w-3 h-3" />
                      {staff.qualification}
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {staff.experience} experience
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Non-Teaching Staff */}
      <section className="py-20 bg-gradient-warm" ref={nonTeachingRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={nonTeachingInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-teal-light px-4 py-2 rounded-full mb-4">
              <Shield className="w-5 h-5 text-teal" />
              <span className="text-sm font-semibold text-teal">Support Staff</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Behind the Scenes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Dedicated professionals who keep our school running smoothly.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {nonTeachingStaff.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={nonTeachingInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-card rounded-2xl p-5 shadow-soft flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {staff.image}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{staff.name}</h3>
                  <p className="text-sm text-primary">{staff.role}</p>
                  <p className="text-xs text-muted-foreground">{staff.department}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;
