import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = async () => {
  return await axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeroes)
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>
  }
  return (
    <>
    <h2>RQ Super Heroes Page</h2>
    {
      data?.data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>
      })
    }
    </>
  )
}
