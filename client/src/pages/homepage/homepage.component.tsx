import "./homepage.styles.scss";

import {server} from '../../lib/api/server';
import {PersonsData} from './types';
const PEOPLE = `
    query People{
        allPersons {
            userId
            name
            height
        }
    }

`;
interface Props {
    title: string;
}
export const HomePage = (props: Props) => {
    const fetchPeople = async () => {
        const {data} = await server.fetch<PersonsData>({ query: PEOPLE });

        console.log(data.allPersons);
    }
    return (
        <div className="homepage">
            <h1 className="title">{props.title}</h1> 
            <button onClick={fetchPeople}>Get List</button>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title stuff</h1> 
                        <span className="subtitle">sretgf</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title stuff</h1> 
                        <span className="subtitle">sretgf</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title stuff</h1> 
                        <span className="subtitle">sretgf</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title stuff</h1> 
                        <span className="subtitle">sretgf</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title stuff</h1> 
                        <span className="subtitle">sretgf</span>
                    </div>
                </div>
            </div>
        </div>
        
    );
};