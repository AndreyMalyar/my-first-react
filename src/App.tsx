import { Routes, Route } from "react-router-dom";
import './scss/style.scss'
import HomePage from "./components/pages/home/homePage.tsx";
import RickMortyPage from "./components/pages/rick-morty/RickMortyPage.tsx";
import CountersPages from "./components/pages/counters/countersPages.tsx";
import CharacterDefaultPage from "./components/pages/rick-morty/CharacerDefaultPage.tsx";
import CountPages from "./components/pages/counters/CountPages.tsx";
import OtherPage from "./components/pages/other/OtherPage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rickAndMorty" element={<RickMortyPage />} />
            <Route path="/rickAndMorty/character/:id" element={<CharacterDefaultPage />} />
            <Route path="/counters" element={<CountersPages />} />
            <Route path="/counters/counter" element={<CountPages />} />
            <Route path="/other" element={<OtherPage />} />
            <Route path="/blog" element={<h2>блог</h2>} />
        </Routes>
    </>
  )
}

export default App
