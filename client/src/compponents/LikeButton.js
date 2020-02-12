import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Button from "@material-ui/core/Button";


class LikeButton extends Component {
    state = {isLike: false, dataModel:"default"};

    componentDidMount() {
        this.setState({dataModel: this.props.dataModel});
        const flag = localStorage.getItem(this.props.dataModel.res_id);
        this.setState({isLike:JSON.parse(flag)});
    }

    render() {
        switch (this.state.isLike) {
            case true:
                return (
                    <Button style={{float: 'right'}}
                            variant="contained"
                            size="medium"
                            color="primary"
                            onClick={() => {
                                this.setState({isLike: false});
                                let model = this.state.dataModel;
                                model.res_likes = -1;
                                this.props.addLikes(model);
                                localStorage.setItem(this.state.dataModel.res_id,'false');

                            }}>
                        <span role="img" aria-label="like">👍</span>
                        Likes
                    </Button>);
            default: {
                return (
                    <Button style={{float: 'right'}}
                            variant="contained"
                            size="medium"
                            onClick={() => {
                                this.setState({isLike: true});
                                let model = this.state.dataModel;
                                model.res_likes = 1;
                                this.props.addLikes(model);
                                localStorage.setItem(this.state.dataModel.res_id,'true');
                            }}>
                        Likes
                    </Button>

                );
            }
        }

    }
}


function mapStateToProps(state) {
    return {
        selection: state.mySelect,
        restaurants: state.restaurants,
    };
}

export default connect(mapStateToProps, actions)(LikeButton);

