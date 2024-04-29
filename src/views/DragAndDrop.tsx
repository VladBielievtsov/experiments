import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { Reorder } from "framer-motion";
import Header from "../components/Header";

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export default function DragAndDrop() {
  const [characters, setCharacters] = useState<Result[] | []>([]);

  const getCharacters = async () => {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1&limit=4"
    );
    const firstFourCharacters = data.results.slice(0, 4);
    setCharacters(firstFourCharacters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Helmet>
        <title>Drag & Drop</title>
      </Helmet>
      <Header title="Drag & Drop" />
      <main className="min-h-screen pt-[72px]">
        <div className="max-w-96 mx-auto mt-10">
          <Reorder.Group values={characters} onReorder={setCharacters}>
            {characters.length ? (
              characters.map((c) => (
                <Reorder.Item value={c} key={c.id}>
                  <div className="cursor-grab bg-white border border-zinc-200 p-4 rounded-xl flex items-center space-x-4 mb-6 shadow">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img src={c.image} alt={c.name} />
                    </div>
                    <div>
                      <h2 className="font-bold">{c.name}</h2>
                    </div>
                  </div>
                </Reorder.Item>
              ))
            ) : (
              <p>Loading</p>
            )}
          </Reorder.Group>
        </div>
      </main>
    </>
  );
}
