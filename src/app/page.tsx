"use client";

import { bulbasaur, butterfree, charmander, espeon, flareon, pikachu, squirtle, sylveon } from '@/assets/images/pokemon'
import { Checkbox, IconButton, Popup } from './components'
import { FilterIcon, GridViewIcon, ListViewIcon } from '@/assets/icons'
import { useEffect, useRef, useState } from 'react'
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

const types = ["Normal", "Fire", "Water", "Grass", "Flying", "Fighting"];

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);
  const [pkInfoList, setPkInfoList] = useState<(PkInfo & { img: StaticImport | null })[] | null>(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState(new Set());
  const filterButtonRef = useRef(null);

  useEffect(() => {
    if (!!pkInfoList) return;
    PROVIDED_POKEMON.forEach(async (pk) => {
      const pkInfo = await getPokemon(pk.pk_id);
      if (!pkInfo) return;
      pkInfo.name = toTitleCase(pkInfo.name);
      setPkInfoList((prev) => [...prev ?? [], { ...pkInfo, img: pk.img }])
    });
  }, [pkInfoList]);

  function toggleFilterMenu() {
    setIsFilterMenuOpen(prev => !prev);
  }

  function onFilterCheckboxChange(checked: boolean, type: string) {
    
    setFilter((prev) => {
      const newFilter = new Set(prev);
      checked ? newFilter.add(type) : newFilter.delete(type);
      return newFilter 
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-12 gap-12 text-white">
      <Popup
        isOpen={isFilterMenuOpen}
        onClose={toggleFilterMenu}
        content={<div className="flex flex-col gap-2 px-4 w-full">
          {types.map((type) => (
            <Checkbox onChange={(v) => onFilterCheckboxChange(v,type)} checked={filter.has(type)} label={type}/>
          ))}
        </div>}
        anchor={filterButtonRef}
        position={'bottom-right'}
        addTop={-8}
        subtractLeft={8}
      />
      <div className="flex flex-row z-10 max-w-5xl w-full items-center justify-between text-sm">
        <p className="font-semibold text-2xl">Choose a Pokemon</p>
        <div className='flex flex-row'>
          <IconButton onClick={toggleFilterMenu} ref={filterButtonRef}>
            <FilterIcon />
          </IconButton>
          <IconButton onClick={() => setViewMode(ViewMode.LIST)}>
            <ListViewIcon />
          </IconButton>
          <IconButton onClick={() => setViewMode(ViewMode.GRID)}>
            <GridViewIcon />
          </IconButton>
        </div>
      </div>
      {
        !!pkInfoList && (
          !viewMode ? (
            <GridView list={pkInfoList.filter((pk) => !!pk.img)} />
          ) : (
            <ListView list={pkInfoList} />
          )
        )
      }
    </main>
  )
}
