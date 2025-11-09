import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { RiCodeSSlashFill } from "react-icons/ri";

import { type IconBaseProps } from "react-icons";

const iconMap = {
  code: RiCodeSSlashFill,
  externalLink: FiExternalLink,
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

type IconProps = {
  icon: keyof typeof iconMap;
} & IconBaseProps;

export function Icon({ icon, ...iconProps }: IconProps) {
  const Icon = iconMap[icon];
  return <Icon {...iconProps} />;
}
