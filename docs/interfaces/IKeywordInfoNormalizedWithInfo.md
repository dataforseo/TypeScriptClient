[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordInfoNormalizedWithInfo

# Interface: IKeywordInfoNormalizedWithInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Defined in

main.ts:82847

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly clickstream search volume rates
array of objects with clickstream search volume rates in a certain month of a year

#### Defined in

main.ts:82852

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average clickstream search volume rate

#### Defined in

main.ts:82849
