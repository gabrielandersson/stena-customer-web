import React from 'react';
import { Link } from 'react-router-dom'
import './configuration'
import './table.css'



class DetailedTableRow extends React.Component {
    render() {
        return (
            <>
                <table className="table table-striped table-sm col-sm-8">
                    <thead>
                        <tr>
                            <th>Detailed Customer View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{this.props.items.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{this.props.items.name}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{this.props.items.city}</td>
                        </tr>
                        <tr>
                            <th>Adress</th>
                            <td>{this.props.items.address}</td>
                        </tr>
                        <tr>
                            <th>Postal Code</th>
                            <td>{this.props.items.postalCode}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{this.props.items.phoneNumber}</td>
                        </tr>
                        <tr>
                            <th>Favorite Season</th>
                            <td>{this.props.items.favoriteSeason}</td>
                        </tr>
                        <tr className="LastRow">
                            <th className="LastRow">Favorite Color</th>
                            <td className="LastRow">{this.props.items.favoriteColor}</td>
                        </tr>
                    </tbody>
                </table>
                <Link className="text-secondary" to={"/"}> <strong>Back</strong></Link>
            </>
        );
    }
}
export default DetailedTableRow