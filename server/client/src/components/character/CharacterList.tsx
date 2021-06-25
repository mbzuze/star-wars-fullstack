import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CharacterItem from './CharacterItem';
import classes from './CharacterList.module.css';

const searchCharacters = (character: any[], name: string | null) => {
 
  return character;
};

const CharacterList = (props: { characters: any[]; }) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  
  const filteredSearch = queryParams.get('search');

  const searchedCharacters = searchCharacters(props.characters, filteredSearch)
  
  const searchCharacterHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?search=${filteredSearch}`
    });
      // history.push(`${location.pathname}?search=${filteredSearch}`);
  };

  
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={searchCharacterHandler}>Search</button>
      </div>
      <ul className={classes.list}>
        {searchedCharacters.map((character: { userId: any; name: any; text: any; }) => (
          <CharacterItem
            key={character.userId}
            id={character.userId}
            name={character.name}
            text={character.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default CharacterList;
