export default function CartIcon({
  size = 24,
  title = 'Shopping cart',
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number; title?: string }) {
  const titleId = props.id ? `${props.id}-title` : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      <path d="M3 5h2l1.5 9H18a3 3 0 0 0 2.91-2.28L22 6.5A1 1 0 0 0 21 5H6.3l-.3-1a1 1 0 0 0-1-.7H3zM8.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}
