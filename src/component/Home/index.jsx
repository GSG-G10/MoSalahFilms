import {useContext } from 'react';
import Card from '../Card'
import Navbars from '../Navbar'
import {MokaContext} from '../../Context/MokaContext';
import './style.css'

const Home = () => {
  const Data = useContext(MokaContext);
  const {data }=Data
    return (
        <div>
            <Navbars />
            {data.length !== 0? <Card /> : <h1 className='not-found'>No Data to show search again !</h1>}
                    </div>
    );
}

export default Home;
