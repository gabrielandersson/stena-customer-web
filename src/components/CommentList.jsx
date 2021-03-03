import React, { Component } from 'react';

export default class CommentList extends Component {
    render() {
        return (
            <>
                {this.props.data.map(person =>
                    <tr key={person.id}>
                        <td><a href={"/detailPerson/" + person.id} className="text-secondary">{person.id}</a></td>
                        <td><a href={"/detailPerson/" + person.id} className="text-secondary">{person.name}</a></td>
                    </tr>
                )
                }
            </>
        );
    }
}