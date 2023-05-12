import { useState } from "react";

export function NavMain({ setUrl }) {
  return (
    <nav>
      <ul>
        <li>
          <Link setUrl={setUrl} url="home">
            Ana Sayfa
          </Link>
        </li>

        <li>
          <Link setUrl={setUrl} url="passing-props">
            Özellik Transferi
          </Link>
        </li>

        <li>
          <Link setUrl={setUrl} url="conditional-rendering">
            Koşullu Render Etme
          </Link>
        </li>

        <li>
          <Link setUrl={setUrl} url="rendering-lists">
            Liste Render Etmek
          </Link>
        </li>

        <li>
          <Link setUrl={setUrl} url="pure">
            Saf komponentler
          </Link>
        </li>

        <li>
          <Link setUrl={setUrl} url="responding-to-event">
            Eventlere yanıt vermek
          </Link>
        </li>

        <li>
          <Link setUrl={setUrl} url="ComponentMemory">
            Komponent'in hafızası
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Link({ setUrl, url, children }) {
  function handleClick(e) {
    e.preventDefault();
    setUrl(url);
  }
  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
}
