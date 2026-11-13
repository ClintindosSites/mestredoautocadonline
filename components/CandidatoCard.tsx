interface CardProps {
  title: string;
  subtitle: string;
}

export default function CandidatoCard({ title, subtitle }: CardProps) {
  return (
    <div className="bg-[#1f1f1f] text-white p-5 border-6 rounded-2xl border-l-[#ff0f57] border-r-[#ff0f57] ">
      <h3 className="text-[#ff0f57] font-bold uppercase ">{title}</h3>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
}
