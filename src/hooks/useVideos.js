import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const { data } = await youtube.get("search", {
      params: {
        q: term,
      },
    });
    setVideos(data.items);
  };
  //return 影片列表,和可以更新影片列表的函數方法 (所謂的custom hook)
  return [videos, search];
};

export default useVideo;
