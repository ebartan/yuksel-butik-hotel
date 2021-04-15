import Prismic from 'prismic-javascript';


export const apiEndpoint = 'https://yukselbutikhotel.cdn.prismic.io/api/v2'
export const accessToken = 'MC5ZSGgxTUJBQUFDUUF6QmYt.V--_vVzvv70xLO-_ve-_ve-_ve-_vStb77-9IlDvv73vv70WLu-_ve-_ve-_vSLvv73vv70U77-9Zyvvv71BBw'

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}