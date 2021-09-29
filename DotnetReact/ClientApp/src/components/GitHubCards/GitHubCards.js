import React from 'react';
import './GitHubCards.css';
 
const CardList = (props) => {
    return (
        <div>
            {props.profiles.map(profile => <Card key={ profile.id} {...profile} />)}
        </div>
    );
}

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt='' />
                <div className="info">
                    <div className='name'>{profile.name}</div>
                    <div className='company' >{profile.company}</div>
                </div>
            </div>
        )
    }
}

class Form extends React.Component {

    state = { username: '' };

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await fetch(`https://api.github.com/users/${this.state.username}`)
            .then( response  => response.json());

        this.props.onSubmit(resp);
        this.setState({ username: ''});

    };


    render() {
        return (
            <form onSubmit={this.handleSubmit }>
                <input
                    type='text'
                    value = {this.state.username}
                    onChange={event => this.setState({ username: event.target.value })}
                    placeholder='Github Username'
                    required />
                <button>Add Card</button>
            </form>
        );
    }
}

export class GitHubCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = { profiles: [] };
    }

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        })); 
    };

    render() {
        return (
            <>
                <Form onSubmit={this.addNewProfile }/>
                <CardList profiles={this.state.profiles} />
            </>
        );
    }
}