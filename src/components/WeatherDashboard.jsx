import { useState } from 'react'
import Search from './Search'
import { useQuery } from '@tanstack/react-query'
import { fetchWeather } from '../service/WeatherApi'

const WeatherDashboard = () => {

    const [city, setCity] = useState('')
    const [submittedCity, setSubmittedCity] = useState('')

    const { isFetching, isSuccess, isError, data} = useQuery({
        queryKey: ['weather', submittedCity],
        queryFn: () => fetchWeather(submittedCity),
        enabled: !!submittedCity,
        refetchOnWindowFocus: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedCity(city)
    }

    const handleChange = (e) => {
        setCity(e.target.value)
    }
    
  return (
    <section className='min-h-screen gap-2 flex flex-col justify-center items-center bg-[#27374D] py-10 px-2'>
        <h1 className='text-white font-bold text-2xl mb-2'>Weather Forecast</h1>
        <div className='flex flex-col gap-2 items-center border border-white p-10'>
            <form className='mb-6' onSubmit={handleSubmit}>
                <Search 
                onChange={handleChange} 
                value={city}/>
            </form>
            {
                isSuccess && (
                    <>
                        <h1 className='text-white text-lg font-medium'>{data?.name}, <span>{ data?.sys?.country}</span></h1>
                        <img className='w-40 h-40' src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}/>
                        <span className='text-white'>{data?.weather[0]?.main} | { data?.weather[0]?.description }</span>
                        <h1 className='text-white font-extrabold text-3xl'>{Number(data?.main?.temp - 273.15).toFixed(2)}&deg;C</h1>
                        <div className=' border border-white self-stretch lg:mx-auto px-4 py-4 mt-6 grid grid-cols-2 gap-4 lg:gap-6 lg:py-6'>
                            <div>
                                <span className='text-sm text-white'>Feels Like: {Number(data?.main?.feels_like - 273.15).toFixed(2)}&deg;C</span>
                            </div>
                            <div>
                                <span className='text-sm text-white'>Humidity: {Number(data?.main?.humidity)}%</span>
                            </div>
                            <div>
                                <span className='text-sm text-white'>Wind Speed: {Number(data?.wind?.speed)} M/S</span>
                            </div>
                            <div>
                                <span className='text-sm text-white'>Cloudiness: {data?.clouds?.all}%</span>
                            </div>
                        </div>
                    </>
                )
            }
            {
                isFetching && <h1 className='text-white'>Fetching....</h1>
            }
            {
                isError && <h1 className='text-white'>Invalid City</h1>
            }
        </div>
    </section>
  )
}

export default WeatherDashboard