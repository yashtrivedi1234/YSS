import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, FileText, Clock, CheckCircle2, HelpCircle, Send, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const admissionSteps = [
  { step: 1, title: "Submit Application", description: "Fill out the online application form with student and parent details." },
  { step: 2, title: "Document Verification", description: "Submit required documents for verification by our admissions team." },
  { step: 3, title: "Entrance Assessment", description: "Student attends age-appropriate assessment and interaction session." },
  { step: 4, title: "Admission Confirmation", description: "Receive admission offer and complete fee payment to secure the seat." },
];

const importantDates = [
  { event: "Application Opens", date: "January 15, 2024" },
  { event: "Early Bird Deadline", date: "February 28, 2024" },
  { event: "Assessment Sessions", date: "March 10-20, 2024" },
  { event: "Results Announcement", date: "March 30, 2024" },
  { event: "Registration Deadline", date: "April 15, 2024" },
];

const eligibility = [
  { grade: "Pre-Nursery", age: "2.5+ years as on April 1st" },
  { grade: "Nursery", age: "3+ years as on April 1st" },
  { grade: "KG", age: "4+ years as on April 1st" },
  { grade: "Class 1", age: "5.5+ years as on April 1st" },
  { grade: "Class 2-8", age: "Age appropriate for grade" },
];

const requiredDocs = [
  "Birth Certificate (Original + Copy)",
  "Passport Size Photographs (4)",
  "Aadhar Card (Child & Parents)",
  "Transfer Certificate (if applicable)",
  "Previous Year Report Card",
  "Address Proof",
];

const faqs = [
  { q: "What is the admission process for new students?", a: "The process includes online application, document submission, assessment session, and final registration upon selection." },
  { q: "Is there an entrance test for admission?", a: "We conduct age-appropriate assessments focusing on the child's readiness rather than rote knowledge." },
  { q: "What are the school timings?", a: "Pre-primary: 8:30 AM - 12:30 PM, Primary: 7:45 AM - 2:00 PM, Senior: 7:45 AM - 3:00 PM" },
  { q: "Is transportation available?", a: "Yes, we provide GPS-enabled buses covering all major areas with trained attendants." },
];

const Admission = () => {
  const processRef = useRef(null);
  const formRef = useRef(null);
  const eligibilityRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const eligibilityInView = useInView(eligibilityRef, { once: true, margin: "-100px" });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry submitted successfully! We'll contact you soon.");
    setFormData({ studentName: "", parentName: "", email: "", phone: "", grade: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-coral-light text-coral rounded-full text-sm font-semibold mb-4"
          >
            Admissions 2024-25
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Begin Your <span className="text-gradient-hero">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Take the first step towards an exceptional education. Join our family of learners today!
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background" ref={processRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Simple 4-step process to secure your child's admission.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-3xl p-6 shadow-card h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-yellow rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-coral text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-teal-light rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-teal" />
              <h3 className="text-2xl font-bold text-foreground">Important Dates</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {importantDates.map((item, index) => (
                <div key={index} className="bg-card rounded-2xl p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">{item.event}</p>
                  <p className="font-bold text-teal">{item.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-gradient-warm" ref={formRef} id="enquiry">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
            >
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-6 h-6 text-coral" />
                  <h3 className="text-2xl font-bold text-foreground">Admission Enquiry</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Student Name"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="rounded-xl h-12"
                      required
                    />
                    <Input
                      placeholder="Parent Name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="rounded-xl h-12"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl h-12"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl h-12"
                      required
                    />
                  </div>
                  <Input
                    placeholder="Grade Applying For"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="rounded-xl h-12"
                    required
                  />
                  <Textarea
                    placeholder="Your Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl min-h-[100px]"
                  />
                  <Button variant="hero" size="lg" className="w-full">
                    Submit Enquiry
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
            >
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-teal" />
                <h3 className="text-2xl font-bold text-foreground">FAQs</h3>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`} />
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        className="px-4 pb-4"
                      >
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-background" ref={eligibilityRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={eligibilityInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Criteria</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Age Criteria */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={eligibilityInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-coral" />
                <h3 className="text-xl font-bold text-foreground">Age Criteria</h3>
              </div>
              <div className="space-y-3">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-xl">
                    <span className="font-semibold text-foreground">{item.grade}</span>
                    <span className="text-sm text-muted-foreground">{item.age}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={eligibilityInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-teal" />
                <h3 className="text-xl font-bold text-foreground">Required Documents</h3>
              </div>
              <div className="space-y-3">
                {requiredDocs.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                    <span className="text-sm text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admission;
