import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, ShieldCheck, Database, Layers, Play, Check } from 'lucide-react';

const codeSnippets = {
  blockchain: `# blockchain_core.py — Preuve de travail & Hachage SHA-256
import hashlib, time

class Block:
    def __init__(self, index, prev_hash, data, difficulty=3):
        self.index = index
        self.prev_hash = prev_hash
        self.timestamp = int(time.time())
        self.data = data
        self.nonce = 0
        self.hash = self.mine(difficulty)

    def compute_hash(self):
        payload = f"{self.index}{self.prev_hash}{self.timestamp}{self.data}{self.nonce}"
        return hashlib.sha256(payload.encode()).hexdigest()

    def mine(self, difficulty):
        target = "0" * difficulty
        while not self.compute_hash().startswith(target):
            self.nonce += 1
        return self.compute_hash()`,

  gradeservice: `// GradeService.java — Délibérations & Transactions ACID
@Service
@Transactional(readOnly = true)
public class GradeService {
    private final StudentRepository studentRepo;

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public SemesterResult computeSemesterAverage(Long studentId, Long semId) {
        List<Grade> grades = studentRepo.findGradesBySemester(studentId, semId);
        double weightedSum = grades.stream()
            .mapToDouble(g -> g.getValue() * g.getCoefficient())
            .sum();
        double totalCoeff = grades.stream().mapToDouble(Grade::getCoefficient).sum();
        
        double average = Math.round((weightedSum / totalCoeff) * 100.0) / 100.0;
        return new SemesterResult(studentId, average, average >= 10.0);
    }
}`,

  architecture: `// architecture.config.ts — Modélisation des flux
export const SystemTopology = {
  client: 'React 19 + TypeScript (Client UI)',
  apiGateway: {
    framework: 'Django REST / Spring Boot',
    security: 'API REST + validation stricte des données',
    validation: 'Bean Validation / Django DRF'
  },
  persistence: {
    primary: 'PostgreSQL (Schéma Merise normalisé 3NF)',
    guarantees: 'ACID Strict'
  }
};`
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('blockchain');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [miningStatus, setMiningStatus] = useState(null);
  const [isMining, setIsMining] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fanambymanjaka9@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSimulateMine = () => {
    setIsMining(true);
    setMiningStatus({ state: 'mining', message: 'Minage du bloc en cours...' });

    setTimeout(() => {
      const randomNonce = Math.floor(3200 + Math.random() * 5800);
      const randomHash = `000${Math.random().toString(16).slice(2, 10)}${Math.random().toString(16).slice(2, 8)}`;
      setMiningStatus({
        state: 'success',
        nonce: randomNonce,
        hash: randomHash,
        message: `✓ Bloc #3 miné ! Nonce: ${randomNonce} · Hash: ${randomHash}`
      });
      setIsMining(false);
    }, 450);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Top Editorial Status Line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-status-strip"
        >
          <div className="hero-status-pill">
            <span className="hero-status-dot" />
            <span className="hero-status-text">
              Recherche de stage de fin d'études de 6 mois · Dès le 30 décembre 2026
            </span>
          </div>
          <div className="hero-location-tag">
            <span className="meta-dim">LOCALISATION //</span> IAV 214 H, Iavoloha — Antananarivo
          </div>
        </motion.div>

        {/* Hero Grid: Confident Typography + Engineering Console */}
        <div className="hero-main-grid">
          
          {/* Left Column: Authentic Human Pitch & Typography */}
          <div className="hero-typo-block">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-kicker-badge">
                <span className="badge-bullet" />
                <span>ÉTUDIANT EN GÉNIE LOGICIEL · CLASSÉ 1ER AU S4</span>
              </div>
              <h1 className="hero-name">
                Fanamby<br />
                <span className="hero-name-accent">Manjaka</span>
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hero-tagline"
            >
              Fullstack & Data Engineering
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hero-lead-text"
            >
              Étudiant en 3ème année de Licence Génie Logiciel à l’<strong>ESMIA Innovation</strong> (Antanimena), classé <strong>1er au semestre 4</strong> (15.49/20).
              Solide maîtrise des technologies web et mobiles, du backend (Java/Spring Boot, Python, TypeScript)
              aux pipelines de données — du schéma relationnel jusqu’à l’interface utilisateur.
            </motion.p>

            {/* Spec Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="hero-spec-matrix"
            >
              <div className="spec-item">
                <span className="spec-label">FORMATION</span>
                <span className="spec-value">Licence Génie Logiciel – SIO</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">RANG PROMOTION</span>
                <span className="spec-value highlight-cyan">1er au S4 (15.49 / 20)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">DURÉE SOUHAITÉE</span>
                <span className="spec-value">6 Mois (Fin d'études)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">DISPONIBILITÉ</span>
                <span className="spec-value highlight-cyan">30 décembre 2026</span>
              </div>
            </motion.div>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="hero-actions"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="btn-swiss-primary interactive"
              >
                <span>Explorer les Projets</span>
                <ArrowDown size={15} />
              </button>

              <button
                onClick={() => handleScroll('academic')}
                className="btn-swiss-secondary interactive"
              >
                <span>Trajectoire & Notes</span>
                <ArrowUpRight size={15} />
              </button>

              <button
                onClick={handleCopyEmail}
                className="btn-swiss-ghost interactive"
                title="Copier l'adresse email"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-cyan" />
                    <span>Email copié !</span>
                  </>
                ) : (
                  <span>Copier Email</span>
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Column: Code & Architecture Console (Authentic Engineering Preview) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero-console-wrapper"
          >
            <div className="hero-console glass-panel">
              {/* Console Header */}
              <div className="console-header">
                <div className="console-tabs">
                  <button
                    onClick={() => setActiveTab('blockchain')}
                    className={`console-tab interactive ${activeTab === 'blockchain' ? 'active' : ''}`}
                  >
                    <Terminal size={13} className="tab-icon" />
                    <span>blockchain_core.py</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('gradeservice')}
                    className={`console-tab interactive ${activeTab === 'gradeservice' ? 'active' : ''}`}
                  >
                    <Database size={13} className="tab-icon" />
                    <span>GradeService.java</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`console-tab interactive ${activeTab === 'architecture' ? 'active' : ''}`}
                  >
                    <Layers size={13} className="tab-icon" />
                    <span>topology.ts</span>
                  </button>
                </div>

                <div className="console-meta-tag">
                  <span className="dot-active" />
                  <span>SYNTAXE VALIDÉE</span>
                </div>
              </div>

              {/* Console Body */}
              <div className="console-code-body">
                <pre>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Interactive Console Action Bar */}
              <div className="console-action-bar">
                {activeTab === 'blockchain' && (
                  <div className="console-live-action">
                    <button
                      onClick={handleSimulateMine}
                      disabled={isMining}
                      className="console-btn-run interactive"
                    >
                      <Play size={12} className={isMining ? 'spin-icon' : ''} />
                      <span>{isMining ? 'Calcul en cours...' : 'Tester le minage de bloc'}</span>
                    </button>
                    {miningStatus && (
                      <span className={`console-output-pill ${miningStatus.state}`}>
                        {miningStatus.message}
                      </span>
                    )}
                  </div>
                )}
                {activeTab === 'gradeservice' && (
                  <div className="console-live-info">
                    <span className="info-tag">Spring Boot 3 · Isolation SERIALIZABLE · Modèle Merise</span>
                  </div>
                )}
                {activeTab === 'architecture' && (
                  <div className="console-live-info">
                    <span className="info-tag">Architecture 3-tiers découplée · Respect strict des principes ACID</span>
                  </div>
                )}
              </div>

              {/* Console Status Footer */}
              <div className="console-footer">
                <div className="console-footer-col">
                  <span className="cf-label">ENVIRONNEMENT</span>
                  <span className="cf-val">Python 3.11 / Java 17</span>
                </div>
                <div className="console-footer-col">
                  <span className="cf-label">APPROCHE</span>
                  <span className="cf-val">Clean Architecture & Merise</span>
                </div>
                <div className="console-footer-col">
                  <span className="cf-label">INTÉGRITÉ</span>
                  <span className="cf-val text-cyan">Tests unitaires PyTest</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar below console */}
            <div className="console-key-facts">
              <div className="fact-item">
                <ShieldCheck size={15} className="fact-icon" />
                <span>Certification DELF B2 (obtenu oct. 2026)</span>
              </div>
              <div className="fact-item">
                <Terminal size={15} className="fact-icon" />
                <span>Python Essentials 1 & 2 · IBM Z Explorer (en cours)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
