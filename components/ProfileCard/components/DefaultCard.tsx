interface DefaultCardProps {
  title: string;
  description: string;
}

export function DefaultCard({ title, description }: DefaultCardProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
