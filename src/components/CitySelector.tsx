import { Cities } from '@/app/types/data'
import { FC, Dispatch, SetStateAction } from 'react'

interface ICitySelectorProps {
  city: Cities
  setCity: Dispatch<SetStateAction<Cities>>
}

const CitySelector: FC<ICitySelectorProps> = ({ city, setCity }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value as Cities)}
        className="p-2 border rounded"
      >
        {Object.values(Cities).map(cityName => <option key={cityName} value={cityName}>{cityName}</option>)}
      </select>
    </div>
  )
}

export default CitySelector