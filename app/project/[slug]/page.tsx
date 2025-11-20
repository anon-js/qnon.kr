import ProjectDetailWrapper from '@/components/ProjectDetailWrapper';

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return <ProjectDetailWrapper slug={slug} />;
}
