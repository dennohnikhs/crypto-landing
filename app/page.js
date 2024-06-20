import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Provider from "./_components/Provider";


const Home = () => {
  const footerDatas = [
    {
        image: "https://placebeard.it/640x360",
        name: "John Doe",
        description: "John is a seasoned developer with expertise in full-stack development."
    },
    {
        image: "https://placebeard.it/640x360",
        name: "Jane Smith",
        description: "Jane specializes in front-end development and loves creating intuitive user interfaces."
    },
    {
        image: "https://placebeard.it/640x360",
        name: "Michael Johnson",
        description: "With over 10 years of experience, Michael focuses on backend development and database optimization."
    },
    {
        image: "https://placebeard.it/640x360",
        name: "Emily White",
        description: "Emily is passionate about mobile app development and enjoys bringing ideas to life on iOS and Android devices."
    }
];

  return (
    <div>
      <Navbar/>
    <Provider >
      <Hero/>
      <div className="px-3 text-white text-4xl font-bold">
      <h1 className="py-3">The Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 px-3 py-3 gap-3 ">
   {footerDatas.map((data, index) => (
                <Footer key={index} details={data} />
            ))}
   </div>
      </div>
    </Provider>
  
    </div>
  );
}

export default Home;
