import Image from "next/image";
import viceChancellorImage from "@/assets/vice-chancellor.jpg"; // Make sure to add your image path here
import Link from "next/link";
import image from "next/image";

const ViceChancellorMessage = () => {
  return (
    <section className="xl:py-16 md:py-12 py-8 px-8 bg-[#f1fffe] font-poppins">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-justify">
          <h2 className="text-3xl font-semibold mb-4 text-center">Message from the Vice Chancellor</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Welcome to Khulna University—a place of discovery, inspiration, and limitless possibilities!
          </p>
          <p className="text-base mb-6 leading-relaxed">
            It is my distinct honor and privilege to welcome you to Khulna University, a prestigious
            institution that stands at the forefront of academic excellence and innovation in Bangladesh.
            Since its inception, Khulna University has been committed to fostering an environment that encourages
            critical thinking, creativity, and collaboration, ensuring that our students and faculty are equipped to
            address the challenges of the 21st century. Our university is built on the foundation of interdisciplinary
            learning, research, and community engagement. We are deeply committed to cultivating an inclusive and
            dynamic space where students from diverse backgrounds can thrive academically and personally. I believe that
            education is not merely the acquisition of knowledge but the development of skills, values, and ethics that
            contribute to the greater good of society.
          </p>
          <Link
            href="#"
            className="text-gray-500 w-fit text-lg font-medium flex border border-gray-500 rounded px-4 py-2 "
          >
            KNOW MORE <span>&rarr;</span>
          </Link>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/image.png"
            alt="Vice Chancellor"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default ViceChancellorMessage;
