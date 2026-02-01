import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    // Mock submission - no backend needed
    console.log("Form submitted:", data);
    toast({
      title: "Request Received",
      description: "We'll be in touch shortly to confirm your appointment.",
      variant: "default",
      duration: 5000
    });
    form.reset();
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            We're here to answer your questions and help you schedule your next visit.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <p className="text-sm text-slate-400 mt-1">Mon-Fri, 9am-6pm</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600">info@gentlecare.com</p>
                    <p className="text-sm text-slate-400 mt-1">24/7 Support</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-64 w-full bg-slate-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841264379967!2d-73.98565668459418!3d40.74843644349141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629824329242!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Visit Our Office</h3>
                    <p className="text-slate-600">123 Medical Park Drive, Suite 400</p>
                    <p className="text-slate-600">New York, NY 10001</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="font-bold text-slate-900 mb-3">Opening Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-slate-600">Monday - Friday</div>
                      <div className="text-right font-medium text-slate-900">9:00 AM - 6:00 PM</div>
                      <div className="text-slate-600">Saturday</div>
                      <div className="text-right font-medium text-slate-900">10:00 AM - 2:00 PM</div>
                      <div className="text-slate-600">Sunday</div>
                      <div className="text-right font-medium text-slate-900">Closed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl h-full">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-2">Request Appointment</h3>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email Address</label>
                      <Input 
                        placeholder="john@example.com" 
                        type="email"
                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone Number</label>
                      <Input 
                        placeholder="(555) 123-4567" 
                        type="tel"
                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        {...form.register("phone")}
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message / Reason for Visit</label>
                    <Textarea 
                      placeholder="I would like to book a cleaning..." 
                      className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none"
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/20"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
