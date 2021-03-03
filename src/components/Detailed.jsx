import React, { Component } from 'react';

class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://stena-customers234324234.azurewebsites.net/api/getCustomers')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="App">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} &nbsp;&nbsp;
                                Id: {item.id} &nbsp;&nbsp;
                                Phonenumber: {item.phoneNumber} &nbsp;&nbsp;
                                Favorite season: {item.favoriteSeason} &nbsp;&nbsp;
                                Favorite Color: {item.favoriteColor}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Detailed;