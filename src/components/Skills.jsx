import { motion } from "framer-motion";
import { LayoutGrid, Palette, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <LayoutGrid className="category-icon text-cyan" />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3 / SCSS", level: 95 },
      { name: "TailwindCSS", level: 85 },
    ],
  },
  {
    title: "Creative Coding",
    icon: <Palette className="category-icon text-purple" />,
    skills: [
      { name: "Framer Motion", level: 50 },
      { name: "Three.js / WebGL", level: 75 },
      { name: "GSAP Animation", level: 50 },
      { name: "Canvas API / SVG", level: 85 },
    ],
  },
  {
    title: "Backend & Tools",
    icon: <Terminal className="category-icon text-emerald" />,
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "Git & GitHub Workflow", level: 90 },
      { name: "SQL & PostgreSQL", level: 75 },
      { name: "Figma UI/UX Design", level: 85 },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-tag"
        >
          03. Mon Savoir-Faire
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          Compétences & Outils
        </motion.h2>
        <div className="section-line" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="skills-grid"
      >
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            variants={cardVariants}
            className="skills-category-card glass-panel"
          >
            <div className="category-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="skill-bar-fill"
                      style={{
                        background:
                          catIdx === 0
                            ? "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))"
                            : catIdx === 1
                              ? "linear-gradient(90deg, var(--accent-purple), var(--accent-cyan))"
                              : "linear-gradient(90deg, var(--accent-emerald), var(--accent-cyan))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
