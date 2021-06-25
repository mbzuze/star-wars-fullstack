import { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import HighlightedCharacter from "../components/character/HighlightedCharacter";
import NoCharactersFound from "../components/character/NoCharactersFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleCharacter } from "../lib/api";
const DUMMY_QUOTES = [
    {userId: '1', name: 'Max', text: 'Learning'},
    {userId: '2', name: 'Jeremiah', text: 'Demolition of all economic systems'},
    {userId: '3', name: 'Caesar', text: 'Undoubtedly Sarcastic in nature'},
]

const CharacterDetail = () => { 
    let params = {
        userId: ''
    };
    params = useParams();
    const { userId } = params;
    const match = useRouteMatch();


    const { sendRequest, status, data: loadedCharacter, error} = useHttp(
        getSingleCharacter,
        true
    );

    useEffect(() => {
        sendRequest(userId);
    }, [sendRequest, userId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    };

    if (error) {
        return (
            <p className="centered focused">{error}</p>
        );
    };

    if (status === 'completed' && (!loadedCharacter || loadedCharacter.length === 0)) {
        return (<NoCharactersFound />)
    }
    const character = DUMMY_QUOTES.find(character => character.userId === params.userId)
    
    if (!character) {
        return <p>No characters found!</p>
    }





    
    
    return (
        <HighlightedCharacter text={character.text} name={character.name} />
    );
};

export default CharacterDetail;