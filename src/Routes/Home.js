import React from 'react';
import {withRouter} from 'react-router-dom';
import Test from 'src/Components/test';

function Home(props){

    return <div>
        <Test />
    </div>
}
export default withRouter(Home);