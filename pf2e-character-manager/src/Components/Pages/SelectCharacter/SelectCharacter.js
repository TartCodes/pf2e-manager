import CharacterList from "./CharacterList";

const SelectCharacter = () => {
  return (
    <div className="select-char-main">
      <section className="select-char-wrapper">
        <h2>Select or Create a Character</h2>
        <div className="character-list">
          <CharacterList />
        </div>
      </section>
    </div>
  );
};

export default SelectCharacter;
