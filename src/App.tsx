import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Instagram, 
  Facebook, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  ShieldCheck,
  Gem,
  ShoppingBag,
  MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';

// Product Data
const products = [
  { id: 1, name: "Men's Gold Ring", category: "Ring", image: "/images/mensring3.jpg" },
  { id: 2, name: "Traditional Bangles", category: "Bangle", image: "/images/bangels.jpg" },
  { id: 3, name: "Elegant Bracelet", category: "Bracelet", image: "/images/braslet.jpg" },
  { id: 4, name: "Classic Earrings", category: "Earring", image: "/images/earing.jpg" },
  { id: 5, name: "Royal Jhumkas", category: "Earring", image: "/images/earing1.jpg" },
  { id: 6, name: "Gold Studs", category: "Earring", image: "/images/earing2.jpg" },
  { id: 7, name: "Designer Earrings", category: "Earring", image: "/images/earingg.jpg" },
  { id: 8, name: "Sacred Mangalsutra", category: "Necklace", image: "/images/mangalsutr.jpg" },
  { id: 9, name: "Bridal Maang Tikka", category: "Maang Tikka", image: "/images/mangtika.jpg" },
  { id: 10, name: "Gold Choker", category: "Necklace", image: "/images/necklace.jpg" },
  { id: 11, name: "Gold Necklace Set", category: "Necklace", image: "/images/neckless.jpg" },
  { id: 12, name: "Wedding Ring", category: "Ring", image: "/images/riing.jpg" },
  { id: 13, name: "Gold Signet Ring", category: "Ring", image: "/images/ring.jpg" },
  { id: 15, name: "Statement Ring", category: "Ring", image: "/images/ring2.jpg" },
  { id: 16, name: "Infinity Ring", category: "Ring", image: "/images/ring3.jpg" },
  { id: 17, name: "Luxury Ring", category: "Ring", image: "/images/ring44.jpg" },
  { id: 19, name: "Modern Ring", category: "Ring", image: "/images/ringng.jpg" },
  { id: 20, name: "Antique Ring", category: "Ring", image: "/images/rinng.jpg" },
];

const categories = ["All", "Ring", "Necklace", "Earring", "Bangle", "Bracelet"];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const whatsappNumber = "917007322451";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Alankar Jewellers, I'm interested in your gold jewellery collection.`;
  const callLink = `tel:+${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-gold-500/20 py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
              <Gem className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tighter text-gold-500">
              ALANKAR <span className="text-white">JEWELLERS</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            {["Home", "Collection", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-gold-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/alankar_jewellers_gzp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex text-gold-500 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={callLink}
              className="hidden md:flex items-center gap-2 bg-gold-500 text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-gold-400 transition-colors"
            >
              <Phone size={16} />
              ENQUIRE NOW
            </motion.a>
            <button 
              className="md:hidden text-gold-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif text-center">
              {["Home", "Collection", "About", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-gold-500"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://www.instagram.com/alankar_jewellers_gzp/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white py-4 rounded-xl font-bold mt-2 flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                FOLLOW ON INSTAGRAM
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gold-500 text-black py-4 rounded-xl font-bold mt-2 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WHATSAPP US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="/images/necklace.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover blur-[1px]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.5 }}
              className="text-gold-400 font-medium uppercase text-xs md:text-sm mb-6 block"
            >
              Established in Ghazipur
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter">
              Timeless <span className="text-gold-500 italic drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Gold</span> <br />
              <span className="text-white/90">Timeless Beauty</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Discover our curated collection of 18 CT & 22 CT HUID certified gold jewellery. 
              <span className="text-gold-500 font-medium block mt-2">Special Offer: Making charges are FREE!</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#collection"
                className="bg-gold-500 text-black px-12 py-5 rounded-full font-bold tracking-[0.2em] hover:bg-gold-400 transition-all w-full sm:w-auto text-sm"
              >
                VIEW COLLECTION
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold-500/50"
        >
          <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Why <span className="text-gold-500 italic">Choose Us</span></h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: ShieldCheck, title: "HUID Certified", desc: "Every masterpiece is hallmarked for absolute purity and lifelong authenticity." },
              { icon: Gem, title: "18 CT & 22 CT", desc: "Available in premium 18 CT and 22 CT gold to suit your style and budget." },
              { icon: Star, title: "Making Charges Free", desc: "Enjoy the luxury of pure gold without the extra cost. Making charges are absolutely FREE." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="text-center group relative p-8 rounded-[2rem] hover:bg-zinc-900/50 transition-all duration-700 border border-transparent hover:border-gold-500/10"
              >
                <div className="w-20 h-20 bg-gold-500/5 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gold-500 group-hover:rotate-[10deg] transition-all duration-700 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                  <feature.icon className="text-gold-500 group-hover:text-black transition-colors" size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-gold-500 transition-colors">{feature.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Spotlight Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-gold-500 tracking-[0.4em] uppercase text-xs mb-4 block">Featured Masterpiece</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">The <span className="text-gold-500 italic">Royal</span> Collection</h2>
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                Experience the depth of our craftsmanship with our signature pieces. 
                Each item is a testament to our 30-year legacy in Ghazipur.
              </p>
              <ul className="space-y-4 mb-10">
                {["Handcrafted in 22K Gold", "HUID Certified Purity", "Lifetime Exchange Guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative group"
            >
              <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full group-hover:bg-gold-500/40 transition-all duration-1000" />
              <motion.div
                whileHover={{ 
                  rotateY: 15, 
                  rotateX: -10,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative z-10 aspect-square rounded-[3rem] overflow-hidden border border-gold-500/30 shadow-2xl shadow-gold-500/10"
              >
                <img 
                  src="/images/necklace.jpg" 
                  alt="Featured Necklace" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                  <span className="text-gold-500 font-serif text-3xl font-bold">Bridal Heritage</span>
                  <span className="text-white/60 uppercase tracking-widest text-xs mt-2">22K Gold Choker Set</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-500 tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Our Masterpieces
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-8"
          >
            Signature <span className="text-gold-500 italic">Gallery</span>
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-300 border",
                  activeCategory === cat 
                    ? "bg-gold-500 border-gold-500 text-black font-bold" 
                    : "border-gold-500/30 text-gold-500 hover:border-gold-500"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 shine-effect border border-gold-500/10 group-hover:border-gold-500/40 transition-all duration-500">
                  <motion.img 
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 2,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={whatsappLink}
                      className="bg-white text-black p-4 rounded-full shadow-xl"
                    >
                      <ShoppingBag size={24} />
                    </motion.a>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <span className="text-gold-500/60 text-[10px] uppercase tracking-[0.3em] mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-serif font-medium group-hover:text-gold-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="w-8 h-0.5 bg-gold-500/30 mx-auto mt-3 group-hover:w-16 group-hover:bg-gold-500 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-zinc-900 border border-gold-500/20 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Ready to find your <br />
              <span className="text-gold-500 italic">Perfect Match?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light">
              Visit our showroom or connect with us via WhatsApp 
              to explore our exclusive gold collection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gold-500 text-black px-12 py-5 rounded-full font-bold tracking-widest hover:bg-gold-400 transition-all w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                WHATSAPP US
              </motion.a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-gold-500/20 flex items-center justify-center">
                      <Star size={14} className="text-gold-500 fill-gold-500" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">5000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Updates Section */}
      <section className="py-20 bg-black relative overflow-hidden border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Instagram className="text-gold-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Follow Our <span className="text-gold-500 italic">Latest Designs</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
              We update our newest collections and exclusive arrivals daily on Instagram. 
              Join our community to never miss a masterpiece.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/alankar_jewellers_gzp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-12 py-4 rounded-full font-bold tracking-widest shadow-xl"
            >
              <Instagram size={20} />
              @alankar_jewellers_gzp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-gold-500/10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                <Gem className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tighter text-gold-500">
                ALANKAR <span className="text-white">JEWELLERS</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 font-light leading-relaxed">
              Established in Ghazipur. 
              Our commitment to purity and design makes us the preferred 
              choice for generations.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, link: "https://www.instagram.com/alankar_jewellers_gzp/", pulse: true },
                { Icon: Facebook, link: "#", pulse: false }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={social.pulse ? { boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 20px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold-500 font-serif font-bold text-lg mb-6 uppercase tracking-widest">Visit Us</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-1" />
                <span>Sanbazar, Cheetnath, <br />Ghazipur, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold-500 shrink-0" />
                <span>10:00 AM - 08:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <span>+91 70073 22451</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-serif font-bold text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              {["New Arrivals", "Gold Coins", "Gold Purity Guide", "Privacy Policy"].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-gold-500 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gold-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-gold-500/5 flex flex-col md:row items-center justify-between gap-4 text-gray-600 text-xs tracking-widest uppercase">
          <p>© 2024 Alankar Jewellers. All Rights Reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/20 flex items-center justify-center"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold">1</span>
      </motion.a>

      {/* Floating Instagram Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.instagram.com/alankar_jewellers_gzp/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-4 rounded-full shadow-2xl shadow-pink-500/20 flex items-center justify-center"
      >
        <Instagram size={28} />
        <motion.span 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -right-2 w-12 h-5 bg-gold-500 text-black rounded-full border border-black flex items-center justify-center text-[8px] font-bold px-1"
        >
          NEW POST
        </motion.span>
      </motion.a>
    </div>
  );
}
