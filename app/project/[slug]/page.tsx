import { SubPageContainer } from '@/components/SubPageContainer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/projectsData';
import Link from 'next/link';

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const project = projectsData.find((p) => p.title === decodedSlug);

  if (!project) {
    return (
      <SubPageContainer title="Project Not Found" link="/project">
        <div className="p-4">
          <p>Project not found.</p>
        </div>
      </SubPageContainer>
    );
  }

  return (
    <SubPageContainer title={project.title} link="/project">
      <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row flex-1 gap-2">
        <div className="flex flex-col flex-1 min-w-full md:min-w-0 gap-4 bg-muted border border-border rounded-lg p-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-muted-foreground">설명</p>
            <p className="text-foreground break-keep pre-wrap">{project.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-muted-foreground">기술</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-background hover:bg-accent border-border">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-[2] min-w-full md:min-w-0 border border-border rounded-lg transition-colors relative">
          {/* <Image src="/bg/" alt={`${project.title} 배경 이미지`} fill className="object-contain" /> */}
          {project.link && (
            <Button
              variant="outline"
              className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-background/60 hover:bg-accent/70"
              asChild
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                자세히 보기
              </Link>
            </Button>
          )}
        </div>
      </div>
    </SubPageContainer>
  );
}
