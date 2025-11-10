import "./skills.scss"
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaGithub, 
  FaFigma,
  FaBootstrap,
  FaNodeJs,
  FaMobileAlt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiSupabase,
//   SiMaterialui,
  SiReactquery
} from 'react-icons/si';
import { 
  DiSass
} from 'react-icons/di';
import {
  ShadcnIcon,
  MongooseIcon,
  AxiosIcon,
  ResponsiveIcon,
  RestApiIcon,
  JwtIcon,
  Materialui
} from '../icons/SvgIcons';

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h2 className="flex center">
                Skills & Technologies
            </h2>
            
            <div className="co_skill flex center">
                {/* Frontend */}
                <div className="skill">
                    <FaHtml5 className="skill-icon" style={{ color: '#E34F26' }} />
                    <span className="skill-name">HTML5</span>
                </div>
                <div className="skill">
                    <FaCss3Alt className="skill-icon" style={{ color: '#1572B6' }} />
                    <span className="skill-name">CSS3</span>
                </div>
                <div className="skill">
                    <FaJs className="skill-icon" style={{ color: '#F7DF1E' }} />
                    <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill">
                    <SiTypescript className="skill-icon" style={{ color: '#3178C6' }} />
                    <span className="skill-name">TypeScript</span>
                </div>
                <div className="skill">
                    <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />
                    <span className="skill-name">React</span>
                </div>
                <div className="skill">
                    <SiNextdotjs className="skill-icon"  />
                    <span className="skill-name">Next.js</span>
                </div>

                {/* CSS Tools */}
                <div className="skill">
                    <DiSass className="skill-icon" style={{ color: '#CC6699' }} />
                    <span className="skill-name">Sass</span>
                </div>
                <div className="skill">
                    <FaBootstrap className="skill-icon" style={{ color: '#7952B3' }} />
                    <span className="skill-name">Bootstrap</span>
                </div>
                <div className="skill">
                    <SiTailwindcss className="skill-icon" style={{ color: '#06B6D4' }} />
                    <span className="skill-name">Tailwind</span>
                </div>
                <div className="skill">
                    <Materialui className="skill-icon" style={{ color: '#007FFF' }} />
                    <span className="skill-name">Material-UI</span>
                </div>
                <div className="skill">
                    <ShadcnIcon className="skill-icon"  />
                    <span className="skill-name">Shadcn UI</span>
                </div>

                {/* Backend */}
                <div className="skill">
                    <FaNodeJs className="skill-icon" style={{ color: '#339933' }} />
                    <span className="skill-name">Node.js</span>
                </div>
                <div className="skill">
                    <SiExpress className="skill-icon"  />
                    <span className="skill-name">Express.js</span>
                </div>
                <div className="skill">
                    <SiMongodb className="skill-icon" style={{ color: '#47A248' }} />
                    <span className="skill-name">MongoDB</span>
                </div>
                <div className="skill">
                    <MongooseIcon className="skill-icon" />
                    <span className="skill-name">Mongoose</span>
                </div>
                <div className="skill">
                    <SiSupabase className="skill-icon" style={{ color: '#3ECF8E' }} />
                    <span className="skill-name">Supabase</span>
                </div>

                {/* State Management */}
                <div className="skill">
                    <SiRedux className="skill-icon" style={{ color: '#764ABC' }} />
                    <span className="skill-name">Redux Toolkit</span>
                </div>
                <div className="skill">
                    <SiReactquery className="skill-icon" style={{ color: '#FF4154' }} />
                    <span className="skill-name">React Query</span>
                </div>

                {/* Tools */}
                <div className="skill">
                    <FaGitAlt className="skill-icon" style={{ color: '#F05032' }} />
                    <span className="skill-name">Git</span>
                </div>
                <div className="skill">
                    <FaGithub className="skill-icon"  />
                    <span className="skill-name">GitHub</span>
                </div>
             
                <div className="skill">
                    <FaFigma className="skill-icon" style={{ color: '#F24E1E' }} />
                    <span className="skill-name">Figma</span>
                </div>
                <div className="skill">
                    <SiPostman className="skill-icon" style={{ color: '#FF6C37' }} />
                    <span className="skill-name">Postman</span>
                </div>
                <div className="skill">
                    <SiVercel className="skill-icon"  />
                    <span className="skill-name">Vercel</span>
                </div>
                <div className="skill">
                    <SiNetlify className="skill-icon" style={{ color: '#00C7B7' }} />
                    <span className="skill-name">Netlify</span>
                </div>

                {/* Additional */}
                <div className="skill">
                    <JwtIcon className="skill-icon" />
                    <span className="skill-name">JWT</span>
                </div>
                <div className="skill">
                    <AxiosIcon className="skill-icon" />
                    <span className="skill-name">Axios</span>
                </div>
                <div className="skill">
                    <RestApiIcon className="skill-icon" />
                    <span className="skill-name">REST API</span>
                </div>
                <div className="skill">
                    <ResponsiveIcon className="skill-icon" />
                    <span className="skill-name">Responsive</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;