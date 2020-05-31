import React from 'react';
import './home.scss'

interface Props { }

interface State {
    message: String,
}

class HomeScreen extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            message: '',
        }
    }

    componentDidMount() {
        this.setState({ message: 'welcome to home screen' })
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h3 className="color-red">{message}</h3>
            </div>
        );
    }
}

export default HomeScreen;