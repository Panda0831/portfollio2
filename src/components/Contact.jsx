import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Auto-dismiss success message
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-tag"
        >
          04. Prendre Contact
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          Démarrons Un Projet
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="contact-grid">
        {/* Contact info column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-info"
        >
          <h3 className="contact-info-title">Discutons de vos idées</h3>
          <p className="contact-info-desc">
            Je suis disponible pour des missions en freelance, des collaborations créatives ou pour échanger sur vos futurs projets web. 
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <Mail className="detail-icon text-cyan" />
              <div>
                <h4>E-mail</h4>
                <a href="mailto:denver@example.com" className="interactive">denver@example.com</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <MapPin className="detail-icon text-purple" />
              <div>
                <h4>Localisation</h4>
                <p>Lyon, France (Disponible en distanciel / hybride)</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <Globe className="detail-icon text-emerald" />
              <div>
                <h4>Réseaux Sociaux</h4>
                <p>Retrouvez-moi sur Twitter, LinkedIn et GitHub</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact form column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-form-container glass-panel"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="contact-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="name" className="form-label">Votre Nom</label>
                  <div className="input-glow-bar" />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">Votre E-mail</label>
                  <div className="input-glow-bar" />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="message" className="form-label">Votre Message</label>
                  <div className="input-glow-bar" />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit interactive"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      Envoyer le message <Send size={16} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="contact-success"
              >
                <CheckCircle size={56} className="text-emerald success-icon" />
                <h3>Message Envoyé !</h3>
                <p>Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
