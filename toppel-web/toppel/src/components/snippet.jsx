import React, { Component } from 'react';
import axios from 'axios';

class Snippet extends Component {
    state = {  }
    render() { 
        async function getGithubData() {
            return await axios.get('https://api.github.com/repos/jardon/toppel');
        }

        let data = getGithubData();

        console.log(axios.get('https://api.github.com/repos/jardon/toppel'));
        // var clone = 'initial';

        let output = async () => await axios.get('https://api.github.com/repos/jardon/toppel');
        // var data = JSON.parse(output);
        console.log(data);


        return ( <h1>Hello World</h1>  );
    }
}
 
export default Snippet;