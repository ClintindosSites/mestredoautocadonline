interface SolutionProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function Solution({ image, title, subtitle }: SolutionProps) {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center justify-center flex-col text-center">
      <div className="imgSolution  bg-[#ff0f57] p-5 w-fit rounded-full text-4xl">
        {image}
      </div>
      <h3 className="text-2xl font-bold text-[#1f1f1f]">{title}</h3>
      <p className=" text-gray-400 font-semibold">{subtitle}</p>
    </div>
  );
}
