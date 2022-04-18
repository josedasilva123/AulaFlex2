import React from "react";
import './styles.css'

const Aside = () => {
  return (
    <aside class="Aside">
      <div class="Aside-formGrid">
        <form>
          <h2>Quer ser um programador?</h2>
          <input type="text" placeholder="Seu-email" />
          <button>#Bora!</button>
        </form>
      </div>
    </aside>
  );
};

export default Aside;
