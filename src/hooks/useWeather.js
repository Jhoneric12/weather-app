import { fetchWeather } from "../service/WeatherApi";
import { useQuery } from "@tanstack/react-query";

export const useWeather = (submittedCity) => {
    return useQuery({
        queryKey: ['weather', submittedCity],
        queryFn: () => fetchWeather(submittedCity),
        enabled: !!submittedCity,
        refetchOnWindowFocus: false
    })
}