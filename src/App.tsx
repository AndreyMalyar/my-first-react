import { Routes, Route } from "react-router-dom";
import './scss/style.scss'
import HomePage from "./components/pages/home/homePage.tsx";
import RickMortyPage from "./components/pages/rick-morty/RickMortyPage.tsx";
import CountersPages from "./components/pages/counters/countersPages.tsx";
import CharacterDefaultPage from "./components/pages/rick-morty/CharacerDefaultPage.tsx";
import CountPages from "./components/pages/counters/CountPages.tsx";
import OtherPage from "./components/pages/other/OtherPage.tsx";
import CodeRickMortyPage from "./components/pages/rick-morty/CodeRickMortyPage.tsx";
import StarWarsPage from "./components/pages/Star-Wars/StarWarsPage.tsx";
import StarWarsInfo from "./components/pages/Star-Wars/StarWarsInfo.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rickAndMorty" element={<RickMortyPage />} />
            <Route path="/rickAndMorty/character/:id" element={<CharacterDefaultPage />} />
            <Route path="/rickAndMorty/viewCode" element={<CodeRickMortyPage />} />
            <Route path="/starWars" element={<StarWarsPage />} />
            <Route path="/starWars/viewCode" element={<StarWarsInfo />} />
            <Route path="/counters" element={<CountersPages />} />
            <Route path="/counters/counter" element={<CountPages />} />
            <Route path="/other" element={<OtherPage />} />
        </Routes>
    </>
  )
}

export default App
