"use client";

import { Card, IconButton } from './components'
import { FilterIcon, GridViewIcon, ListViewIcon } from '@/assets/icons'
import { useState } from 'react'
import { GridView } from './GridView';

enum ViewMode {
  GRID = 0,
  LIST = 1
}

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID)

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
        !viewMode ? (
          <GridView/>
        ) : (
          <>list view</>
        )
      }
    </main>
  )
}
