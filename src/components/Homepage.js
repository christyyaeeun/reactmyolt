import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import { Container, Typography } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <Container maxWidth="lg" className="Home">
                            <Outlet />

               <Container maxWidth="md" className="Home">
                </Container>
            </Container>
        );
    }
}

export default Home;