
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffect = () => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((response) => {
                console.log(response.data.users);
                setImg(response.data.users);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section>
            <h1>Fetching Images from Dummy JSON API</h1>
            <h2>Images:</h2>
            <ol>
                {img.map((user) => (
                    <li key={user.id}>
                        <p>{user.firstName}</p>
                        <img src={user.image} alt={user.firstName} width="100" />
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default UseEffect;

/*import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
    const [text, setText] = useState("Kongu");

    useEffect(() => {
        setText("KEC");
    }, [text]);

    return (
        <section>
            <h1>UseEffect Example</h1>
            <input
                type="text"
                placeholder="Enter your text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h2>Text typed is: {text}</h2>
        </section>
    );
};

export default UseEffectExample;*/
