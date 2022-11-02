import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>Secret about us!!! {user?.name}</h2>
        </div>
    );
};

export default About;