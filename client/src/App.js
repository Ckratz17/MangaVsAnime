import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/Main";

function App() {
  const [animeList, SetAnimeList] = useState([])
  const [mangaList, SetMangaList] = useState([])
  const [search, SetSearch] = useState("")

  const HandleSearch = e => {
    e.preventDeafault()
   
    FetchAnime(search)
  }

  const FetchAnime = async(query) => {
    const temp = await fetch(`https://kitsu.io/api/edge/anime?q=${query}&limit=1`)
      .then(res => res.json())

      console.log(temp.results)

      SetAnimeList(temp.results)
  }

  return (
    <>
      <Header />
      <MainContent
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch} 
        animeList={animeList}
       />
    </>
  );
}

export default App;

