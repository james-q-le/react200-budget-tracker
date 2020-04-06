import React from 'react';

import {
  updateIncomeDescription,
  updateIncomeAmount,
  addIncome
} from './incomeActions';

export default class IncomeEntries extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleAmount= this.handleAmount.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeDescription(value));
  }

  handleAmount(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeAmount(value));
  }

  handleAdd() {
    const { description, amount, dispatch } = this.props;
    dispatch(addIncome(description, amount));
  }

  render() {
    const { description, amount, lineItems } = this.props;
    return (
      <div className='card border-success mb-3'>
        <div className='card-hedaer text-white bg-success'>Income Entries</div>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='income-description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='income-description'
                value = {description}
                onChange = {this.handleInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='income-amount'>Amount</label>
              <div className='input-group'>
                <span className='input-group-addon'>$</span>
                <input
                  type='text'
                  className='form-control'
                  id='income-amount'
                  value = {amount}
                  onChange = {this.handleAmount}
                />
              </div>
            </div>
            <button
              type='button'
              className='btn btn-success col-12 mb-5'
              onClick={this.handleAdd}
            >+ Add Income
            </button>
            <table className='table table-sm table-hover'>
              <thead>
                <tr>
                  <th>Description</th>
                  <th style={ { width: 120 } } >Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  lineItems.map(lineItem => (
                    <tr>
                      <td>{ lineItem.description }</td>
                      <td>${ lineItem.amount.toFixed(2) }</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </form>
        </div>
      </div>
    )
  }
}