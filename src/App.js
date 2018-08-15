import React, { Fragment, Component } from 'react';
import TypingTest from "./TypingTest";
import './App.scss';

class App extends Component {

    render() {
        return (
            <Fragment>
                <div className="section words">
                    <div className="typingtest">
                        <TypingTest />
                    </div>
                </div>

                <footer>
                    Built by <a href="http://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a> - Source code on <a href="https://github.com/Haydzyo/Typing-Speed-Test" target="_blank" rel="noopener noreferrer">GitHub</a>
                </footer>
            </Fragment>
        );
    }
}

export default App;
