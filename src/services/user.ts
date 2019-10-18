import Api from './api'

export default {
  getTodos() {
    return Api().post('', {
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
    return Api().post('', {
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
  }
}