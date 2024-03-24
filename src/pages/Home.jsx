// import Navbar from "../components/Navbar";

import wave from '../assets/wave.svg'

import Hero from "../components/Hero";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center">
            <Hero></Hero>
           
            <img className='absolute bottom-[50px] w-full' src={wave} alt="" />
        </div>
        
    );
};

export default Home;