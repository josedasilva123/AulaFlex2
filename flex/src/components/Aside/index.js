import React, {useState} from "react";
import './styles.css'
import { SubmitButton, EventButton } from "../Global/Buttons";

const Aside = () => {
  const [loading, setLoading] = useState(false);
  return (
    <aside class="Aside">
      <div class="Aside-formGrid">
        <form>
          <h2>Quer ser um programador?</h2>
          <input type="text" placeholder="Seu-email" />
          <EventButton loading={loading} buttonStyle="outline1" onClick={() => alert('Deu boa')}>#Bora!</EventButton>
        </form>
      </div>
    </aside>
  );
};

export default Aside;
