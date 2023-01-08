import React, {useEffect, useState} from 'react';
import './App.css';
import {Card} from "./components/Card/Card";
import {CardLoading} from "./components/Card/CardLoading";

function App() {

    const [user, setUser] = useState({});

    useEffect(() => {

        const username = 'IAmTahazzot';

        // sending a req for user profile information
        fetch('https://api.github.com/users/' + username)
            .then(response => response.json())
            .then(data => {
                const {name, bio, avatar_url: url} = data;
                // @ts-ignore
                if (user.name === undefined) {
                    setTimeout(() => {
                        setUser((prev) => {
                            return {
                                name,
                                bio,
                                url
                            }
                        });
                    }, 2000)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div className="center">
            {
                // @ts-ignore
                user.name ? <Card name={user.name} url={user.url} bio={user.bio} />
                    : <CardLoading />
            }
        </div>
    );
}

export default App;
