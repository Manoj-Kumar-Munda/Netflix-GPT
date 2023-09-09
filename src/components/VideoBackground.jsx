import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((appStore) => appStore.movies.trailer);
  return (
    <div className="w-screen">
      {!trailer ? null : (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?si=sYOUKMVDFO7SeQeI&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
