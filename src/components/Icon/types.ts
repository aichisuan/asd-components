import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";

interface OIconProps {
  type?: string;
  color?: string;
}

export type IconProps = FontAwesomeIconProps & OIconProps;
