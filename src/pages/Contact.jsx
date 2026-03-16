// src/pages/Contact.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo, faqs } from "../data/portfolioData";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMessageCircle,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

// ========================================
// EMAILJS CONFIG
// ========================================
const EMAILJS_SERVICE_ID = "service_rj2855v";
const NOTIFY_TEMPLATE_ID = "template_58ufk0u";
const WELCOME_TEMPLATE_ID = "template_uy0g12s";
const EMAILJS_PUBLIC_KEY = "EagOiXT3VHg0mrEcL";

// ========================================
// FRAMER MOTION VARIANTS
// ========================================
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ========================================
// DECORATIVE BACKGROUND COMPONENT
// ========================================
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gradient blobs */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(ellipse, #eab308 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-400"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${8 + i * 9}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.25 + (i % 3) * 0.15,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ========================================
// CONTACT FORM COMPONENT
// ========================================
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const templateParams = {
      name: formState.name,
      email: formState.email,
      title: formState.subject || "No Subject",
      message: formState.message,
    };

    try {
      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, WELCOME_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY),
        emailjs.send(EMAILJS_SERVICE_ID, NOTIFY_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY),
      ]);

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3"
          >
            <FiCheckCircle className="text-2xl text-emerald-400" />
            <div>
              <p className="font-semibold text-emerald-400">Success!</p>
              <p className="text-sm text-emerald-300">
                Your message has been sent successfully.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Your Name <span className="text-red-400">*</span>
          </label>
          <motion.input
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-4 bg-slate-900 border rounded-xl outline-none text-slate-100 placeholder-slate-500 transition-all ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-slate-700 focus:border-violet-500"
            }`}
            whileFocus={{
              boxShadow: errors.name
                ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                : "0 0 0 4px rgba(139, 92, 246, 0.1)",
            }}
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </motion.div>

        {/* EMAIL */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Your Email <span className="text-red-400">*</span>
          </label>
          <motion.input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-4 bg-slate-900 border rounded-xl outline-none text-slate-100 placeholder-slate-500 transition-all ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-slate-700 focus:border-violet-500"
            }`}
            whileFocus={{
              boxShadow: errors.email
                ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                : "0 0 0 4px rgba(139, 92, 246, 0.1)",
            }}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </motion.div>

        {/* SUBJECT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Subject
          </label>
          <motion.input
            name="subject"
            type="text"
            value={formState.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className="w-full px-4 py-4 bg-slate-900 border border-slate-700 rounded-xl outline-none text-slate-100 placeholder-slate-500 focus:border-violet-500 transition-all"
            whileFocus={{ boxShadow: "0 0 0 4px rgba(139, 92, 246, 0.1)" }}
          />
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Your Message <span className="text-red-400">*</span>
          </label>
          <motion.textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows="6"
            className={`w-full px-4 py-4 bg-slate-900 border rounded-xl outline-none text-slate-100 placeholder-slate-500 resize-none transition-all ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-slate-700 focus:border-violet-500"
            }`}
            whileFocus={{
              boxShadow: errors.message
                ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                : "0 0 0 4px rgba(139, 92, 246, 0.1)",
            }}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.message}
            </motion.p>
          )}
          <p className="text-xs text-slate-500 mt-2">
            {formState.message.length} characters
          </p>
        </motion.div>

        {/* SUBMIT */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
            isSubmitting
              ? "bg-slate-700 cursor-not-allowed"
              : "bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-violet-500/30"
          }`}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              <FiSend />
              Send Message
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}

// ========================================
// FAQ ACCORDION COMPONENT
// ========================================
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-slate-200 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-violet-400 flex-shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ========================================
// MAIN CONTACT PAGE COMPONENT
// ========================================
export default function Contact() {
  return (
    <div className="contact-page bg-slate-950 text-slate-100">
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="contact-hero min-h-[70vh] relative flex items-center overflow-hidden pt-20">
        {/* Decorative Background */}
        <HeroBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white border rounded-full text-violet-400 text-sm font-medium mb-6 animate-glow"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6 uppercase"
            >
              Let's Build Something{" "}
              <span className="text-yellow-500">Amazing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto"
            >
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's start a conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. CONTACT INFO + FORM ==================== */}
      <section className="contact-content py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* LEFT: Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div variants={item}>
                <h2 className="text-3xl font-bold mb-4 text-green-500">
                  Contact Information
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  variants={item}
                  href={`mailto:${contactInfo.email.primary}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-950/50 backdrop-blur border border-slate-800 rounded-xl hover:border-violet-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center group-hover:bg-violet-500/20 transition-all">
                    <FiMail className="text-xl text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-semibold text-slate-200">
                      {contactInfo.email.primary}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  variants={item}
                  href={`tel:${contactInfo.phone.number}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-950/50 backdrop-blur border border-slate-800 rounded-xl hover:border-violet-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                    <FaWhatsapp className="text-xl text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Whatsapp</p>
                    <p className="font-semibold text-slate-200">
                      {contactInfo.phone.number}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  variants={item}
                  href={contactInfo.upwork.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-950/50 backdrop-blur border border-slate-800 rounded-xl hover:border-violet-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                    <FaUpwork className="text-xl text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Upwork</p>
                    <p className="font-semibold text-slate-200">
                      {contactInfo.upwork.label}
                    </p>
                  </div>
                </motion.a>
              </div>

              {/* Social Links */}
              <motion.div variants={item}>
                <h3 className="text-lg font-semibold text-purple-500 mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href={contactInfo.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center hover:border-violet-500/50 hover:bg-slate-900 transition-all animate-glow"
                  >
                    <FiGithub className="text-xl" />
                  </motion.a>

                  <motion.a
                    href={contactInfo.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center hover:border-violet-500/50 hover:bg-slate-900 transition-all animate-glow"
                  >
                    <FiLinkedin className="text-xl" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Quick Response Badge */}
              <motion.div
                variants={item}
                className="p-6 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/30 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FiMessageCircle className="text-2xl text-violet-400" />
                  <h4 className="font-semibold text-lg">Quick Response</h4>
                </div>
                <p className="text-sm text-slate-400">
                  I aim to respond to all inquiries within 24 hours during
                  business days.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-950/50 backdrop-blur border border-slate-800 rounded-2xl p-8 lg:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    Send Me a Message
                  </h2>
                  <p className="text-slate-400">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. FAQ SECTION ==================== */}
      <section className="faq py-24 bg-slate-950">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white border rounded-full text-violet-400 text-sm font-medium mb-4 animate-glow">
              FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 uppercase">
              Frequently Asked{" "}
              <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about working with me.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}