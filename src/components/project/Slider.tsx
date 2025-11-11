import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import myProjects from "../../projects/projects";
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { swiperConfig } from './sliderConfig';
import './swiper_pro.scss';

export default function Slider() {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSwitchingLang, setIsSwitchingLang] = useState(false);

  useEffect(() => {
    setIsSwitchingLang(true);
    const timer = setTimeout(() => setIsSwitchingLang(false), 600);
    return () => clearTimeout(timer);
  }, [i18n.language]);

  const handleMoreClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="slider-main" id="Projects">
      <h2 className="flex center">{t("projects")}</h2>

      <Swiper {...swiperConfig} key={i18n.language}>
        {myProjects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
            
              // initial={!isSwitchingLang ? { opacity: 0, y: 20, scale: 0.9 } : false}
              // whileInView={!isSwitchingLang ? { opacity: 1, y: 0, scale: 1 } : false}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                mass: 0.8,
                delay: index * 0.1
              }}
            >
              <ProjectCard
                project={project}
                onMoreClick={handleMoreClick}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
