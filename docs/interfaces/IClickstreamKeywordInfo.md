**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IClickstreamKeywordInfo

# Interface: IClickstreamKeywordInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### age\_distribution?

> **`optional`** **age\_distribution**: `Object`

distribution of clickstream-based metrics by age

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:82994

***

### gender\_distribution?

> **`optional`** **gender\_distribution**: `Object`

distribution of estimated clickstream-based metrics by gender

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:82992

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Source

main.ts:82990

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly clickstream search volume rates
array of objects with clickstream search volume rates in a certain month of a year

#### Source

main.ts:82997

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average clickstream search volume rate

#### Source

main.ts:82987
