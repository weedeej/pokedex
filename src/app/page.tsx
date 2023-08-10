"use client";

import { bulbasaur, butterfree, charmander, espeon, flareon, pikachu, squirtle, sylveon } from '@/assets/images/pokemon'
import { IconButton } from './components'
import { FilterIcon, GridViewIcon, ListViewIcon } from '@/assets/icons'
import { useEffect, useState } from 'react'
import { GridView } from './GridView';
import { ListView } from './ListView';
import { PkInfo } from '@/types';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { getPokemon, toTitleCase } from '@/utilities';

enum ViewMode {
  GRID = 0,
  LIST = 1
}

const PROVIDED_POKEMON = [
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
  {
    pk_id: 150,
    img: null,
    title: "Mewtwo",
  },
  {
    pk_id: 54,
    img: null,
    title: "Psyduck",
  },
]

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);
  const [pkInfoList, setPkInfoList] = useState<(PkInfo & {img: StaticImport | null})[] | null>(null);

  useEffect(() => {
    if (!!pkInfoList) return;
    PROVIDED_POKEMON.forEach(async (pk) => {
      const pkInfo = await getPokemon(pk.pk_id);
      if (!pkInfo) return;
      pkInfo.name = toTitleCase(pkInfo.name);
      setPkInfoList((prev) => [...prev ?? [], {...pkInfo, img: pk.img}])
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center py-12 gap-12 text-white">
      <div className="flex flex-row z-10 max-w-5xl w-full items-center justify-between text-sm">
        <p className="font-semibold text-2xl">Choose a Pokemon</p>
        <div className='flex flex-row'>
          <IconButton>
            <FilterIcon/>
          </IconButton>
          <IconButton onClick={() => setViewMode(ViewMode.LIST)}>
            <ListViewIcon/>
          </IconButton>
          <IconButton onClick={() => setViewMode(ViewMode.GRID)}>
            <GridViewIcon/>
          </IconButton>
        </div>
      </div>
      {
        !!pkInfoList && (
          !viewMode ? (
            <GridView list={pkInfoList.filter((pk) => !!pk.img)}/>
          ) : (
            <ListView list={pkInfoList}/>
          )
        )
      }
    </main>
  )
}
