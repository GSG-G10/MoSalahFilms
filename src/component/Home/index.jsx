import {useState,useEffect } from 'react';
import Card from '../Card'
import Navbars from '../Navbar'
import './style.css'

const Home = () => {
    const [data, setData] = useState([]);
const [value, setValue] = useState('fast');
console.log(value);
console.log("lst",data);



    useEffect(() => {
        let mounted = true;
        if(value !== ''){

          fetch(
              `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${value}`
            )        
            .then((res) => res.json())
            .then((data) => {
              if(mounted) {
                setData(data.results)
              } }).catch(err=>console.log(err))


        } else{

        }
        return () => mounted = false;
      }, [value])
    
      const handleChange=(e)=>{
        setValue(e.target.value)
    }

    return (
        <div>
            <Navbars handleChange={handleChange} value={value}/>
            {data.length !== 0? <Card data={data} /> : <h1 className='not-found'>No Data to show search again !</h1>}
                    </div>
    );
}

export default Home;
