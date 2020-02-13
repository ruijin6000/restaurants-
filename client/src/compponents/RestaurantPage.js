import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link, Redirect} from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LikeButton from './LikeButton';

class RestaurantPage extends Component {

    renderList() {
        return this.props.restaurants.map(res => {
            return (
                <div className="item" key={res.res_id}>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <strong>  {res.res_name} </strong>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>
                            <div style={{width: '100%'}}>
                                <div style={{float: 'left'}}>
                                    <strong>Address: </strong> {res.address}
                                    <div></div>
                                    <strong>Cuisines: </strong> {res.cuisines}
                                </div>
                                <LikeButton
                                    dataModel={{
                                        res_id: res.res_id, res_name: res.res_name,
                                        res_add: res.address, res_cus: res.cuisines,
                                    }}/>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br/>

                </div>
            );
        });
    }

    render() {
        if (this.props.selection !== null && this.props.restaurants !== null) {
            return (
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/">Home</Link>
                        <h2> RestaurantPage </h2>
                        {this.renderList()}
                    </div>
                </nav>
            );
        } else if (this.props.selection !== null && this.props.restaurants == null) {
            return "Processing...."
        } else {
            return (<Redirect to={'/'}/>)
        }
    }

}

function mapStateToProps(state) {
    return {
        selection: state.mySelect,
        restaurants: state.restaurants
    };
}

export default connect(mapStateToProps, actions)(RestaurantPage);