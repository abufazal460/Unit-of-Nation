import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa6';
import * as HiIcons from 'react-icons/hi2';
import * as LuIcons from 'react-icons/lu';

export function Icon({ name, className = "w-5 h-5", ...props }) {
  if (!name) return null;

  let IconComponent = FiIcons[name] || FaIcons[name] || HiIcons[name] || LuIcons[name];

  if (!IconComponent) {
    IconComponent = FiIcons.FiShield;
  }

  return <IconComponent className={className} {...props} />;
}

export default Icon;