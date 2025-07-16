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
import HooksPage from "./components/pages/hooksPage/hooksPage.tsx";
import HooksPageInfo from "./components/pages/hooksPage/HooksPageInfo.tsx"

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/redux" element={<RickMortyPage />} />
            <Route path="/redux/character/:id" element={<CharacterDefaultPage />} />
            <Route path="/redux/viewCode" element={<CodeRickMortyPage />} />
            <Route path="/useReducer" element={<StarWarsPage />} />
            <Route path="/useReducer/viewCode" element={<StarWarsInfo />} />
            <Route path="/customHooks" element={<HooksPage />} />
            <Route path="/customHooks/viewCode" element={<HooksPageInfo />} />
            <Route path="/counters" element={<CountersPages />} />
            <Route path="/counters/counter" element={<CountPages />} />
            <Route path="/other" element={<OtherPage />} />
        </Routes>
    </>
  )
}

export default App
