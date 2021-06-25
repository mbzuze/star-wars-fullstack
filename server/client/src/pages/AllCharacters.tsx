import { useEffect } from "react";
import CharacterList from "../components/character/CharacterList";
import NoCharactersFound from "../components/character/NoCharactersFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllCharacters } from "../lib/api";

const DUMMY_QUOTES: any[] = [
]
const Characters = () => {

    const { sendRequest, status, data: loadedCharacters, error} = useHttp(
        getAllCharacters,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <p className="centered focused">{error}</p>
        )
    }

    if (status === 'completed' && (!loadedCharacters || loadedCharacters.length === 0)) {
        return (<NoCharactersFound />)
    }

    return <CharacterList characters={DUMMY_QUOTES} />;
};

export  default Characters;