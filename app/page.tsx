import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-black text-white">
      <div className="w-full md:w-1/2 p-8 md:p-16 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the world with us</h1>
        <p className="text-lg md:text-xl mb-8">Embark on a journey of discovery and adventure across our beautiful planet.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Start Exploring
        </button>
      </div>
      
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen absolute md:relative right-0 top-0">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/iAzzVH2uv37UbdS2/scene.splinecode"
        />
      </div>
    </div>
  );
}