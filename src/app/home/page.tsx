import Image from "next/image";

export default function Portfolio({ params }: { params: { portfolioId: string } }) {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <p className="flex flex-col gap-8 row-start-2 items-center sm:items-start">Home</p>
        </div>
        
        {params.portfolioId}
      </main>
  );
} 