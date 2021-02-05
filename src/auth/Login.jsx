import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [passwordhash, setPasswordHash] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/user/login/", {
            method: 'POST',
            body: JSON.stringify({username: username, passwordhash: passwordhash}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {console.log(data)
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="passwordhash">Password</Label>
                    <Input onChange={(e) => setPasswordHash(e.target.value)} name="passwordhash" value={passwordhash}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;