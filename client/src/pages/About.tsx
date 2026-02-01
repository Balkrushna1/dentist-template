import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const team = [
    {
      name: "Dr. Emily Chen",
      role: "Lead Dentist",
      bio: "Dr. Chen has over 15 years of experience in restorative and cosmetic dentistry. She is passionate about creating beautiful, healthy smiles.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. James Wilson",
      role: "Orthodontist",
      bio: "Specializing in Invisalign and traditional braces, Dr. Wilson helps patients of all ages achieve perfectly aligned smiles.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
    },
    {
      name: "Sarah Miller",
      role: "Lead Hygienist",
      bio: "Sarah is known for her gentle touch and thorough approach to preventive care, ensuring every patient leaves with a fresh smile.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 mb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            About GentleCare
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We are dedicated to providing the highest quality dental care in a comfortable, state-of-the-art environment.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Mission Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-1.5 text-sm">Our Philosophy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Patient-Centered Care First</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At GentleCare Dental, we believe that visiting the dentist should be a positive experience. Our philosophy is built on three pillars: comfort, quality, and transparency.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We take the time to listen to your concerns, explain your treatment options, and work with you to achieve your oral health goals. Our state-of-the-art facility is designed to make you feel at home from the moment you walk through our doors.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
            {/* Image: Modern waiting room or office */}
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
              alt="Our Office" 
              className="relative rounded-[2rem] shadow-xl w-full h-[400px] object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1629909615000-3f9e495c0e1e?q=80&w=2053&auto=format&fit=crop";
              }}
            />
          </motion.div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our team of experienced professionals is passionate about helping you achieve and maintain a healthy, beautiful smile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden h-80">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <div className="p-6 bg-white relative z-20">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <div className="text-primary font-medium mb-4">{member.role}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Office Stats */}
        <section className="bg-slate-900 rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"></div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2010</div>
              <div className="text-sm opacity-70 uppercase tracking-wider">Established</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">12</div>
              <div className="text-sm opacity-70 uppercase tracking-wider">Treatment Rooms</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm opacity-70 uppercase tracking-wider">Staff Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15k+</div>
              <div className="text-sm opacity-70 uppercase tracking-wider">Smiles Restored</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
