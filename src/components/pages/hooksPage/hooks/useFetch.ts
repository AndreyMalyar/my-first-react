import { useState } from "react";

interface ResponseProps {
    name: { first: "", last: "", title: "" },
    email: "",
    phone: "",
    picture: { large: "", medium: "", thumbnail: "" },
    location: { city: "", country: "" },
    gender: "",
    dob: { age: 0 }
}


const useFetch = (api: string) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<ResponseProps | null>(null)

    // rick and morty https://rickandmortyapi.com/api/character
    const getData = async () => {
        setData(null)
        setLoading(true);
        try {
            const response = await fetch(api); //https://jsonplaceholder.typicode.com/users/1 2) https://dog.ceo/api/breeds/image/random 3)https://randomuser.me/api/
            const dataResp = await response.json();
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            // console.log(dataResp.results[0])
            setData(dataResp?.results[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        data,
        isLoading,
        getData,
    }
}

export default useFetch;