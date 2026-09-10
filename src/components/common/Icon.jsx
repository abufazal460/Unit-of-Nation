import { FiShield, FiCheckCircle  } from 'react-icons/fi';

const ICON_MAP = { shield: FiShield, checkCircle: FiCheckCircle };
export function Icon({ name, className = "w-5 h-5", ...props }) {
  const IconComponent = ICON_MAP[name] ?? FiShield;
  return <IconComponent className={className} {...props} />;
}

export default Icon;
