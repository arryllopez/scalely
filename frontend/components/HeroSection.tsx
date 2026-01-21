export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-7xl text-black " style={{ fontFamily: 'var(--font-inter)' }}>
          Scalely
        </h1>
        <h2 className="text-2xl text-black font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}> 
          Learn what scales.
        </h2> 
        <h3 className="text-2xl text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}> 
          Curated learning for <span className = "text-primary">developers</span>. Made by <span className = "text-primary">developers.</span>
        </h3> 
      </div>
    </section>
  );
}
