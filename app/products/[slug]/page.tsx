import { products } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#FAFAFA] border-b border-neutral-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-[#1E5631] transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className={`aspect-square relative rounded-3xl overflow-hidden ${product.bgColor} border border-neutral-100`}>
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover mix-blend-multiply"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-square relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-100">
                  <Image
                    src={img}
                    alt={`${product.name} detail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="text-sm font-bold tracking-wider text-neutral-500 uppercase mb-3">{product.category}</div>
              <h1 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">{product.name}</h1>
              <div className="inline-block bg-neutral-100 text-neutral-800 font-medium px-4 py-1.5 rounded-full text-sm mb-6">
                Net Weight: {product.weight}
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Why you'll love it:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="text-[#1E5631] mr-3 shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8 border-t border-neutral-200">
              <a 
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#1E5631] text-white rounded-full font-bold text-lg hover:bg-[#154024] transition-colors shadow-lg shadow-[#1E5631]/20"
              >
                <ShoppingBag className="mr-2" size={20} />
                Buy Now on Amazon
              </a>
              <p className="text-sm text-neutral-500 mt-4 text-center sm:text-left">
                You will be redirected to Amazon to complete your purchase securely.
              </p>
            </div>
          </div>
        </div>

        {/* Nutrition & Ingredients */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-neutral-200">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Ingredients</h3>
            <p className="text-lg text-neutral-700 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              {product.ingredients}
            </p>
            
            <div className="mt-8">
              <h4 className="font-semibold text-neutral-900 mb-2">Directions for use:</h4>
              <ul className="list-disc pl-5 text-neutral-600 space-y-2">
                <li>Add to smoothies, oatmeal, or yogurt for extra protein.</li>
                <li>Mix into your favorite baking recipes.</li>
                {product.category === 'Powder' && (
                  <li>Mix with water until desired consistency is achieved to make peanut butter.</li>
                )}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Nutrition Facts</h3>
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
                <span className="font-semibold text-neutral-900">Serving Size</span>
                <span className="font-medium text-neutral-700">{product.nutrition.servingSize}</span>
              </div>
              <div className="divide-y divide-neutral-100">
                <div className="px-6 py-3 flex justify-between items-center">
                  <span className="text-neutral-600">Energy</span>
                  <span className="font-medium text-neutral-900">{product.nutrition.calories}</span>
                </div>
                <div className="px-6 py-3 flex justify-between items-center">
                  <span className="text-neutral-600 font-semibold">Protein</span>
                  <span className="font-bold text-[#1E5631]">{product.nutrition.protein}</span>
                </div>
                <div className="px-6 py-3 flex justify-between items-center">
                  <span className="text-neutral-600">Total Fat</span>
                  <span className="font-medium text-neutral-900">{product.nutrition.totalFat}</span>
                </div>
                <div className="px-6 py-3 flex justify-between items-center">
                  <span className="text-neutral-600">Carbohydrates</span>
                  <span className="font-medium text-neutral-900">{product.nutrition.carbs}</span>
                </div>
                <div className="px-6 py-3 flex justify-between items-center">
                  <span className="text-neutral-600 pl-4">Total Sugars</span>
                  <span className="font-medium text-neutral-900">{product.nutrition.sugar}</span>
                </div>
                <div className="px-6 py-3 flex justify-between items-center">
                  <span className="text-neutral-600 pl-8">Added Sugars</span>
                  <span className="font-medium text-neutral-900">{product.nutrition.addedSugar}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
