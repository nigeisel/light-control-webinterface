//const HOST = "https://localhost"
const HOST = document.location.host;
const PORT = document.location.port;
const API = HOST + "/api/";

// only dev:
const SECRET = "2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b";
const USER = 0;

export default function toggleLights(what, state) {
    // eslint-disable-next-line
    var target = API + "lights/" + "?" + "what=" + what + "&" + "state=" + state
    fetch(target, {
      method: 'GET',
      headers: {
        'user': USER,
        'password': SECRET,
      }
    })
}
