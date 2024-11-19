import { useEffect, useState } from 'react'
import './App.css'


function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://fakestoreapi.com/products/1");
            
            if (!response.ok) {
                throw new Error("Error al obtener datos");
            }
            const jsonResponse = await response.json();

            setData(jsonResponse);
        } catch (err) {
            setError(err as string);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando ...</div>;
    }
    if (error) {
        return <div>Hay un error: </div>;
    }

    return (
        <div>{JSON.stringify(data)}</div>
    );

}

export default App
