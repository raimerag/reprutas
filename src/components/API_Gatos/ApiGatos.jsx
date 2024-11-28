import { useEffect, useState } from "react";

const ApiGatos = () => {

  const [gatos, setGatos] = useState([])
  const URL = "https://api.thecatapi.com/v1/images/search?limit=10"

  // useEffect(() => {
  //   const consultaApiGatos = async () => {
  //     const res = await fetch(URL);
  //     const data = await res.json();
  //     setGatos(data);
  //   }
  //   consultaApiGatos()
  // }, [])

  // llamar y ejecutar la función  
  useEffect(() => {
    (async function () {
      const res = await fetch(URL);
      const data = await res.json();
      setGatos(data);;
    })();
  }, [])

  return (
    <>
      {gatos.map(
        (gato) => (<li key={gato.id}><img src={gato.url} alt="" width={200} height={200} /></li>)
      )}
    </>
  )
}

export default ApiGatos