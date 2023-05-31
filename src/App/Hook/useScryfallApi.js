import { useState } from "react";

function useScryfallApi(originalMethod) {
  const [method, setMethod] = useState(originalMethod);

  const sendRequest = (properties, postTreament) => {
    if (Object.keys(properties).length == 0) return null;

    let request = Object.entries(properties).map(
      (e) => e[0] + "=" + e[1].toLowerCase()
    );
    request = "https://api.scryfall.com/" + method + "?" + request.join("&");

    if (request) {
      if (postTreament)
        return fetch(request)
          .then((result) => result.json())
          .then((json) => postTreament(json));

      return fetch(request).then((result) => result.json());
    }

    return null;
  };

  return [sendRequest, setMethod];
}

export default useScryfallApi;
