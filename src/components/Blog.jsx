import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Les meilleures pratiques pour les animations web performantes',
    excerpt: 'Découvrez comment créer des animations fluides à 60fps sans sacrifier les performances de votre application.',
    date: '15 Mars 2024',
    readTime: '5 min',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Introduction à Three.js et WebGL dans React',
    excerpt: 'Un guide complet pour commencer avec la 3D dans le web moderne en utilisant React Three Fiber.',
    date: '10 Mars 2024',
    readTime: '8 min',
    category: 'Creative Dev',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Optimiser votre site pour le SEO en 2024',
    excerpt: 'Les techniques essentielles pour améliorer votre référencement et attirer plus de visiteurs.',
    date: '5 Mars 2024',
    readTime: '6 min',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f4b704?w=800&h=400&fit=crop'
  }
];

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="blog" className="blog-section">
      <div className="section-header">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-tag"
        >
          Blog
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          Derniers Articles
        </motion.h2>
        <div className="section-line" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="blog-grid"
      >
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={cardVariants}
            className="blog-card glass-panel interactive"
          >
            <div className="blog-image-wrapper">
              <img 
                src={post.image} 
                alt={post.title}
                className="blog-image"
                loading="lazy"
              />
              <div className="blog-category">{post.category}</div>
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-meta-item">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="blog-meta-item">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <a href="#" className="blog-read-more">
                Lire l'article <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="blog-cta"
      >
        <a href="#" className="btn btn-secondary interactive">
          Voir tous les articles <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}