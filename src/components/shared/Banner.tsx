import Image from 'next/image'

interface BannerProps {
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <div className="relative min-h-[600px] h-screen w-full -mt-16 sm:-mt-20 lg:-mt-24">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 w-full h-screen">
        <Image
          src="/ku-hero.png"
          alt="Khulna University Campus"
          fill
          priority
          quality={100}
          className="object-cover w-full h-screen brightness-75"
        />
      </div>

      {/* Gradient Overlay - More Subtle */}
      <div className="absolute inset-0 
          [background:linear-gradient(360deg,rgba(38,68,79,0.8)_0%,rgba(38,68,79,0)_25%,rgba(38,68,79,0)_75%,rgba(38,68,79,0.8)_100%)]" 
      />

      {/* Content Container - Centered */}
      <div className=" max-w-[1920px] h-full mx-auto  pt-96 px-36">
        {/* Top Banner */}
        {/* <div className="relative z-10 bg-black/30 py-2">
          <p className="text-white text-center text-base font-light">
            We build superheroes who build the nation. Welcome to Khulna University!
          </p>
        </div> */}

        {/* Hero Content */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full md:w-5/6 left-1/2 -translate-x-1/2 ">
          <div className="max-w-[1920px] mx-auto px-6">
            {/* Hero Title */}
            <h1 className="text-white font-poppins font-bold 
              text-5xl sm:text-5xl md:text-6xl  xl:text-7xl 2xl:text-8xl 3xl:text-9xl
              leading-tight tracking-tight
              text-center md:text-left
              drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
              University for<br />
              Tomorrow
            </h1>

            {/* Hero Subtext */}
            <p className="mt-4 text-white font-poppins font-light 
              text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl  2xl:text-3xl 
              leading-relaxed 
              max-w-[360px] lg:max-w-[480px] xl:max-w-[440px]
              mx-auto md:mx-0 
              text-center md:text-left
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
              We build superheroes who build the nation. Welcome to Khulna University!
            </p>
          </div>
        </div>

        {/* Stats Container */}
        <div className="absolute bottom-0 md:w-5/6 w-full left-1/2 -translate-x-1/2">
          <div className="grid grid-cols-4 max-w-[1920px] mx-auto">
            {/* Teachers */}
            <div className="px-6 py-8 text-center text-white border-2 border-white/50 border-b-0
                hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4">Teachers</h3>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">200+</p>
            </div>

            {/* Students */}
            <div className="px-6 py-8 text-center text-white border-2 border-white/50 border-b-0 border-l-0
                hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4">Students</h3>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">2M+</p>
            </div>

            {/* Research */}
            <div className="px-6 py-8 text-center text-white border-2 border-white/50 border-b-0 border-l-0
                hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4">Research</h3>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">1200+</p>
            </div>

            {/* Awards */}
            <div className="px-6 py-8 text-center text-white border-2 border-white/50 border-b-0 border-l-0
                hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4">Awards</h3>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">165</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;

// <div className="absolute bottom-0 left-0 w-full bg-black/30">
// <div className="grid grid-cols-4 max-w-[1920px] mx-auto divide-x divide-white/30
//     2xl:px-20 2xl:py-10
//     xl:px-16 xl:py-8
//     lg:px-12 lg:py-6
//     md:grid-cols-2 md:divide-y md:divide-x-0 md:px-8 md:py-4
//     sm:grid-cols-1 sm:px-4">
//   {/* Teachers */}
//   <div className="px-8 py-6 text-center text-white
//       2xl:px-12 2xl:py-8
//       xl:px-10 xl:py-7">
//     <h3 className="text-2xl font-bold mb-2 
//         2xl:text-4xl 
//         xl:text-3xl 
//         md:text-2xl 
//         sm:text-xl">Teachers</h3>
//     <p className="text-xl 
//         2xl:text-3xl 
//         xl:text-2xl 
//         md:text-xl 
//         sm:text-lg">200+</p>
//   </div>

//   {/* Students */}
//   <div className="px-8 py-6 text-center text-white
//       2xl:px-12 2xl:py-8
//       xl:px-10 xl:py-7">
//     <h3 className="text-2xl font-bold mb-2 
//         2xl:text-4xl 
//         xl:text-3xl 
//         md:text-2xl 
//         sm:text-xl">Students</h3>
//     <p className="text-xl 
//         2xl:text-3xl 
//         xl:text-2xl 
//         md:text-xl 
//         sm:text-lg">2M+</p>
//   </div>

//   {/* Research */}
//   <div className="px-8 py-6 text-center text-white
//       2xl:px-12 2xl:py-8
//       xl:px-10 xl:py-7">
//     <h3 className="text-2xl font-bold mb-2 
//         2xl:text-4xl 
//         xl:text-3xl 
//         md:text-2xl 
//         sm:text-xl">Research</h3>
//     <p className="text-xl 
//         2xl:text-3xl 
//         xl:text-2xl 
//         md:text-xl 
//         sm:text-lg">1200+</p>
//   </div>

//   {/* Awards */}
//   <div className="px-8 py-6 text-center text-white
//       2xl:px-12 2xl:py-8
//       xl:px-10 xl:py-7">
//     <h3 className="text-2xl font-bold mb-2 
//         2xl:text-4xl 
//         xl:text-3xl 
//         md:text-2xl 
//         sm:text-xl">Awards</h3>
//     <p className="text-xl 
//         2xl:text-3xl 
//         xl:text-2xl 
//         md:text-xl 
//         sm:text-lg">165</p>
//   </div>
// </div>
// </div>