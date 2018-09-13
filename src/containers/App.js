import React, { Component } from 'react';
import CounterListContainer from '../containers/CounterListContainer';
import Buttons from '../components/Buttons';
import getRandomColor from '../lib/getRandomColor';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

    render() {
        const { onCreate, onRemove} = this.props;
        return (
            <div>
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapDispatchToProps)(App);