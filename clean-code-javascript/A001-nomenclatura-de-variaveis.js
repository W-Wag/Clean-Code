// Nomenclatura de variáveis

const categoryList = [
    {
      title: 'User',
      followers: 5
    },
    {
      title: 'Friendly',
      followers: 50,
    },
    {
      title: 'Famous',
      followers: 500,
    },
    {
      title: 'Super Star',
      followers: 1000,
    },
  ]
  
  export default async function getCategoryBasedOnFame(req, res) {
    const usernameInGithub = String(req.query.username)
  
    if (!usernameInGithub) {
      return res.status(400).json({
        message: `Please provide an username to search on the github API`
      })
    }
  
    const responseOfGithubFetch = await fetch(`https://api.github.com/users/${usernameInGithub}`);
  
    if (responseOfGithubFetch.status === 404) {
      return res.status(400).json({
        message: `User with username "${responseOfGithubFetch}" not found`
      })
    }
  
    const dataOfUserFound = await responseOfGithubFetch.json()
  
    const orderCategoryList = categoryList.sort((a, b) =>  b.followers - a.followers); 
  
    const fameCategory = orderCategoryList.find(i => dataOfUserFound.followers > i.followers)
  
    const resultOfUserAndYourFame = {
    dataOfUserFound,
    howFamousIs: fameCategory.title
    }
  
    return resultOfUserAndYourFame
  }
  
  getCategoryBasedOnFame({ query: {
    username: 'josepholiveira'
  }}, {}).then(responseOfCategoryFunction => console.log(responseOfCategoryFunction))