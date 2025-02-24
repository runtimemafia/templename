import { notFound } from "next/navigation";

export default async function TemplePage({ params }: { params: Promise<{ templeName: string }> }) {
  const resolvedParams = await params;

  if (!resolvedParams.templeName) return notFound();

  return <h1>Temple Page for {resolvedParams.templeName}</h1>;
}
