import React from 'react'
import { Link } from "react-router-dom"
const SingleCard = ({ flags,
  name,
  population,
  region,
  capital,}) => {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden">
          <img src={flags.svg} alt="" className="w-full object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              {name.common}
            </h2>
            <ul className="flex flex-col items-start justify-start gap-2 dark:text-gray-400">
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Subregion: {capital}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  )
}

export default SingleCard