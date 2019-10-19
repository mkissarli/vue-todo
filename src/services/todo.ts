import Api from './api'

export default {
  editTodo(id: string, text: string) {
    return Api.call().post('', {
      query: `
        mutation editTodo($id: ID!, $text: String!){
          editTodo(id: $id , text: $text){
            code
            success
            message
            todo {
              text
              isCurrent
              id
            }
          }
        }`,
      variables: {
        id: id,
        text: text
      }
    });
  },
  deleteTodo(id: string) {
    return Api.call().post('', {
      query: `
        mutation deleteTodo($id: ID!){
          deleteTodo(id: $id){
            code
            success
            message
          }
        }
      `,
      variables: {
        id: id
      }
    });
  },
  addTodo(text: string) {
    return Api.call().post('', {
      query: `
        mutation addTodo($text: String!){
          addTodo(text: $text){
            code
            success
            message
            todo {
              id
              isCurrent
              text
            }
          }
        }
      `,
      variables:{
        text: text
      }
    });
  },
  toggleTodo(id: string) {
    return Api.call().post('', {
      query: `
        mutation toggleTodo($id: ID!){
          toggleTodo(id: $id){
            code
            success
            message
            todo {
              text
              isCurrent
              id
            }
          }
        }`,
      variables:{
        id: id
      }
    });
  }
}