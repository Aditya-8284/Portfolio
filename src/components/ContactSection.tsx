
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss opportunities and how we can work together
          </p>
        </div>
        </div>

    <div className="flex flex-col items-center justify-center text-center">
  <h3 className="text-2xl font-semibold mb-6"></h3>

  <div className="flex flex-col md:flex-row items-center justify-center gap-12">
    
    {/* Email */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Mail className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <p className="font-medium">Email</p>
        <p className="text-muted-foreground">adityagupta10043@gmail.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Phone className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <p className="font-medium">Phone</p>
        <p className="text-muted-foreground">+91 123-4567</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <MapPin className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <p className="font-medium">Location</p>
        <p className="text-muted-foreground">Satna, M.P INDIA</p>
      </div>
    </div>

  </div>
</div>

    </section>
  );
};

export default ContactSection;
