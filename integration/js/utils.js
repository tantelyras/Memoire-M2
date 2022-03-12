const API_URL = "http://localhost:8888";
const FILE_URL = "http://localhost:9001/faces/";
function post(path, obj, cb) {
  axios.post(`${API_URL}/${path}`, obj).then(response => {
    cb(response);
  });
}

function get(path, cb) {
  axios.get(`${API_URL}/${path}`).then(response => {
    cb(response);
  });
}

function post_file(path, file, cb) {
  axios
    .post(`${API_URL}/${path}`, file, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      cb(response);
    });
}
