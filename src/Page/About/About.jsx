import Whylex from '../../Component/Whylex/Whylex';
import OurTeam from './OurTeam/OurTeam';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zF82vmG/image.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>
            <Whylex></Whylex>

            <OurTeam></OurTeam>

        </div>
    );
};

export default About;