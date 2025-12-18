import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "Consistently ranked among the top schools with 98% pass rate and numerous university admissions.",
    color: "coral",
    stats: "98%",
  },
  {
    icon: Medal,
    title: "Sports Achievements",
    description: "Regional champions in basketball, swimming, and athletics. 15 state-level medals this year.",
    color: "teal",
    stats: "15+",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    description: "Best School Award 2023, Innovation in Education Award, and Green Campus certification.",
    color: "yellow",
    stats: "20+",
  },
  {
    icon: Star,
    title: "Student Achievements",
    description: "Our students excel in olympiads, science fairs, and art competitions at national level.",
    color: "purple",
    stats: "100+",
  },
  {
    icon: Target,
    title: "100% Placement",
    description: "All our graduates secure admissions in prestigious universities and colleges worldwide.",
    color: "green",
    stats: "100%",
  },
  {
    icon: Zap,
    title: "Innovation Hub",
    description: "State-of-the-art robotics lab and coding center producing young tech innovators.",
    color: "coral",
    stats: "50+",
  },
];

const colorClasses = {
  coral: { bg: "bg-coral-light", icon: "text-coral", border: "border-coral/20" },
  teal: { bg: "bg-teal-light", icon: "text-teal", border: "border-teal/20" },
  yellow: { bg: "bg-yellow-light", icon: "text-yellow", border: "border-yellow/20" },
  purple: { bg: "bg-purple-light", icon: "text-purple", border: "border-purple/20" },
  green: { bg: "bg-green-light", icon: "text-green", border: "border-green/20" },
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-coral-light text-coral rounded-full text-sm font-semibold mb-4">
            Our Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Celebrating <span className="text-gradient-hero">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized through numerous achievements and awards over the years.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const colors = colorClasses[achievement.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-card rounded-3xl p-6 shadow-card border-2 ${colors.border} hover:shadow-hover transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <achievement.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <span className={`text-3xl font-bold ${colors.icon}`}>{achievement.stats}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
