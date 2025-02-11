[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

Defined in: main.ts:137752

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:137767

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`DataforseoTrendsDemographyInfo`](../classes/DataforseoTrendsDemographyInfo.md)[]

Defined in: main.ts:137771

contains keyword popularity and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:137769

the number of results returned in the items array

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:137754

keywords in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:137762

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:137759

location code in a POST array
if there is no data, then the value is null

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:137756

type of element
