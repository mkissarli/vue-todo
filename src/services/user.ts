import Api from './api'

export default {
  getTodos() {
    return Api.call().post('', {
      query: `
        {
          me{
            todos{
              id
              text
              isCurrent
            }
          }
        }`
    });
  },
  addUser(username: string, password: string) {
    return Api.call().post('', {
      query: `
        mutation addUser($username: String!, $password: String!){
          addUser(username: $username, password: $password){
            code
            success
            message
            user {
              id
              username
              created
            }
            token
          }
        }`,
      variables:{
        username: username,
        password: password
      }
    })
  },
  loginUser(username: string, password: string){
    return Api.call().post('', {
      query: `
      query loginUser($username: String!, $password: String!){
        loginUser(username: $username, password: $password){
          code
          success
          message
          token
        }
      }`,
      variables: {
        username: username,
        password: password
      }
    })
  }
}