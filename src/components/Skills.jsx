import { motion } from 'framer-motion';
import {
  SiAmazonaws,
  SiAmazons3,
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiDbt,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiJupyter,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRedis,
  SiScikitlearn,
  SiSnowflake,
  SiStreamlit,
  SiTensorflow,
  SiTerraform
} from 'react-icons/si';
import profile from '../data/profile';
import { useReducedMotion } from '../utils/motion';

const logoMeta = {
  Python: { Icon: SiPython, color: '#3776AB' },
  AWS: { Icon: SiAmazonaws, color: '#FF9900' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  FastAPI: { Icon: SiFastapi, color: '#009688' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  'Apache Spark': { Icon: SiApachespark, color: '#E25A1C' },
  'Apache Airflow': { Icon: SiApacheairflow, color: '#017CEE' },
  Git: { Icon: SiGit, color: '#F05032' },
  Linux: { Icon: SiLinux, color: '#FCC624' },
  Kubernetes: { Icon: SiKubernetes, color: '#326CE5' },
  Terraform: { Icon: SiTerraform, color: '#7B42BC' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088FF' },
  PyTorch: { Icon: SiPytorch, color: '#EE4C2C' },
  TensorFlow: { Icon: SiTensorflow, color: '#FF6F00' },
  Pandas: { Icon: SiPandas, color: '#150458' },
  NumPy: { Icon: SiNumpy, color: '#013243' },
  'scikit-learn': { Icon: SiScikitlearn, color: '#F7931E' },
  Jupyter: { Icon: SiJupyter, color: '#F37626' },
  OpenAI: { Icon: SiOpenai, color: '#412991' },
  Flask: { Icon: SiFlask, color: '#000000' },
  Redis: { Icon: SiRedis, color: '#DC382D' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Snowflake: { Icon: SiSnowflake, color: '#29B5E8' },
  Streamlit: { Icon: SiStreamlit, color: '#FF4B4B' },
  'Apache Kafka': { Icon: SiApachekafka, color: '#231F20' },
  dbt: { Icon: SiDbt, color: '#FF694B' },
  'Amazon S3': { Icon: SiAmazons3, color: '#569A31' },
  Plotly: { Icon: SiPlotly, color: '#3F4F75' }
};

const allSkillNames = [
  ...new Set([
    ...Object.values(profile.skills).flat(),
    ...profile.skillLogos.rowA,
    ...profile.skillLogos.rowB
  ])
];

const SkillLogo = ({ name }) => {
  const meta = logoMeta[name];
  if (!meta) return null;
  const { Icon, color } = meta;

  return (
    <div className="flex w-[7.5rem] sm:w-36 shrink-0 flex-col items-center gap-3 px-3">
      <div className="flex h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm">
        <Icon
          className="h-8 w-8 sm:h-9 sm:w-9"
          style={{ color }}
          aria-hidden="true"
        />
      </div>
      <span className="text-[11px] sm:text-xs font-medium text-slate-500 text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

const MarqueeRow = ({ names, reverse = false, reducedMotion }) => {
  const sequence = names.length < 10 ? [...names, ...names] : names;
  const track = [...sequence, ...sequence];

  if (reducedMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-y-6 py-2">
        {names.map((name) => (
          <SkillLogo key={name} name={name} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex w-max hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {track.map((name, index) => (
          <SkillLogo key={`${name}-${index}`} name={name} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="text-supply-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">
            Technical <span className="text-supply-primary">Skills</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Languages, cloud, and libraries I use to ship AI systems and data platforms.
          </p>
        </motion.div>
      </div>

      <ul className="sr-only">
        {allSkillNames.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-slate-50/95 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-slate-50/95 to-transparent"
          aria-hidden="true"
        />

        <MarqueeRow names={profile.skillLogos.rowA} reducedMotion={reducedMotion} />
        <div className="h-4 sm:h-6" />
        <MarqueeRow
          names={profile.skillLogos.rowB}
          reverse
          reducedMotion={reducedMotion}
        />
      </div>
    </div>
  );
};

export default Skills;
