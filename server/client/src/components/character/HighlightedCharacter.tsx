import classes from './HighlightedCharacter.module.css';

const HighlightedCharacter = (props : any) => {
  return (
    <figure className={classes.character}>
      <p>{props.text}</p>
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};

export default HighlightedCharacter;
