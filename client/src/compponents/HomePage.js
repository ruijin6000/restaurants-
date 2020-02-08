import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class HomePage extends Component {

    componentDidMount() {
        this.props.fetchName();

    }

    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <h2>  HomePage  </h2>
                    {/*{this.props.cities}*/}
                    <a href="/api/test">Request Data Version 2</a>
                    {/*<button onClick={this.props.handleToken({temp: 'aappss'})} > Post </button>*/}
                </div>
            </nav>
        );

    }

}

function mapStateToProps(state) {
    console.log("state is "+ state);
    return { cities: state.cities};
}

export default connect(mapStateToProps, actions )(HomePage);