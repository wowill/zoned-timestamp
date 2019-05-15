const ZonedTimestamp = require('./index')

const CHINA_ZONE = -8
const INDIA_ZONE = -5.5

/**
 * 此次测试，位于中国·北京（东8区），因此使用其他时区作为时间转换的目标时区，这里采用印度时区（东5.5区）作为目标.
 * 实验数据 时间戳：1557914400000， 中国时间 2019.5.15 18:00:00 <=> 印度时间 2019.5.15 15:30:00
 * 
 * tips: 时间戳是没有时区概念的，因此不同地区的时间不用，是时区划分所造成的
 * 
 */

test('测试 东8区 => 东5.5区, 返回东5.5区时区标准的时间戳', () => {
  expect(new ZonedTimestamp(1557914400000, INDIA_ZONE).transform().timestamp).toBe(1557923400000)
})

test('测试 东8区 => 东5.5区, 返回东8区时区标准的印度时间字符串', () => {
  expect(new ZonedTimestamp(1557914400000, INDIA_ZONE).format('YYYY-MM-DD hh:mm:ss')).toBe('2019-05-15 15:30:00')
})
