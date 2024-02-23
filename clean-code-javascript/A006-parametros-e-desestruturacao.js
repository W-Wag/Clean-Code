function updateUserRoute({body, params}) {
    updateUserController(
        {
         data: body,
         params
        }
    )
  }
  
  function updateUserController({data, params}) {
    userRepository.update({
      data,
      params
    })
  }
  
  const userRepository = {
    update: (data, params) => {
      return {
        data,
        params
      }
    },
  }