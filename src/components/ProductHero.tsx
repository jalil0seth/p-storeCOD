import React from 'react';
import { Play, Star } from 'lucide-react';

export default function ProductHero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden" dir="rtl">
      <div className="max-w-[80rem] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-600">(4.8/5 من 2,394 تقييم)</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              زيت أرغان عضوي فاخر
            </h1>
            
            <p className="text-xl text-gray-600">
              زيت الأرغان النقي 100% معصور على البارد، غني بفيتامين E ومضادات الأكسدة. 
              مثالي للبشرة والشعر والأظافر.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-full px-6 py-2 text-sm font-medium text-gray-600">
                ✨ 100% عضوي
              </div>
              <div className="bg-white rounded-full px-6 py-2 text-sm font-medium text-gray-600">
                🌿 معصور على البارد
              </div>
              <div className="bg-white rounded-full px-6 py-2 text-sm font-medium text-gray-600">
                🇲🇦 صنع في المغرب
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=2000"
              alt="زيت أرغان عضوي"
              className="w-full h-full object-cover"
            />
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group cursor-pointer">
              <button className="bg-white bg-opacity-90 rounded-full p-4 transform transition-transform group-hover:scale-110">
                <Play size={24} className="text-emerald-600" />
              </button>
            </div>

            {/* Video Player */}
            <video 
              className="absolute inset-0 w-full h-full object-cover hidden"
              poster="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=2000"
              controls
            >
              <source src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#B76E79] rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
}