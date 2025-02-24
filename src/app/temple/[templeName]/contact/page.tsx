import { notFound } from "next/navigation";

export default async function TempleContact({ params }: { params: Promise<{ templeName: string }> }) {

      const resolvedParams = await params;
    
      if (!resolvedParams.templeName) return notFound();
    
  return <div>Temple Contact for {resolvedParams.templeName}</div>;
};
