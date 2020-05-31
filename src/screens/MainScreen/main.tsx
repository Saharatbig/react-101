import React from 'react'

interface Props { }

interface State {
    message: String,
}

class MainScreen extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            message: '',
        }
    }

    componentDidMount() {
        this.setState({ message: 'Welcome to main page' })
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h3>{message}</h3>
            </div>
        )
    }
}

export default MainScreen;