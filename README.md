# zoned-timestamp

zoned-timestamp 是一个将某一刻的时间戳，转为特定时区的显示时间的工具.

Zoned-timestamp is a tool that converts a certain timestamp to the display time of a specific time zone.

## keywords

zoned-timestamp time-zone timestamp

## License

MIT License

## Install

```bash
npm i -S zoned-timestamp
```

## Usage

```bash
const ZonedTimestamp = require('./index')

const INDIA_ZONE = -5.5

let timestamp = new Date('2019.5.15 18:00:00').getTime()

let zonedTimeStamp = new ZonedTimestamp(timestamp, INDIA_ZONE).transform().timestamp // 1557923400000
let zonedFormat = new ZonedTimestamp(timestamp, INDIA_ZONE).format('YYYY-MM-DD hh:mm:ss') // '2019-5-15 15:30:00'
```
## Demo
> Tip: 以下示例代码于中国北京(东8区)开发完成<br>
The following sample code was developed in Beijing, China (East 8 time zone)

<br>

> 将中国·北京（东8区）2019.5.15 18:00:00 这一时刻，转为处于世界上同一时刻的印度（东5.5区）的时间（即 2019.5.15 15:30:00）.
<br><br>
Change the time of China, Beijing (East 8 District), 209.5.15 18:00:00, to the time of India (East 5.5) at the same time in the world (ie 2019.5.15 15:30:00).

```bash
const ZonedTimestamp = require('./index')

const INDIA_ZONE = -5.5

let timestamp = new Date('2019.5.15 18:00:00').getTime()
let format = new ZonedTimestamp(timestamp, INDIA_ZONE).format('YYYY-MM-DD hh:mm:ss')

console.log(format)
```
<br>

> 中国时间为 2019.5.15 18:00:00 （时间戳：1557914400000）时，此刻印度时间为 2019.5.15 15:30:00（时间戳：1557914400000）。所以下面根据中国时间 2019.5.15 18:00:00 （时间戳：1557914400000），计算出印度时间 2019.5.15 18:00:00 （时间戳：??????）
<br><br>
When the time in China is 2019.5.15 18:00:00 (time stamp: 1557914400000), the time in India at the moment is 2019.5.15 15:30:00 (time stamp: 1557914400000). Therefore, according to China time 2019.5.15 18:00:00 (time stamp: 1557914400000), calculate the time of India 2019.5.15 18:00:00 (time stamp: ??????)

```bash
const ZonedTimestamp = require('./index')

const INDIA_ZONE = -5.5

let timestamp = new Date('2019.5.15 18:00:00').getTime()
let zonedTimestamp = new ZonedTimestamp(timestamp, INDIA_ZONE).transform().timestamp

console.log(zonedTimestamp)
```