export const PurityPills = ({ purity }: { purity: string }) => {
  const parts = purity.split(/(?=>)/).filter(Boolean).map((p) => p.trim());
  const pills = parts.length > 1 ? parts : [`${parts[0]} Pure`];

  return (
    <div className="absolute top-4 right-4 grid gap-2 justify-items-stretch">
      {pills.map((part) => (
        <span key={part} className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold whitespace-nowrap text-center w-full">
          {part}
        </span>
      ))}
    </div>
  );
};
