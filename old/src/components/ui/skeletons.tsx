import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export function PageHeroSkeleton() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] pb-14 pt-[calc(var(--space-section)*0.6)]">
      <Container>
        <Skeleton className="mb-3 h-4 w-32" />
        <Skeleton className="h-10 w-full max-w-2xl sm:h-12" />
        <Skeleton className="mt-4 h-4 w-full max-w-xl" />
        <Skeleton className="mt-2 h-4 w-2/3 max-w-md" />
      </Container>
    </section>
  );
}

export function CardGridSkeleton({ cards = 6 }: { cards?: number }) {
  return (
    <section className="section-space">
      <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: cards }).map((_, i) => (
          <div
            key={i}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
          >
            <Skeleton className="mb-4 h-10 w-10 rounded-full" />
            <Skeleton className="mb-4 h-5 w-2/3" />
            <div className="space-y-2.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="h-3.5 w-full" />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function CategoryPageSkeleton({ cards = 6 }: { cards?: number }) {
  return (
    <>
      <PageHeroSkeleton />
      <CardGridSkeleton cards={cards} />
    </>
  );
}

export function DetailPageSkeleton() {
  return (
    <>
      <PageHeroSkeleton />
      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
          <Skeleton className="h-56 w-full rounded-[var(--radius-lg)]" />
          <Skeleton className="h-56 w-full rounded-[var(--radius-lg)]" />
        </Container>
      </section>
    </>
  );
}

export function HomeSkeleton() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-12 py-[calc(var(--space-section)*0.9)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Skeleton className="mb-5 h-6 w-48 rounded-full" />
            <Skeleton className="h-12 w-full sm:h-16" />
            <Skeleton className="mt-5 h-5 w-3/4" />
            <Skeleton className="mt-3 h-4 w-full max-w-xl" />
            <div className="mt-8 flex gap-4">
              <Skeleton className="h-12 w-44 rounded-full" />
              <Skeleton className="h-12 w-44 rounded-full" />
            </div>
          </div>
          <Skeleton className="h-80 w-full rounded-[var(--radius-lg)]" />
        </Container>
      </section>
      <CardGridSkeleton cards={3} />
    </>
  );
}

export function ContactPageSkeleton() {
  return (
    <>
      <PageHeroSkeleton />
      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full rounded-[var(--radius-lg)]" />
            ))}
          </div>
          <Skeleton className="h-[420px] w-full rounded-[var(--radius-lg)]" />
        </Container>
      </section>
    </>
  );
}
