
import { bulbasaur, butterfree, charmander, espeon, flareon, pikachu, squirtle, sylveon } from '@/assets/images/pokemon'
import { Card } from './components'

const POKEMON_WITH_IMAGES = [
  {
    pk_id: 136,
    img: flareon,
    title: "Flareon",
  },
  {
    pk_id: 25,
    img: pikachu,
    title: "Pikachu",
  },
  {
    pk_id: 7,
    img: squirtle,
    title: "Squirtle",
  },
  {
    pk_id: 4,
    img: charmander,
    title: "Charmander",
  },
  {
    pk_id: 1,
    img: bulbasaur,
    title: "Bulbasaur",
  },
  {
    pk_id: 700,
    img: sylveon,
    title: "Sylveon",
  },
  {
    pk_id: 196,
    img: espeon,
    title: "Espeon",
  },
  {
    pk_id: 12,
    img: butterfree,
    title: "Butterfree",
  },
]

export function GridView() {
  return (
    <div className="grid max-w-5xl w-full mb-0 grid-cols-4 text-left gap-y-10">
        {
          POKEMON_WITH_IMAGES.map((pk, idx) => (
            <Card key={`pk_card_${pk.pk_id}`} {...pk} subtitle={`#${idx+1}`}/>
          ))
        }
      </div>
  )
}