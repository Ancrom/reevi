interface IIconProps {
  name: "spinner" | "menu" | "mail";
  size?: number;
  className?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  size = 24,
  className = "",
  onClick,
}: IIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      onClick={onClick}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
}
