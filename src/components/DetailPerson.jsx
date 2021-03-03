import React, { Component } from 'react';
import config from 'react-global-configuration';
import DetailedTableRow from './detailedTableRow'
import './configuration'
import './table.css'


class DetailPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            isLoaded: false,
            id: props.match.params.id,
        }
    }
    componentDidMount() {
        fetch(config.get('dbUrl') + "getCustomers?id=" + this.state.id)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    customers: res,
                    isLoaded: true,
                })
            })
    }
    render() {
        var { isLoaded, customers } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div>
                    {customers.map((person, i) => <DetailedTableRow key={i}
                        items={person} />)}
                </div>
            );
        }
    }
}


export default DetailPerson;