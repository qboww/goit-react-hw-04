import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import css from "./Contact.module.css";

export const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactItem}>
        <p>
          <FaUser className={css.contactIcon} />
          {name}
        </p>

        <p>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
