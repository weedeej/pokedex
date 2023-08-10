import { bulbasaur, butterfree, charmander, espeon, flareon, pikachu, squirtle, sylveon } from '@/assets/images/pokemon'
import { Card } from './components'
import { PkInfo } from '@/types'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type GridViewProps = {
  list: (PkInfo & {img: StaticImport | null})[];
}

export function GridView(props: GridViewProps) {
  const {list} = props;

  return (
    <div className="grid max-w-5xl w-full mb-0 grid-cols-4 text-left gap-y-10">
        {
          list.map(({id, name, img}, idx) => (
            <Card key={`pk_card_${id}`} title={name} subtitle={`#${idx + 1}`} pk_id={id} img={img!}/>
          ))
        }
      </div>
  )
}