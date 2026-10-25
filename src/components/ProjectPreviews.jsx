import { useState } from 'react';
import { motion } from 'framer-motion';
import { Blocks, Database, Server, Check, ArrowRight, ShieldCheck, RefreshCw, Cpu, HardDrive } from 'lucide-react';

// Lightweight fast SHA-256 implementation using native Web Crypto API
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function BlockchainPreview() {
  const [inputText, setInputText] = useState('Transaction_ESMIA_001');
  const [currentHash, setCurrentHash] = useState('0003b8e91d84a7e2c94f10842e1a539b70');
  const [nonce, setNonce] = useState(4821);
  const [isMining, setIsMining] = useState(false);

  const handleComputeHash = async () => {
    setIsMining(true);
    // Simulate PoW proof iteration
    await new Promise(r => setTimeout(r, 260));
    const randomNonce = Math.floor(1000 + Math.random() * 9000);
    setNonce(randomNonce);
    try {
      const realHash = await sha256(`${inputText}:${randomNonce}`);
      // Format with leading 000 for visual PoW demonstration
      setCurrentHash(`000${realHash.slice(3, 34)}`);
    } catch {
      setCurrentHash(`000${Math.random().toString(16).slice(2, 34)}`);
    }
    setIsMining(false);
  };

  return (
    <div className="preview-widget blockchain-widget">
      <div className="widget-header">
        <div className="widget-badge">
          <Blocks size={13} className="text-cyan" />
          <span>Blockchain Node · Preuve de Travail</span>
        </div>
        <div className="widget-status">
          <span className="widget-dot green" />
          <span>Consensus Actif</span>
        </div>
      </div>

      {/* Visual Blocks Stream */}
      <div className="blockchain-blocks-row">
        <div className="mini-block">
          <span className="block-num">#0 Genesis</span>
          <span className="block-hash">0000a4b7...</span>
          <span className="block-meta">Nonce: 1042</span>
        </div>

        <ArrowRight size={13} className="block-arrow" />

        <div className="mini-block">
          <span className="block-num">#1 Ledger</span>
          <span className="block-hash">0000f892...</span>
          <span className="block-meta">Nonce: 3918</span>
        </div>

        <ArrowRight size={13} className="block-arrow" />

        <motion.div
          animate={isMining ? { scale: [1, 1.03, 1] } : {}}
          transition={{ duration: 0.25 }}
          className="mini-block active-block"
        >
          <span className="block-num">#2 En cours</span>
          <span className="block-hash highlight-cyan">{currentHash.slice(0, 11)}...</span>
          <span className="block-meta">Nonce: {nonce}</span>
        </motion.div>
      </div>

      {/* Interactive Hash Simulation Box */}
      <div className="blockchain-interactive-box">
        <div className="interactive-input-row">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Payload à hacher..."
            className="mini-input"
            aria-label="Payload de bloc"
          />
          <button
            onClick={handleComputeHash}
            disabled={isMining}
            className="mini-btn-action"
            title="Recalculer le hash SHA-256"
          >
            {isMining ? (
              <RefreshCw size={12} className="spin-icon" />
            ) : (
              <span>Miner bloc</span>
            )}
          </button>
        </div>
        <div className="mini-hash-display">
          <span className="hash-label">HASH :</span>
          <span className="hash-code">{currentHash}</span>
        </div>
      </div>
    </div>
  );
}

export function SchoolManagementPreview() {
  return (
    <div className="preview-widget school-widget">
      <div className="widget-header">
        <div className="widget-badge">
          <Database size={13} className="text-cyan" />
          <span>Système Académique · Délibération S5</span>
        </div>
        <div className="widget-status">
          <ShieldCheck size={13} className="text-cyan" />
          <span>Transactions ACID</span>
        </div>
      </div>

      {/* Grade Table Preview */}
      <div className="school-table-wrapper">
        <table className="mini-grade-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Coeff</th>
              <th>Moyenne</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="module-name">Algorithmique & Données</td>
              <td>4.0</td>
              <td className="grade-val">17.25 / 20</td>
              <td><span className="pill-status success">Validé</span></td>
            </tr>
            <tr>
              <td className="module-name">Modélisation BDD & Merise</td>
              <td>3.0</td>
              <td className="grade-val">16.50 / 20</td>
              <td><span className="pill-status success">Validé</span></td>
            </tr>
            <tr>
              <td className="module-name">Génie Logiciel & Architecture</td>
              <td>3.0</td>
              <td className="grade-val">16.00 / 20</td>
              <td><span className="pill-status success">Validé</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="school-footer-summary">
        <div className="summary-stat">
          <span className="s-label">MOYENNE SEMESTRE</span>
          <span className="s-val">16.58 / 20</span>
        </div>
        <div className="summary-stat">
          <span className="s-label">MENTION</span>
          <span className="s-val text-cyan">Très Bien (Major)</span>
        </div>
        <div className="summary-stat">
          <span className="s-label">INTÉGRITÉ</span>
          <span className="s-val">PDF Certifié SHA-256</span>
        </div>
      </div>
    </div>
  );
}

export function ITAssetPreview() {
  return (
    <div className="preview-widget it-asset-widget">
      <div className="widget-header">
        <div className="widget-badge">
          <Server size={13} className="text-cyan" />
          <span>Gestion de Parc IT · 128 Machines</span>
        </div>
        <div className="widget-status">
          <Cpu size={13} className="text-cyan" />
          <span>Monitoring Actif</span>
        </div>
      </div>

      {/* Asset Items List */}
      <div className="asset-items-list">
        <div className="asset-item-row">
          <div className="asset-type-icon">
            <Server size={14} />
          </div>
          <div className="asset-info">
            <span className="asset-tag">SRV-PROD-01</span>
            <span className="asset-name">Dell PowerEdge R750 · Datacenter</span>
          </div>
          <div className="asset-metrics">
            <span className="pill-status success">Opérationnel</span>
            <span className="asset-depreciation">Amorti 40%</span>
          </div>
        </div>

        <div className="asset-item-row">
          <div className="asset-type-icon">
            <HardDrive size={14} />
          </div>
          <div className="asset-info">
            <span className="asset-tag">DEV-STATION-08</span>
            <span className="asset-name">MacBook Pro M2 Max · Pôle Dev</span>
          </div>
          <div className="asset-metrics">
            <span className="pill-status info">Assigné</span>
            <span className="asset-depreciation">Amorti 18%</span>
          </div>
        </div>
      </div>

      <div className="asset-footer-metrics">
        <div className="asset-metric-pill">
          <Check size={12} className="text-cyan" />
          <span>Audit Licences 100% à jour</span>
        </div>
        <div className="asset-metric-pill">
          <span>Tickets ouverts : 0</span>
        </div>
      </div>
    </div>
  );
}
