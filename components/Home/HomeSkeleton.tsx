import { Skeleton } from '@/components/ui/skeleton';

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col justify-between w-full h-full p-4 md:p-8">
      <div className="flex flex-1 flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
        <div className="w-full flex flex-col justify-center gap-4">
          <div className="flex flex-row items-center gap-4">
            <Skeleton className="size-20 rounded-full border" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <div className="flex-1 pl-2 space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>
        <div className="max-md:w-full flex flex-row md:flex-col gap-2 items-center md:items-stretch">
          <Skeleton className="h-10 flex-1 md:w-24" />
          <Skeleton className="h-10 flex-1 md:w-24" />
          <Skeleton className="h-10 flex-1 md:w-24" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <hr />
        <div className="flex flex-row gap-2 items-center justify-between">
          <Skeleton className="h-6 w-16 mr-4" />
          <div className="flex flex-row gap-2 items-center">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
