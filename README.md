## Acknowledgements
This library is free software based on dayjs. We just make it simple for thailand format display and TS support.

## Getting Started

This library consists of 3 functions thaiDate, thaiTime, and thaiDay 

## Installation
using yarn
```
yarn add @to-da-moon/thai-date
```
using npm
```
npm i @to-da-moon/thai-date
```

## Example Usage

```
thaiDate(new Date())
// return date in Buddha year
// e.g. 2021-10-04 -> 04/10/2564
```

```
thaiDate(new Date())
// return thai time  
// e.g. Thu, 07 Oct 2021 11:00:00 GMT -> 18:00
```

```
thaiDay(new Date())
// return จันทร์
```

## Plan
- [x] get day of the week in Thai language
- [ ] We will make more simple case for thai people formatting which will include the date in thai language
