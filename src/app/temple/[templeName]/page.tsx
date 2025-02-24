import { notFound } from "next/navigation";

interface Props {
  params: { templeName: string };
}

export default async function TemplePage({ params }: Props) {
  const { templeName } = await params;

  if (!templeName) return notFound();

  return <h1>Temple Page for {templeName}</h1>;
}
