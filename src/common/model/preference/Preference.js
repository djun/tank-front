import BaseEntity from '../base/BaseEntity'

export default class Preference extends BaseEntity {
  constructor (args) {
    super(args)
    //网站名称
    this.name = null

    //logo
    this.logoUrl = null
    this.faviconUrl = null

    //底部第一行文字
    this.footerLine1 = null
    this.footerLine2 = null


    this.validatorSchema = {
      name: {
        rules: [{required: true, message: '网站名称必填'}],
        error: null
      }
    }
  }

  static URL_API_PREFERENCE_FETCH = '/preference/fetch'

  render (obj) {
    super.render(obj)
  }

  getForm () {
    return {
      name: this.name,
      logoUrl: this.logoUrl,
      faviconUrl: this.faviconUrl,
      footerLine1: this.footerLine1,
      footerLine2: this.footerLine2
    }
  }

  validate(){

    return super.validate()
  }

  httpFetch (successCallback, errorCallback) {
    let that = this
    this.httpPost(Preference.URL_API_PREFERENCE_FETCH,{},function (response) {
      that.render(response.data.data)
      typeof successCallback === 'function' && successCallback(response)
    },errorCallback)
  }

}
