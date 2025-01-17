[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordInfoNormalizedWithInfo

# Interface: IKeywordInfoNormalizedWithInfo

Defined in: main.ts:92657

## Indexable

\[`key`: `string`\]: `any`

## Properties

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:92660

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:92665

monthly clickstream search volume rates
array of objects with clickstream search volume rates in a certain month of a year

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:92662

monthly average clickstream search volume rate
