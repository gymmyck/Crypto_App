import Image from "next/image";

export default function Portfolio({ params }: { params: { portfolioId: string } }) {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {params.portfolioId}
      </main>
  );
}
