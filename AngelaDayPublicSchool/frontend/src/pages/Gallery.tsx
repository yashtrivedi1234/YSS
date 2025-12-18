import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Camera, Video, Calendar, X, Play } from "lucide-react";

const photos = [
  { id: 1, category: "events", title: "Annual Day 2024", emoji: "🎭" },
  { id: 2, category: "events", title: "Sports Day Champions", emoji: "🏆" },
  { id: 3, category: "activities", title: "Science Exhibition", emoji: "🔬" },
  { id: 4, category: "activities", title: "Art Workshop", emoji: "🎨" },
  { id: 5, category: "events", title: "Cultural Program", emoji: "💃" },
  { id: 6, category: "activities", title: "Robotics Club", emoji: "🤖" },
  { id: 7, category: "activities", title: "Library Reading Hour", emoji: "📚" },
  { id: 8, category: "events", title: "Independence Day", emoji: "🇮🇳" },
  { id: 9, category: "activities", title: "Music Class", emoji: "🎵" },
  { id: 10, category: "events", title: "Teacher's Day", emoji: "👩‍🏫" },
  { id: 11, category: "activities", title: "Yoga Session", emoji: "🧘" },
  { id: 12, category: "events", title: "Christmas Celebration", emoji: "🎄" },
];

const videos = [
  { id: 1, title: "School Tour 2024", duration: "3:45", category: "promo", emoji: "🏫" },
  { id: 2, title: "Annual Day Highlights", duration: "5:20", category: "events", emoji: "🎬" },
  { id: 3, title: "Student Testimonials", duration: "4:15", category: "promo", emoji: "🗣️" },
  { id: 4, title: "Science Lab in Action", duration: "2:30", category: "educational", emoji: "🧪" },
  { id: 5, title: "Sports Day 2024", duration: "6:10", category: "events", emoji: "⚽" },
  { id: 6, title: "Smart Classroom Demo", duration: "3:00", category: "educational", emoji: "💻" },
];

const events = [
  { name: "Annual Day", date: "December 15, 2024", description: "A celebration of talent with performances, awards, and cultural programs.", icon: "🎭", color: "coral" },
  { name: "Sports Day", date: "January 20, 2025", description: "Athletic competitions, team events, and fitness activities for all students.", icon: "🏃", color: "teal" },
  { name: "Science Fair", date: "February 10, 2025", description: "Student innovations and scientific experiments showcased to parents.", icon: "🔬", color: "purple" },
  { name: "Cultural Festival", date: "March 5, 2025", description: "Traditional dance, music, and art representing diverse cultures.", icon: "🎨", color: "yellow" },
];

const colorClasses = {
  coral: "bg-coral-light text-coral border-coral/30",
  teal: "bg-teal-light text-teal border-teal/30",
  purple: "bg-purple-light text-purple border-purple/30",
  yellow: "bg-yellow-light text-yellow border-yellow/30",
};

const Gallery = () => {
  const photosRef = useRef(null);
  const videosRef = useRef(null);
  const eventsRef = useRef(null);
  const photosInView = useInView(photosRef, { once: true, margin: "-100px" });
  const videosInView = useInView(videosRef, { once: true, margin: "-100px" });
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" });

  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [photoFilter, setPhotoFilter] = useState<string>("all");

  const filteredPhotos = photoFilter === "all" ? photos : photos.filter(p => p.category === photoFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-yellow-light text-yellow rounded-full text-sm font-semibold mb-4"
          >
            Media & Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Capturing <span className="text-gradient-hero">Memories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Explore moments of learning, fun, and achievement through our gallery.
          </motion.p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-background" ref={photosRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={photosInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-coral-light px-4 py-2 rounded-full mb-4">
              <Camera className="w-5 h-5 text-coral" />
              <span className="text-sm font-semibold text-coral">Photo Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">School Moments</h2>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={photosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-3 mb-8 flex-wrap"
          >
            {["all", "events", "activities"].map((filter) => (
              <button
                key={filter}
                onClick={() => setPhotoFilter(filter)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  photoFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={photosInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedPhoto(photo)}
                className="aspect-square bg-gradient-to-br from-coral-light via-teal-light to-yellow-light rounded-2xl cursor-pointer shadow-soft hover:shadow-hover transition-all flex flex-col items-center justify-center p-4"
              >
                <span className="text-5xl mb-2">{photo.emoji}</span>
                <p className="text-sm font-medium text-foreground text-center">{photo.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gradient-warm" ref={videosRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videosInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-teal-light px-4 py-2 rounded-full mb-4">
              <Video className="w-5 h-5 text-teal" />
              <span className="text-sm font-semibold text-teal">Video Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Watch & Learn</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={videosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center relative group cursor-pointer">
                  <span className="text-6xl">{video.emoji}</span>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background" ref={eventsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-light px-4 py-2 rounded-full mb-4">
              <Calendar className="w-5 h-5 text-purple" />
              <span className="text-sm font-semibold text-purple">Events</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={eventsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl p-6 border-2 ${colorClasses[event.color as keyof typeof colorClasses]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{event.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{event.name}</h3>
                    <p className="text-sm font-semibold mb-2">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-card rounded-3xl p-8 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-muted rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-8xl mb-4">{selectedPhoto.emoji}</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{selectedPhoto.title}</h3>
            <p className="text-muted-foreground capitalize">{selectedPhoto.category}</p>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
