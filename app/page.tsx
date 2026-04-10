// trubitev1-main/app/page.tsx

import { products } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trubitev1/images/creamy-1kg/Peanutbackground~2.jpg"
            alt="Peanuts background"
            fill
            className="object-cover opacity-[0.15]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAFA]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#1E5631]/10 text-[#1E5631] text-sm font-semibold tracking-wide mb-6">
            COMMIT TO BE FIT
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter mb-6 max-w-4xl mx-auto leading-[1.1]">
            Pure Nutrition, <br className="hidden md:block" />
            <span className="text-[#1E5631]">Uncompromised Taste.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto font-medium">
            Experience the goodness of 100% roasted peanuts. High in protein, low in fat, and perfectly crafted for your healthy lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products" 
              className="w-full sm:w-auto px-8 py-4 bg-[#1E5631] text-white rounded-full font-semibold hover:bg-[#154024] transition-all flex items-center justify-center gap-2"
            >
              Shop Our Products <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-full font-semibold hover:bg-neutral-50 transition-all flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Why Choose Trubite?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Experience Trubite, Experience Goodness. We believe in keeping things simple, natural, and incredibly delicious.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'High in Protein', desc: 'Packed with plant-based protein to fuel your day and workouts.' },
              { title: 'Gluten Free & Vegan', desc: 'Perfect for various dietary needs without compromising on taste.' },
              { title: 'Zero Cholesterol', desc: 'Heart-healthy goodness in every single bite.' },
              { title: 'No Added Preservatives', desc: 'Clean ingredients. Just roasted peanuts and natural goodness.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <CheckCircle2 className="text-[#1E5631] mb-4" size={32} />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Our Products</h2>
              <p className="text-neutral-600 max-w-xl">Discover our range of premium peanut butter powders and natural creamy peanut butter.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-[#1E5631] font-semibold hover:underline">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group block">
                <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  
                  {/* Clean white framing applied inside the colored section */}
                  <div className={`aspect-[4/5] relative p-6 ${product.bgColor}`}>
                    <div className="relative w-full h-full bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold tracking-wider text-neutral-500 uppercase mb-2">{product.category}</div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 text-sm line-clamp-2 mb-4">{product.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-neutral-900">{product.weight}</span>
                      <span className="text-[#1E5631] font-semibold flex items-center gap-1">
                        Details <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 text-[#1E5631] font-semibold hover:underline">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#1E5631] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to upgrade your nutrition?</h2>
          <p className="text-lg text-[#1E5631]/20 text-white/80 mb-10 max-w-2xl mx-auto">
            Our products are available exclusively on Amazon for fast, reliable delivery straight to your door.
          </p>
          <a 
            href="https://amazon.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E5631] rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors shadow-lg"
          >
            Shop on Amazon
          </a>
        </div>
      </section>
    </div>
  );
                              }
