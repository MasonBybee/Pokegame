import pokemon from "./pokemon";
import Pokegame from "./Pokegame/Pokegame";

const App = () => {
  return (
    <div>
      <Pokegame pokemon={pokemon} />
    </div>
  );
};

export default App;
