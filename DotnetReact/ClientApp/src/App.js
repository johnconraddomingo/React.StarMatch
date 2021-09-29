import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ButtonCounter } from './components/ButtonCounter/ButtonCounter';
import { GitHubCards } from './components/GitHubCards/GitHubCards';
import { StarMatch } from './components/StarMatch/StarMatch';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/button-counter' component={ButtonCounter} />
                <Route path='/github-cards' component={GitHubCards} />
                <Route path='/star-match' component={StarMatch} />
            </Layout>
        );
    }
}
