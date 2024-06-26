import UserClass from './UserClass';
import {LOGO_URL} from '../utils/constants'

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-4xl font-bold">About</h1>
            <p className="text-lg font-semibold">This is the about page of Hungry</p>

            <div className='flex'>
            <UserClass name={"Mandar"} location={"Nagpur"} id={"mandartule"}  />
            </div>
            
        </div>
    )
};

export default About;