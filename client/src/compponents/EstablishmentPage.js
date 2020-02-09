import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link, Redirect} from "react-router-dom";

class EstablishmentPage extends Component {
    state = {flag: null};

    renderList() {
        return this.props.establishments.map(est => {
            return (
                <div className="item" key={est.establishment_id}>
                    <Link to="/restaurant" onClick={() => {
                        // this.props.fetchEstablishments({city_id: city.city_id});
                        // this.props.mySelect([city.city_id, null]);
                    }}>
                        <strong> {est.establishment_name} </strong>
                    </Link>
                </div>
            );
        });
    }

    render() {
        console.log(this.props);
        if (this.props.selection !== null && this.props.establishments !== null) {
            return (
                <nav>
                    <div className="nav-wrapper">
                        <h2> EstablishmentPage </h2>
                        <Link to="/">HomePage</Link>
                        {this.renderList()}
                    </div>
                </nav>
            );
        } else if (this.props.selection !== null && this.props.establishments == null ){
            return 'Processing....';
        }
        else {
            return (<Redirect to={'/'}/>)
        }
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
        establishments: state.establishments,
        selection: state.mySelect
    };
}

export default connect(mapStateToProps, actions)(EstablishmentPage);