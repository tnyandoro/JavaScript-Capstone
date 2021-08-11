const BASE_URL = 'https://foodish-api.herokuapp.com/';

const INVOLVEMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const USER_COMMENT = 'user';
const USER_ID = 'l1XEeeRJqWJBU1EqT3Cz';

export const addComment = async (user, comment) => {
  const data = {};
  data.user = user;
  data.comment = comment;
  const result = await fetch(`${INVOLVEMENT_URL}/api/${USER_ID}/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  return result;
};

export const getComments = async () => {
  const result = await fetch(`${INVOLVEMENT_URL}/api/${USER_ID}/comments`)
    .then((response) => response.json());
  return result;
};