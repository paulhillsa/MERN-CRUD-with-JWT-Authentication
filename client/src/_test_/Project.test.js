import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import axios from 'axios';

//Snapshot test for the App component
test('App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});


// unit test for the axios call
describe('axios call', () => {
    test('should return a promise', () => {
        expect(axios.get).toBeDefined();
    });
}
);