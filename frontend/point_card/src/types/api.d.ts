type BrandInfo = {
  id: string
  name: string
  hostName: string
  logo: string
  theme: {
    colors: {
      primary: string
      secondary: string
    }
  }
  links: {
    corporateSite: {
      text: string
      url: string
    }
    contact: {
      text: string
      url: string
    }
    signIn: {
      text: string
      url: string
    }
    signUp: {
      text: string
      url: string
    }
    signOut: {
      text: string
      url: string
    }
  }
  topUnAuthenticatePanel: {
    mainTextHtml: string
    subTextHtml: string
  }
}