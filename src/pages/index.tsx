import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'São Paulo',
          slug: 'sampa',
          location: {
            latitude: -23.6821604,
            longitude: -46.8754951
          }
        },
        {
          id: '2',
          name: 'Bova Marina',
          slug: 'bova',
          location: {
            latitude: 37.9335969,
            longitude: 15.9073027
          }
        }
      ]}
    />
  )
}
