import { getToken ,setToken,removeToken} from './index'

describe("test util token", () => {
  test('setToken == getToken', () => {
    let token = getToken()
    console.log("token:",token)
    expect(token).toBeFalsy()

    setToken("sajdklasjd")
    token = getToken()
    expect(token).toBe("sajdklasjd")
  })
})
