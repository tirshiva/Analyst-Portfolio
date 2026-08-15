import profile from '../data/profile';

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
  lg: 'w-10 h-10'
};

const ProfileAvatar = ({ size = 'md', className = '' }) => (
  <img
    src={profile.photo.src}
    alt={profile.photo.alt}
    width={36}
    height={36}
    className={`${sizeClasses[size]} rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-supply-border/60 ${className}`}
  />
);

export default ProfileAvatar;
