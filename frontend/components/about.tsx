export default function AboutSection() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="flex flex-col gap-6 pl-16 max-w-3xl">
        <h1 className="text-4xl text-black">
          Learning isn&apos;t one-size-fits-all.
        </h1>

        <p className="text-xl text-primary font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          What works for one developer can be useless for another.
        </p>

        <p className="text-lg text-black leading-relaxed">
          Some developers learn best through hands-on projects. Others need deep explanations, visuals, or repetition.
          Yet most learning resources are treated as universally good or bad.
        </p>

        <p className="text-lg text-black leading-relaxed">
          Scalely surfaces resources that actually help, organized and refined by developers around the world.
          This makes it easier to find what works for you and stop wasting time on what doesn&apos;t.
        </p>
      </div>
    </section>
  );
}
