import Api from './api'

export default {
    getTodos () {
        return Api().post('',{query:`
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
    }
}