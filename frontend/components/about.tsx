export default function AboutSection() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="flex flex-col gap-6 pl-16 max-w-3xl">
        <h1 className="text-7xl text-black whitespace-nowrap font-bold">
          Why I built Vulpes
        </h1>
        <p className="text-4xl text-black leading-relaxed whitespace-nowrap">
          Restaurants don&apos;t fail because the food is bad. 
          <br/> 
          They fail because the demand is uneven.
        </p>
        <p className = "text-2xl text-black leading-relaxed font-medium" >
          Vulpes was built to smoothen those gaps by helping restaurants
          signal availability at the right moment, and by helping nearby
          diners discover great food they might otherwise walk past.
        </p>


      </div>
    </section>
  );
}
