module.exports = class ZonedTimestamp {
  constructor (timestamp = new Date().getTime(), timezone = this.getLocalTimezone()) {
    this._timestamp = timestamp
    this._timezone = timezone
  }

  get timestamp () {
    return this._timestamp
  }
  get timezone () {
    return this._timezone
  }
  get date () {
    return this._timestamp ? new Date(+this._timestamp) : new Date()
  }

  /**
   * 
   * @returns {Number}
   * 获取本地时区
   * Get local time zone
   */
  getLocalTimezone () {
    return new Date().getTimezoneOffset() / 60
  }
  /**
   * 
   * @param {Number} anyTimezone 
   * @returns {Object} ZonedTimestamp
   * 根据时区参数，处理时间戳，返回一个新的 ZonedTimestamp 实例，然后即可调用 format()、timezone、timestamp、date 实例方法和属性
   * Process timestamps based on time zone parameters, return a new ZonedTimestamp instance, and then call format(), timezone, timestamp, date instance methods and properties
   */
  transform (anyTimezone = this._timezone) {
    let offset = this.getLocalTimezone() - anyTimezone
    let timestamp = +this._timestamp + 3600000 * (-offset)
    return new ZonedTimestamp(timestamp, anyTimezone)
  }
  /**
   * 
   * @param {String} template 
   * 根据模板字符串，返回符合模板格式的字符串
   * Returns a string that conforms to the template format based on the template string
   */
  format (template = 'YYYY.MM.DD hh:mm:ss') {
    let offset = this.getLocalTimezone() - this._timezone
    let date = Math.abs(offset) > 0 ? new Date(+this._timestamp + 3600000 * offset) : new Date(+this._timestamp)
    let object = {
      YYYY: date.getFullYear(),
      MM: date.getMonth() + 1,
      DD: date.getDate(),
      hh: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds()
    }
    return Object.keys(object).reduce((res, s) => {
      var fillZero = (object[s] + '').length === 1 ? '0' + object[s] : object[s]
      return res.replace(s, fillZero)
    }, template)
  }
}
