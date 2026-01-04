import React from 'react';
import * as LucideIcon from 'lucide-react-native/icons';

type IconProps = {
  name: keyof typeof LucideIcon;
  size?: number;
  color?: string;
};
export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000',
}) => {
  const IconComponent = LucideIcon[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent size={size} color={color} />;
};
