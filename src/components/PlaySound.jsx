import React, { useState } from "react";
import Sound from "react-sound";

// import sound
import Jefe from "../assets/audio/jefe.mp3";

// import icons
import { TbPlaylistOff, TbPlaylist } from "react-icons/tb";

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button
        className={`${
          !isPlaying ? "" : "text-[#b936f5]"
        } text-4xl flex items-center justify-center hover:text-[#b936f5] hover:transition hover:duration-300 hover:scale-105 pt-5 `}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying ? <TbPlaylist /> : <TbPlaylistOff />}
      </button>
      <Sound
        url={Jefe}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300 /* in milliseconds */}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};

export default PlaySound;
