import { notFound } from "next/navigation";

export default async function TempleBook({ params }: { params: Promise<{ templeName: string }> }) {

      const resolvedParams = await params;
    
      if (!resolvedParams.templeName) return notFound();
    
  return <div>Temple Book for {resolvedParams.templeName}</div>;
};
