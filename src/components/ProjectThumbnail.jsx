const CATEGORY_GRADIENTS = {
  'AI / Backend Engineering': 'from-blue-500 via-indigo-500 to-violet-500',
  'Data Engineering': 'from-sky-500 via-blue-500 to-indigo-500',
  'Machine Learning': 'from-blue-500 via-violet-500 to-purple-500',
  'Backend Engineering': 'from-slate-500 via-blue-500 to-indigo-500',
  'MLOps & Cloud': 'from-blue-500 via-sky-400 to-indigo-500',
  default: 'from-blue-500 via-indigo-500 to-violet-500'
};

const ProjectThumbnail = ({ title, category, image, className = '' }) => {
  const gradient = CATEGORY_GRADIENTS[category] || CATEGORY_GRADIENTS.default;
  const initials = title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  if (image) {
    return (
      <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
        <img
          src={image}
          alt={`${title} project thumbnail`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={`${title} project thumbnail`}
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-white/30 tracking-widest">{initials}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

export default ProjectThumbnail;
