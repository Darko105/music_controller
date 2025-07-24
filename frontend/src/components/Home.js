import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import CreateRoomPage from './CreateRoomPage'
import RoomJoinPage from './RoomJoinPage'

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/create-room" element={<CreateRoomPage />} />
        <Route path="/join-room" element={<RoomJoinPage />} />
      </Routes>
    </div>
  )
}

export default Home
