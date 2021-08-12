export default class Comments {
  constructor() {
    this.id = null;
    this.flag = true;
  }

  async setId(id) {
    const tokenId = 'l1XEeeRJqWJBU1EqT3Cz';
    this.id = tokenId;
  }

  getId() {
    return this.id;
  }

  createComment = async (name) => {
    const userName = {
      name,
    };
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    const response = await this.fetchApi(url, 'POST', userName);
    if (this.flag === false) {
      document.getElementById('error').textContent = 'Bad Request, Please Try Again!!!';
      setTimeout(() => {
        document.getElementById('error').innerHTML = '';
      }, 1000);
    } else {
      this.setId(response);
    }
  }

  displayComments = async () => {
    if (this.id !== null) {
      const commentsList = document.querySelector('.comment-listt');
      while (commentsList.firstChild) {
        commentsList.removeChild(commentsList.firstChild);
      }
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${encodeURIComponent(this.id)}/comments/`;
      const response = await this.fetchApi(url, 'GET');
      response.forEach((element) => {
        const item = document.createElement('p');
        item.className = 'commentsList-items';
        item.id = 'commentsList-items';
        item.textContent = `${element.user}:${element.comments}`;
        commentsList.appendChild(item);
      });
    }
  }

  addComments = async () => {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment-text').value;
    if (name === '' || score === '') {
      document.querySelector('.error').textContent = 'Please provide a value for game name and score';
      setTimeout(() => {
        document.querySelector('.error').innerHTML = '';
      }, 1000);
      return false;
    }
    if (this.id !== null) {
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${encodeURIComponent(this.id)}/comments/`;
      const newComment = {
        user: document.getElementById('name').value,
        comment: document.getElementById('comment-text').value,
      };
      const response = await this.fetchApi(url, 'POST', newComment);
      if (response.result === 'abc234') {
        const scoresList = document.getElementById('ulList');
        const item = document.createElement('p');
        item.className = 'commentsList-items';
        item.id = 'commentsList-items';
        item.textContent = `${element.user}:${element.comments}`;
        commentsList.appendChild(item);
      }
    }
    return true;
  }

  fetchApi = async (url, method, jsonBody = null) => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,GET',
      },
      method,
      body: jsonBody !== null ? JSON.stringify(jsonBody) : String.empty,
    }).then((res) => res.json().then((data) => data))
      .catch(() => {
        this.flag = false;
      });
    return response;
  }
}