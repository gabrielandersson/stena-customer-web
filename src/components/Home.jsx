import React, { Component } from 'react';
import config from 'react-global-configuration';
import ReactPaginate from 'react-paginate';
import CommentList from './CommentList'
import './configuration'
import i18n from '../i18n';

class Home extends Component {
    state = {
        customers: [],
        offset: 0,
        perPage: 9,
        isLoaded: false,
    }
    loadCustomersFromServer() {
        fetch(config.get('dbUrl') + 'getCustomers')
            .then(res => res.json())
            .then(res => {
                let customers = [];
                for (var i = this.state.offset; i < (this.state.offset + this.state.perPage); i++) {
                    if (res[i] === undefined) {
                        break;
                    }
                    customers.push(res[i]);
                }
                this.setState({
                    customers: customers,
                    pageCount: Math.ceil(res.length / this.state.perPage),
                    isLoaded: true
                })
            });
    }

    componentDidMount() {
        this.loadCustomersFromServer();
    }

    handlePageClick = (e) => {
        let selectedPage = e.selected;
        let offset = Math.ceil(selectedPage * this.state.perPage);

        this.setState({ offset: offset }, () => {
            this.loadCustomersFromServer()
        });
    };

    render() {
        localStorage.clear();
        var { isLoaded, customers } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="container">
                    <table className="table table-striped table-hover col-sm-12 ">
                        <tbody>
                            <CommentList data={customers} />
                        </tbody>
                    </table>
                    <ReactPaginate
                        previousLabel={Object.values(i18n.t('buttonPrev', { returnObjects: true }))}
                        nextLabel={Object.values(i18n.t('buttonNext', { returnObjects: true }))}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
                </div>
            );
        }
    }
}

export default Home;