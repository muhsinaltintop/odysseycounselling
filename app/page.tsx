import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container as="section" className="app-section">
      <h1 className="text-4xl md:text-5xl">Odyssey Counselling</h1>
      <p className="mt-6 max-w-2xl text-base text-text-soft md:text-lg">
        Global foundation is now in place. Page sections will be added in the
        next implementation phase.
      </p>
    </Container>
  );
}
