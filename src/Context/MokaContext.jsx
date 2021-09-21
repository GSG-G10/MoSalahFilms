import React  ,{useState ,createContext, useEffect}  from 'react';

export const MokaContext = createContext();


const MoviesProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [fav, setIndex] = useState([]);
  const [value, setValue] = useState('fast');
 
  console.log("nnnnnnnnnnnn",JSON.parse(localStorage.getItem("myItem")));
  console.log("favvvvvv",fav);
  console.log("lst",data);
      useEffect(() => {
        console.log("into to ues");
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

        useEffect(() => {
          const newData= JSON.parse(localStorage.getItem("myItem"))
        if(newData){
          setIndex(newData)
          console.log("11111111",fav);
        }
      },[]);

        const handleChange=(e)=>{
          setValue(e.target.value)
      }
      const handleClick =(index)=>{
        setIndex([...fav,data[index]])
        localStorage.setItem("myItem", JSON.stringify(fav))   
      }
  


    return (
        <MokaContext.Provider value={{handleChange,data ,value  ,handleClick ,fav}}>
        {children}
      </MokaContext.Provider>
    );
}

export default MoviesProvider;
