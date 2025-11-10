import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

import SkeletonCard from '../main/loading/SkeletonCard';
import myProjects from "../../projects/projects";
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { swiperConfig, motionConfig } from './sliderConfig';

import './swiper_pro.scss';

export default function Slider() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMoreClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderProjects = () => (
    <main className="slider-main"  id="Projects">
              <h2 className="flex  center">
            My  Project {"</>"}
                </h2>
      <Swiper 
     {...swiperConfig}
      
      >
        {myProjects.map((project, index) => (
           
          <SwiperSlide key={project.id + "_"+ index }>
            {/* <div style={{width:"100%",height:"100px",backgroundColor:"red"}}></div> */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ 
                ...motionConfig.transition,
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

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );

  const renderSkeleton = () => (
    <Swiper {...swiperConfig} >
      {[1, 2, 3, 4].map((item) => (
        <SwiperSlide key={item}>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={motionConfig.transition}
          >
            <SkeletonCard />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return myProjects.length > 0 ? renderProjects() : renderSkeleton();
}