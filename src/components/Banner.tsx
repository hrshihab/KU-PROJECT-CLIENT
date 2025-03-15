import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative min-h-[600px] h-screen w-full">
      {/* Background image with proper next/image implementation */}
      <div className="absolute inset-0">
        <Image
          src="/banner-bg.jpg" // Make sure this image exists in your public folder
          alt="University Campus"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      {/* Content overlay - Changed positioning and spacing */}
      <div className="relative z-10 w-full h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="h-full flex items-center"> {/* Changed to items-center */}
            {/* Main heading - Using relative units */}
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-16">
                University for
                <br />
                Tomorrow
              </h1>

              {/* Stats section - Directly below title */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Teachers</h2>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">200+</p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Students</h2>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">2M+</p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Research</h2>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">1200+</p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Awards</h2>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">165</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 