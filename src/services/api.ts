import axios from 'axios'

export default class Api {
  static call() {
    return axios.create({
      baseURL: `http://localhost:3000/graphql`,
      withCredentials: false,
      headers: Api.headers
    });
  }
  static headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    //'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbGlrIiwiaWQiOiI1ZGE4NzhlYmZlZTU5MzQyYjBlMzllMWUiLCJpYXQiOjE1NzEzMjIwOTF9.8V3iVf2Ax7X4g7UImx5moxhXtXyk274S_j1c-HedBTg',
  }
}