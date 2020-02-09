import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class EstablishmentPage extends Component {

    componentDidMount() {
    }

    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <h2> EstablishmentPage </h2>
                </div>
            </nav>
        );

    }

}

function mapStateToProps(state) {
    return {
        cities: state.cities,
        establishments: state.establishments,
        selection: state.mySelect
    };
}

export default connect(mapStateToProps, actions )(EstablishmentPage);