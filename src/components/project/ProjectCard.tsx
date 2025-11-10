import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  description: string;
  screenshot: string;
  technologies: string[];
  category: string;
  netlify?: string;
  github?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  onMoreClick: (project: Project) => void;
}

export default function ProjectCard({ project, onMoreClick }: ProjectCardProps) {
  return (
    <motion.article 
      className="project-card"
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="card-image-container">
        <div className="card-image">
          <img
            src={project.screenshot}
            alt={project.name}
            loading="lazy"
          />
          <div className="image-overlay" />
        </div>
      </div>
      
      <div className="card-content">
        <motion.h3 
          className="project-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {project.name}
        </motion.h3>
        
        <motion.p 
          className="project-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.description.length > 100 
            ? `${project.description.substring(0, 100)}...` 
            : project.description
          }
        </motion.p>

        {/* Technologies Preview */}
        <div className="tech-preview">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-preview-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-more">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
      
      <div className="card-actions">
        <div className="action-icons">
          {project.netlify && (
            <motion.a
              href={project.netlify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} live demo`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="icon-link" />
            </motion.a>
          )}
          {project.github && (
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source code`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="icon-github-square" />
            </motion.a>
          )}
        </div>
        
        <motion.button 
          className="more-button"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          onClick={() => onMoreClick(project)}
        >
          <span>more</span>
          <span className="icon-arrow-right" />
        </motion.button>
      </div>
    </motion.article>
  );
}