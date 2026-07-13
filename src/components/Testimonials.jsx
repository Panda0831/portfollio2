import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Laurent',
    role: 'CEO, TechStart France',
    content: 'Fanamby Manjaka a transformé notre vision en réalité avec une créativité exceptionnelle. Son attention aux détails et ses animations fluides ont élevé notre site web au niveau supérieur.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie'
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'Directeur Marketing, InnovateLab',
    content: 'Un développeur créatif de premier plan. La qualité de son code et la beauté de ses interfaces nous ont impressionnés. Je recommande vivement ses services.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas'
  },
  {
    id: 3,
    name: 'Sophie Martin',
    role: 'Lead Designer, Creative Studio',
    content: 'Collaborer avec Fanamby Manjaka a été un véritable plaisir. Il comprend parfaitement les enjeux du design interactif et sait les traduire en code élégant.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie'
  },
  {
    id: 4,
    name: 'Alexandre Petit',
    role: 'Fondateur, WebAgency',
    content: 'Les performances techniques et la créativité visuelle de Fanamby Manjaka sont remarquables. Notre projet a été livré dans les délais avec une qualité exceptionnelle.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-tag"
        >
          Témoignages
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          Ce Que Disent Mes Clients
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="testimonials-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card glass-panel"
          >
            <div className="testimonial-quote">
              <Quote className="quote-icon" size={48} />
            </div>

            <div className="testimonial-content">
              <p className="testimonial-text">{testimonials[currentIndex].content}</p>

              <div className="testimonial-rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="star-filled" size={18} fill="currentColor" />
                ))}
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-role">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonials-controls">
          <button
            onClick={prevTestimonial}
            className="control-btn interactive"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`dot ${index === currentIndex ? 'active' : ''} interactive`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="control-btn interactive"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
