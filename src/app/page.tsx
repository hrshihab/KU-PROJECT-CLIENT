import LatestNews from "@/components/LatestNews/LatestNews";
import Banner from "@/components/shared/Banner";
import Label from "@/components/shared/Label";
import Vc from "@/components/shared/Vc";
const HomePage = async () => {
  const res = await fetch('http://localhost:5000/api/v1/news',{
    next:{
      revalidate:30
    }
  })
  const news = await res.json()
  return (
    <>
    <Banner className="mt-0" />
    <Label />
    <Vc />
    
     {/* <LatestNews news={news} /> */}
    </>
  );
};

export default HomePage;
