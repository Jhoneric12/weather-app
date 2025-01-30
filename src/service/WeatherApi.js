import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const api  = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = import.meta.env.VITE_API_KEY

export const fetchWeather = async (cityName) => {
    try {
        const { data } = await axios.get(`${api}q=${cityName}&appid=${apiKey}`)
        console.log(data)
        return data
    }
    catch (error) {
        console.log('Error: ', error.response?.data)
    }
}

export const useWeather = (cityName) => {
    return useQuery({
        queryKey: ['weather'],
        queryFn: () => fetchWeather(cityName)
    })
}