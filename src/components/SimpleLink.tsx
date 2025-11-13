interface SimpleLinkProps {
  href: string;
  children: React.ReactNode;
}

const SimpleLink = ({ href, children }: SimpleLinkProps) => {
  return (
    <a
      href={href}
      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
};

export default SimpleLink;
