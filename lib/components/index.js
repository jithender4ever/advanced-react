import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        test: 1
    };

    asyncFunc = () => {
        return Promise.resolve(3);
    };

    async componentDidMount() {
        this.setState({
            test: await this.asyncFunc()
        })
    }

    render() {
        return (
            <div>
                Yo!
                {this.state.test}
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
