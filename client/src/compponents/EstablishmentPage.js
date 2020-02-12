import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link, Redirect} from "react-router-dom";

class EstablishmentPage extends Component {

    componentDidMount() {
        this.props.cleanRes();
    }

    renderList() {
        return this.props.establishments.map(est => {
            return (
                <div className="item" key={est.establishment_id}>
                    <Link to="/restaurant" onClick={async () => {
                        this.props.mySelect([this.props.selection[0], est.establishment_id]);
                        await this.props.searchRes({
                            city_id: this.props.selection[0],
                            establishment_id: est.establishment_id
                        })
                    }}>
                        <strong> {est.establishment_name} </strong>
                    </Link>
                    <br/><br/>
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
                        <br/><br/>
                        {this.renderList()}
                    </div>
                </nav>
            );
        } else if (this.props.selection !== null && this.props.establishments == null) {
            return 'Processing....';
        } else {
            return (<Redirect to={'/'}/>)
        }
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
        establishments: state.establishments,
        selection: state.mySelect,
        restaurants: state.restaurants
    };
}

export default connect(mapStateToProps, actions)(EstablishmentPage);