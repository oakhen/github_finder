/* 
*---------------------------------------------------------------- 
    Loading function
*---------------------------------------------------------------- 
*/

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

const tokens =
  "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"
export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const url = `https://api.github.com/search/users?${params}`
  // loading()
  const res = await fetch(
    url,

    {
      headers: {
        Authorization: `token ${tokens}`,
      },
    },
  )
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
      Authorization: `token ${tokens}`,
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
      Authorization: `token ${tokens}`,
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
