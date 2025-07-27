import Hero from "./Hero"

import NavBar from "./NavBar"
import AddSecret from "./AddSecret"
import Secrets from "./Secrets"
import ShowSecret from "./ShowSecret"
import { useState } from "react"
import Inputs from "./Inputs"
import secrets from "../assets/secrets"

function App() {

  const [allSecrets, setAllSecrets] = useState(secrets);

  const [secret, setSecret] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("All");

  function handleSecret(mySecret){
    setSecret(mySecret);
    setIsOpen(true);
  }

  function modalClose(){
    setIsOpen(false);
  }

  return (
    <div className="px-5">
      <NavBar />
      <Hero />
      <Inputs setSearchInput={setSearchInput} setCategory={setCategory} searchInput={searchInput} category={category}/>
      <AddSecret setAllSecrets={setAllSecrets}/>
      <Secrets handleSecret={handleSecret} searchInput={searchInput} category={category} allSecrets={allSecrets}/>
      <ShowSecret secret={secret} isOpen={isOpen} modalClose={modalClose}/>
    </div>
  )
}

export default App
