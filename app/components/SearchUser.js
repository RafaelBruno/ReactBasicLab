import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GitHubService from '../services/GitHubService';

class SearchUser extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        GitHubService.getByUsername(this.refs.username.value)
            .then((res) => {
                this.props.updateUser(res.data)
            })
            .catch((err) => {
                console.error(err);
            })

        GitHubService.getReposByUsername(this.refs.username.value)
            .then((res) => {
                this.props.updateRepos(res.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form className="col-lg-12" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            ref="username"
                            className="form-control"
                            placeholder="Ex: matheusml"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">Buscar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

SearchUser.propTypes = {
    updateUser: PropTypes.func.isRequired,
    updateRepos: PropTypes.func.isRequired
}
export default SearchUser;