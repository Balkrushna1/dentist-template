import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Star, 
  Sparkles,
  UserRound
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                Accepting New Patients
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900">
                Your Smile Is Our <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Masterpiece</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Experience world-class dental care in a relaxing environment. From routine cleanings to complete smile makeovers, we are dedicated to your oral health.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 rounded-full text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                    Book an Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base border-2 hover:bg-slate-50">
                    View Services
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-1 rounded-full text-primary"><CheckCircle2 size={16} /></div>
                  Top Rated
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-1 rounded-full text-primary"><CheckCircle2 size={16} /></div>
                  Latest Tech
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-1 rounded-full text-primary"><CheckCircle2 size={16} /></div>
                  Expert Team
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                {/* Hero image: Modern dental office / patient smiling */}
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                  alt="Modern Dental Office"
                  className="w-full h-[600px] object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23e2e1f2e63a?q=80&w=2068&auto=format&fit=crop";
                  }}
                />
                
                {/* Floating card */}
                <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Star className="fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">4.9/5 Rating</div>
                    <div className="text-sm text-slate-500">Based on 500+ patient reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Comprehensive Dental Care</h2>
            <p className="text-slate-600 text-lg">
              We combine advanced technology with a gentle touch to provide the best care possible for you and your family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-10 h-10 text-primary" />,
                title: "Cosmetic Dentistry",
                description: "Transform your smile with veneers, whitening, and bonding treatments designed to boost confidence."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
                title: "Preventive Care",
                description: "Routine check-ups, cleanings, and sealants to keep your teeth healthy and prevent future issues."
              },
              {
                icon: <Clock className="w-10 h-10 text-rose-500" />,
                title: "Emergency Services",
                description: "Same-day appointments for urgent dental needs. We're here when you need us most."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <Link href="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Trusted by Families <br/> Across the City
              </h2>
              <div className="flex gap-4 mb-8">
                <Button variant="secondary" size="lg" className="rounded-full">
                  Read Reviews
                </Button>
              </div>
              <div className="flex gap-8 border-t border-white/20 pt-8">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-primary-foreground/70">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">5k+</div>
                  <div className="text-primary-foreground/70">Happy Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-primary-foreground/70">Emergency Support</div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white p-8 rounded-3xl">
              <CardContent className="space-y-6 pt-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />)}
                </div>
                <p className="text-xl font-light italic opacity-90 leading-relaxed">
                  "I used to be terrified of the dentist, but the team at GentleCare changed everything. They are incredibly patient, kind, and professional. My smile has never looked better!"
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <UserRound className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Sarah Jenkins</div>
                    <div className="text-sm opacity-70">Patient since 2018</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Ready for a Brighter Smile?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Schedule your consultation today and take the first step towards optimal oral health.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-2xl shadow-primary/25 hover:scale-105 transition-transform">
              Book Appointment Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
