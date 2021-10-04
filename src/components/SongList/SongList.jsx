
import React, { useState } from 'react'
import MultiPlayer from "./Song";
import "./SongList.css"

export default function SongList() {
  const [array, setArray] = useState([
    {
      id: 0,
      SongLink: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      Title:
        'Lazing on a Sunday Afternoon',
      Artist: 'Chris',
      Album: 'A Night at the Opera',
      Data: '13 days ago',
      Like: localStorage.getItem(0),
    },
    {
      id: 1,
      SongLink: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      Title:
        'Seaside Rendezvous ',
      Artist: 'Andrey',
      Album: 'A Night at the Opera',
      Data: '13 days ago',
      Like: localStorage.getItem(1),
    },
  ]);



  return (
    <div>
      <MultiPlayer
        urls={array}
        setArray={setArray}
      />
    </div>
  )
}