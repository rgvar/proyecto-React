import './App.css'
import { useFetch } from './hooks';

const url = "https://fakestoreapi.com/products/1";

interface Data {
    name: string;
    lastName: string;
    age: number;
}

function App() {

    const { data, error, loading } = useFetch<Data>(url);

    if (loading) {
        return <div>Cargando ...</div>;
    }

    if (error) {
        return <div>Hay un error: {error.message}</div>;
    }

    return (
        <div>{JSON.stringify(data)}</div>
    );

}

export default App
