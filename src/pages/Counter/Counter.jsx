import React, { Component } from 'react';
import { increase, decrease, reset } from 'actions/counter';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <div>counter:{this.props.counter.count}</div>
                <button onClick={() => {
                    this.props.increase();
                }}>add
                </button>
                <button onClick={() => {
                    this.props.decrease();
                }}>decrease
                </button>
                <button onClick={() => {
                    this.props.reset();
                }}> reset
                </button>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: () => {
            dispatch(increase())
        },
        decrease: () => {
            dispatch(decrease())
        },
        reset: () => {
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);