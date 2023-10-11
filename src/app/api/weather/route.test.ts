describe('API endpoint /api/weather', () => {
  it('should return data when a city is provided', async () => {
    const response = await fetch('http://localhost/api/weather?city=Berlin')
    const { data } = await response.json()

    expect(response.status).toBe(200)
    expect(data).toHaveProperty('cityData')
    expect(data.cityData).toHaveLength(4)
    expect(data).toHaveProperty('ui')
    expect(data.ui).toHaveLength(3)
    expect(data.cityName).toBe('Berlin')
  })

  it('should return a 404 when no city is provided', async () => {
    const response = await fetch('http://localhost/api/weather')
    const data = await response.json()

    expect(response.status).toBe(404)
    expect(data).toEqual({ code: 404, data: null, cityName: '' })
  })

  it('should return a 404 when an unknown city is provided', async () => {
    const response = await fetch(
      'http://localhost/api/weather?city=UnknownCity'
    )
    const data = await response.json()

    expect(response.status).toBe(404)
    expect(data).toEqual({ code: 404, data: null, cityName: '' })
  })
})
