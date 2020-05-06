import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getNewsItem} from "../selectors";

class ModalNews extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        closeModal: PropTypes.func.isRequired,
        //from connect
        newsItem: PropTypes.object.isRequired
    };

    render() {
        const {id, closeModal, newsItem} = this.props;
        if (!id) return null;

        return (
            <div className="tm-modal-news" onClick={this.handleCloseAttempt}>
                <div className="tm-modal-close" onClick={closeModal}/>
                <div className="tm-modal">
                    <div className="tm-modal-content">
                        <h2>{newsItem.caption}</h2>
                        <img className="uk-width-1-1" src={require('../assets/images/'+ newsItem.fullImage)} alt=""/>
                        <p>{newsItem.fullText}</p>
                        <div className="tm-phone">
                            8-800-111-22-33
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    handleCloseAttempt = e => {
        if (e.target !== e.currentTarget) return;
        const {closeModal} = this.props;
        closeModal();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        newsItem: getNewsItem(state, ownProps)
    };
};

export default connect(mapStateToProps)(ModalNews);