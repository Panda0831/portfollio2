import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, GitBranch, Calendar, ArrowUpRight } from 'lucide-react';

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Proposition de Stage', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'fanambymanjaka9@gmail.com';
  const phoneNumber = '038 72 143 62';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(phoneNumber.replace(/\s+/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate responsive submission
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: 'Proposition de Stage', message: '' });

    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-head-editorial">
          <div className="section-kicker">
            <span className="kicker-num">06</span>
            <span className="kicker-title">Échange & Collaboration</span>
          </div>
          <h2 className="section-main-title">
            Prenons contact pour concrétiser vos projets d'ingénierie.
          </h2>
          <p className="section-lead-desc">
            Vous recherchez un étudiant ingénieur rigoureux pour renforcer votre équipe technique ? 
            Je suis à votre écoute pour échanger sur vos défis technologiques et vos opportunités de stage.
          </p>
        </div>

        {/* High-Impact Availability Banner */}
        <div className="contact-internship-banner glass-panel">
          <div className="banner-pulse-wrapper">
            <span className="pulse-circle" />
            <span className="pulse-text">STAGE DE FIN D'ÉTUDES · 6 MOIS</span>
          </div>
          <h3 className="banner-title">
            Disponible pour un stage de fin d'études de 6 mois à partir du 30 décembre 2026
          </h3>
          <p className="banner-desc">
            Spécialisation : <strong>Fullstack & Data Engineering</strong> · 
            Modalités : Présentiel, Hybride ou Télétravail complet (Madagascar ou International).
          </p>
        </div>

        {/* Contact Grid: Info + Form */}
        <div className="contact-content-grid">
          
          {/* Left Column: Direct Coordinates */}
          <div className="contact-direct-info">
            <div className="contact-card-editorial glass-panel">
              <span className="card-kicker">Coordonnées directes</span>
              <h4 className="card-title">Canaux de communication</h4>
              
              <div className="contact-links-list">
                {/* Email Item */}
                <div className="contact-item-row interactive">
                  <div className="item-icon-box"><Mail size={18} className="text-cyan" /></div>
                  <div className="item-text-box">
                    <span className="item-label">ADRESSE COURRIEL</span>
                    <a href={`mailto:${emailAddress}`} className="item-value">{emailAddress}</a>
                  </div>
                  <button onClick={handleCopyEmail} className="copy-action-btn interactive" title="Copier l'email">
                    {copiedEmail ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="contact-item-row interactive">
                  <div className="item-icon-box"><Phone size={18} className="text-cyan" /></div>
                  <div className="item-text-box">
                    <span className="item-label">TÉLÉPHONE</span>
                    <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="item-value">{phoneNumber}</a>
                  </div>
                  <button onClick={handleCopyPhone} className="copy-action-btn interactive" title="Copier le numéro">
                    {copiedPhone ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-item-row">
                  <div className="item-icon-box"><MapPin size={18} className="text-cyan" /></div>
                  <div className="item-text-box">
                    <span className="item-label">LOCALISATION GÉOGRAPHIQUE</span>
                    <span className="item-value static">IAV 214 H, Iavoloha — Antananarivo, Madagascar</span>
                    <span className="item-sub">Fuseau horaire UTC+3 (EAT) · Mobilité internationale étudiée</span>
                  </div>
                </div>

                {/* Calendar availability item */}
                <div className="contact-item-row">
                  <div className="item-icon-box"><Calendar size={18} className="text-cyan" /></div>
                  <div className="item-text-box">
                    <span className="item-label">DATE DE DÉPART EN ENTREPRISE</span>
                    <span className="item-value static highlight-cyan">30 décembre 2026 (Durée : 6 mois)</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles Strip */}
              <div className="contact-socials-block">
                <span className="socials-kicker">PROFILS EN LIGNE //</span>
                <div className="socials-buttons-row">
                  <a
                    href="https://github.com/Panda0831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-btn interactive"
                  >
                    <GitBranch size={16} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/manjaka-fanamby-0365b52ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-btn interactive"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-panel">
              <span className="card-kicker">Message direct</span>
              <h4 className="card-title">Formulaire de contact direct</h4>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="swiss-contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name" className="form-label">
                          Votre Nom & Entreprise <span className="req">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: Jean Dupont (TechCorp)"
                          className="form-input interactive"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">
                          Votre E-mail Professionnel <span className="req">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jean.dupont@entreprise.com"
                          className="form-input interactive"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-subject" className="form-label">
                        Objet de votre message
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-input form-select interactive"
                      >
                        <option value="Proposition de Stage">Proposition de Stage de Fin d'Études (6 mois)</option>
                        <option value="Entretien Préalable">Entretien préalable / Échange RH</option>
                        <option value="Collaboration Projet">Discussion technique / Projet logiciel</option>
                        <option value="Autre Demande">Autre demande</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">
                        Votre Message <span className="req">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Présentez brièvement votre entreprise, les missions du stage ou vos questions..."
                        className="form-input form-textarea interactive"
                      />
                    </div>

                    <div className="form-footer-action">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-swiss-primary btn-submit interactive"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-dot" />
                            <span>Transmission en cours...</span>
                          </>
                        ) : (
                          <>
                            <span>Transmettre mon message</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>

                      <span className="form-privacy-note">
                        Je réponds en général sous 24 à 48 heures ouvrées.
                      </span>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="form-success-box"
                  >
                    <CheckCircle size={48} className="text-cyan success-icon" />
                    <h4 className="success-heading">Message bien transmis !</h4>
                    <p className="success-text">
                      Merci pour votre intérêt. J'ai bien reçu votre message et je reviendrai vers vous très rapidement.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-swiss-secondary interactive"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
