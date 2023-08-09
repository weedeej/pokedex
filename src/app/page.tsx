import Image from 'next/image'
import { Card, IconButton } from './components'
import { FilterIcon, GridViewIcon, ListViewIcon } from '@/assets/icons'
import { bulbasaur, butterfree, charmander, espeon, flareon, pikachu, squirtle, sylveon } from '@/assets/images/pokemon'

const POKEMON_WITH_IMAGES = [
  {
    pk_id: 136,
    img: flareon,
  },
  {
    pk_id: 25,
    img: pikachu,
  },
  {
    pk_id: 7,
    img: squirtle,
    title: "Squirtle",
    subtitle: "#3"
  },
  {
    pk_id: 4,
    img: charmander,
  },
  {
    pk_id: 1,
    img: bulbasaur,
  },
  {
    pk_id: 700,
    img: sylveon,
  },
  {
    pk_id: 196,
    img: espeon,
  },
  {
    pk_id: 12,
    img: butterfree,
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 gap-12 text-white">
      <div className="flex flex-row z-10 max-w-5xl w-full items-center justify-between text-sm">
        <p className="font-semibold text-2xl">Choose a Pokemon</p>
        <div className='flex flex-row'>
          <IconButton>
            <FilterIcon/>
          </IconButton>
          <IconButton>
            <ListViewIcon/>
          </IconButton>
          <IconButton>
            <GridViewIcon/>
          </IconButton>
        </div>
      </div>
      <div className="grid max-w-5xl w-full mb-0 grid-cols-4 text-left gap-y-10">
        {
          POKEMON_WITH_IMAGES.map((pk) => (
            <Card key={`pk_card_${pk.pk_id}`} {...pk}/>
          ))
        }
      </div>
    </main>
  )
}
