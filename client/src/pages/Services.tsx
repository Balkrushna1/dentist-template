import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Sparkles, 
  ShieldCheck, 
  Settings, 
  HeartPulse, 
  Search,
  Check
} from "lucide-react";

export default function Services() {
  const categories = [
    {
      title: "Preventive Care",
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      description: "The foundation of a healthy smile. Regular checkups prevent problems before they start.",
      items: ["Comprehensive Exams", "Professional Cleanings", "Oral Cancer Screenings", "Digital X-Rays", "Fluoride Treatments"]
    },
    {
      title: "Restorative Dentistry",
      icon: <Settings className="w-8 h-8 text-primary" />,
      description: "Repair damaged or missing teeth to restore function and aesthetics.",
      items: ["Dental Implants", "Crowns & Bridges", "Root Canal Therapy", "Dentures", "Fillings"]
    },
    {
      title: "Cosmetic Dentistry",
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      description: "Enhance the appearance of your smile with our aesthetic treatments.",
      items: ["Teeth Whitening", "Porcelain Veneers", "Invisalign", "Smile Makeovers", "Gum Contouring"]
    },
    {
      title: "Specialty Care",
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
      description: "Specialized treatments for complex dental situations.",
      items: ["Pediatric Dentistry", "TMJ Treatment", "Sleep Apnea Devices", "Emergency Dentistry", "Sedation Options"]
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We offer a comprehensive range of dental treatments to keep your smile healthy and radiant.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-xl mb-4">
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{category.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{category.description}</p>
                
                <ul className="grid sm:grid-cols-2 gap-4 mt-8">
                  {category.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="rounded-full px-8">Schedule Consultation</Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl transform ${idx % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}></div>
                {/* Placeholder for service visuals */}
                <div className="relative bg-white p-2 rounded-3xl shadow-xl border border-slate-100">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      idx === 0 ? '1629909613654-28e377c37b09' : 
                      idx === 1 ? '1606811971618-4486d14f3f99' : 
                      idx === 2 ? '1588776816549-d378372460d8' : 
                      '1588776814546-1ffcf47267a5'
                    }?q=80&w=1000&auto=format&fit=crop`}
                    alt={category.title}
                    className="rounded-2xl w-full h-[400px] object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const fallbacks = [
                        'https://images.unsplash.com/photo-1606811841689-23e2e1f2e63a?q=80&w=1000&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop'
                      ];
                      const current = e.currentTarget.src;
                      const fallback = fallbacks.find(f => !current.includes(f));
                      if (fallback) e.currentTarget.src = fallback;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Insurance / Payment Strip */}
        <div className="mt-32 p-12 bg-slate-900 rounded-3xl text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Insurance & Financing</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
            We accept most major insurance plans and offer flexible financing options including CareCredit to ensure your dental care fits your budget.
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-70">
            {/* Mock logos text for simplicity */}
            <span className="text-xl font-bold">Delta Dental</span>
            <span className="text-xl font-bold">•</span>
            <span className="text-xl font-bold">Cigna</span>
            <span className="text-xl font-bold">•</span>
            <span className="text-xl font-bold">Aetna</span>
            <span className="text-xl font-bold">•</span>
            <span className="text-xl font-bold">MetLife</span>
            <span className="text-xl font-bold">•</span>
            <span className="text-xl font-bold">BlueCross</span>
          </div>
        </div>
      </div>
    </div>
  );
}
