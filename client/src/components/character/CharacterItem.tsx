import { Link } from 'react-router-dom';
import classes from './CharacterItem.module.css';

const CharacterItem = (props: any) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.name}</figcaption>
      </figure>
      <Link className='btn' to={`/characters/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default CharacterItem;
