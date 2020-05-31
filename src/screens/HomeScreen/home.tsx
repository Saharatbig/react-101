import React from 'react';

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
                <h3>{message}</h3>
            </div>
        );
    }
}

export default HomeScreen;