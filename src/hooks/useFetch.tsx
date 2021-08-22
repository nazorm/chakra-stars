import { useEffect, useState } from 'react'
import { IStarCardProps } from '../common/types';

const useFetch = (url:string) => {
    const [data, setData] = useState<IStarCardProps[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { loading, error, data }
}




export default useFetch