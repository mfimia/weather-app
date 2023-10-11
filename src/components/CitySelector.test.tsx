import { render, screen, fireEvent } from '@testing-library/react'
import CitySelector from './CitySelector'
import { Cities } from '../app/types/data'

describe('CitySelector', () => {
  let mockCity: Cities
  let mockSetter: jest.Mock
  let selectElement: HTMLElement

  beforeEach(() => {
    mockCity = Cities.Berlin
    mockSetter = jest.fn()

    render(<CitySelector city={mockCity} setCity={mockSetter} />)

    selectElement = screen.getByRole('combobox')
  })

  it('renders a SELECT element with 3 options', () => {
    const { container } = render(
      <CitySelector city={mockCity} setCity={mockSetter} />
    )

    expect(selectElement).toBeVisible()
    expect(container).toMatchSnapshot()
  })

  it('should display all the cities in the Cities enum as select options', () => {
    Object.values(Cities).forEach((city) => {
      const option = screen.getByText(city)

      expect(option).toBeInTheDocument()
    })
  })

  it('should call the city setter when a new city is selected', () => {
    fireEvent.change(selectElement, { target: { value: Cities.Málaga } })

    expect(mockSetter).toHaveBeenCalledWith(Cities.Málaga)
  })
})
