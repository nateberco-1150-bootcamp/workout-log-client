import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [passwordhash, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, passwordhash);
        fetch("http://localhost:4000/user/register/", {
            method: 'POST',
            body: JSON.stringify({username: username, passwordhash: passwordhash}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {console.log(data)
            props.updateToken(data.sessionToken)
        }).catch(error => console.log(error))
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="passwordhash">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="passwordhash" value={passwordhash}/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;