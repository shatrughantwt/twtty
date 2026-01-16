interface SectionSubheadingProps {
  title: string;
  subtitle: string;
}

function SectionSubheading({ title, subtitle }: SectionSubheadingProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
}

export { SectionSubheading };
