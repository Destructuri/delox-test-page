import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground text-center">
        esta es de prueba delox
      </h1>
      <Button asChild size="lg">
        <a
          href="https://youtu.be/SU_7GdtlAFk?si=aVT8mgevYi5MsSlx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver
        </a>
      </Button>
    </main>
  );
};

export default Index;
