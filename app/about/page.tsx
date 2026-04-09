import Image from 'next/image';

export const metadata = {
  title: 'About Us | Trubite',
  description: 'Learn more about Trubite and our commitment to healthy, delicious nutrition.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-[#FAFAFA] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight mb-6">
            Commit to be Fit.
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            At Trubite, we believe that healthy eating shouldn't mean compromising on taste. We're on a mission to provide premium, nutritious peanut products that fuel your active lifestyle.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/peanutsbg/1200/900"
                alt="Fresh roasted peanuts"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-neutral-600">
                <p>
                  Trubite was born out of a simple desire: to create a peanut butter that is both incredibly healthy and undeniably delicious. We noticed that many "healthy" options lacked flavor, while the tasty ones were packed with unhealthy fats and sugars.
                </p>
                <p>
                  We started with the humble peanut, sourcing only the finest quality nuts. Through careful roasting and innovative pressing techniques, we developed our signature Peanut Butter Powder—delivering all the protein and flavor you love, with a fraction of the fat and calories.
                </p>
                <p>
                  Today, Trubite offers a range of products designed for fitness enthusiasts, health-conscious individuals, and anyone who simply loves good peanut butter. Made with ❤️ in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1E5631] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Purity</h3>
              <p className="text-white/80">We use minimal, clean ingredients. No artificial preservatives, no hidden nasties. Just pure goodness.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Nutrition</h3>
              <p className="text-white/80">Every product is crafted to support your fitness goals, packed with protein and essential nutrients.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">😋</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Taste</h3>
              <p className="text-white/80">Healthy doesn't mean boring. We ensure every spoonful of Trubite is a delicious experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
