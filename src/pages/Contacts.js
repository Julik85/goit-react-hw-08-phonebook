import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getIsLoading } from "redux/contacts/selectors";


export default function Contacts () {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
        <Helmet>
            <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <div>
            {isLoading && 'Recuest in progress...'}
        </div>
        <Filter />
        <ContactList />
        </>
    )
}