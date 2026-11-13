interface CurriculumCardProps {
  number: number;
  title: string;
  description: string;
}

export default function EstruturaCard({
  number,
  title,
  description,
}: CurriculumCardProps) {
  return (
    <article className="curriculum-card">
      <div className="curriculum-card-title">
        <span className="curriculum-number">{number}</span>
        <h3>{title}</h3>
      </div>

      <p>{description}</p>
    </article>
  );
}
