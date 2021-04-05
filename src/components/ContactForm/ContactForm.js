import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook-actions';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    submitHandler: PropTypes.func.isRequired,
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = uuidv4();
    const { name, number } = this.state;
    const { items } = this.props;

    if (!name) {
      return;
    }

    const existingContact = items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts.`);
      return;
    }

    const newContact = { id, name, number };

    this.props.submitHandler(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  submitHandler: contact => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
