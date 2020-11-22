import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "../components/Filter/Filter";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";
import { CSSTransition } from "react-transition-group";
import styles from "./styles/Contacts.module.css";
import alertStyles from "../components/Alert/Alert.module.css";
import Alert from "../components/Alert/Alert";
import contactSelectors from "../redux/contact/contactSelectors";
import contactOperations from "../redux/contact/contactOperations";

class ContactsView extends Component {
  state = {
    inList: false,
  };

  componentDidMount() {
    const { contacts, onFetchContacts } = this.props;
    if (contacts.length > 0) {
      return;
    }
    onFetchContacts();
  }

  handlerAlert = () => {
    this.setState({ inList: true });
    setTimeout(() => {
      this.setState({ inList: false });
    }, 2500);
  };

  render() {
    const { inList } = this.state;
    const { contacts, loading } = this.props;

    return (
      <section>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={styles}
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        <CSSTransition
          in={inList}
          timeout={250}
          classNames={alertStyles}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
        {loading && <Loader />}
        <section className={styles.container}>
          <ContactForm alert={this.handlerAlert}></ContactForm>
        </section>
        {contacts.length > 0 && (
          <>
            <br></br>
            <Filter />
            <ContactList />
          </>
        )}
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: contactSelectors.getContact(state),
  loading: contactSelectors.getLoading(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
