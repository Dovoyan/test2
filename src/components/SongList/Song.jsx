import React, { useState, useEffect } from 'react'

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url.SongLink),
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false,
      }
    }),
  )

  const toggle = targetIndex => () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newPlayers[targetIndex].playing = true
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
    } else {
      newPlayers[targetIndex].playing = true
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [])

  return [players, toggle]
}

const MultiPlayer = ({ urls, setArray }) => {
  const [players, toggle] = useMultiAudio(urls)



  const players1 = players.sort((a, b) => a.url.Like <= b.url.Like ? 1 : -1)


  return (
    <div>
      {players1.map((player, i) => (
        <div key={i} className="SongString">
          <button onClick={toggle(i)}>{player.playing ? 'Stop' : 'Play'}</button>
          <div className="songInfo">{player.url.Title}</div>
          <div className="songInfo">{player.url.Artist}</div>
          <div className="songInfo">{player.url.Album}</div>
          <div className="songInfo">{player.url.Data}</div>
          <div onClick={() => likeCountAdd(urls, setArray, +player.url.id)}>Like</div>
          <div onClick={() => likeCountRemove(urls, setArray, +player.url.id)}>Dislike</div>
        </div>
      ))}
    </div>
  )
}

function likeCountAdd(urls, setArray, id) {
  let likeCount = localStorage.getItem(id);
  likeCount = +likeCount + 1
  localStorage.setItem(id, likeCount);
  const copy = Array.from(urls)
  copy[id].Like++

  setArray(copy)
}

function likeCountRemove(urls, setArray, id) {
  let likeCount = localStorage.getItem(id);
  likeCount = +likeCount - 1
  localStorage.setItem(id, likeCount);
  const copy = Array.from(urls)
  copy[id].Like--

  setArray(copy)
}



function Player({ player, toggle }) {
  let likeCount = localStorage.getItem(player.url.id);
  if (!likeCount) localStorage.setItem(player.url.id, 0);


  return (
    <div className="SongString">
      <button onClick={toggle}>{player.playing ? 'Stop' : 'Play'}</button>
      <div className="songInfo">{player.url.Title}</div>
      <div className="songInfo">{player.url.Artist}</div>
      <div className="songInfo">{player.url.Album}</div>
      <div className="songInfo">{player.url.Data}</div>
      <div onClick={() => likeCountAdd(player.url.id)}>Like</div>
      <div onClick={() => likeCountRemove(player.url.id)}>Dislike</div>
    </div>
  )
}




export default MultiPlayer