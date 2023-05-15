/* 
*---------------------------------------------------------------- 
    Loading function
*---------------------------------------------------------------- 
*/
const token = "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"
export const loading = () => {
  dispatch({
    type: "SET_LOADING",
  })
}

/* 
*---------------------------------------------------------------- 
    SEARCH USER
*---------------------------------------------------------------- 
*/
export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const url = `https://api.github.com/search/users?${params}`
  // loading()
  const res = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
  const { items } = await res.json()

  return items
}

/* 
*---------------------------------------------------------------- 
    GET REPO
*---------------------------------------------------------------- 
*/

export const getRepo = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  })

  const url = `https://api.github.com/users/${login}/repos?${params}`

  const res = await fetch(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_TOKEN}`,
    },
  })
  const data = await res.json()

  return data
}

/* 
*---------------------------------------------------------------- 
    GET USERS
*---------------------------------------------------------------- 
*/
export const getUser = async (login) => {
  const url = `https://api.github.com/users/${login}`

  const res = await fetch(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_TOKEN}`,
    },
  })

  if (res.status === 404) {
    window.location = "/notFound"
  } else {
    const data = await res.json()
    return data
  }
}

/* next we will combine get user and get repo list into a single function and then we will use axios and the we will deploy
 then may be may be recreate the entire app one more time.
*/
