[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:130355

***

### items?

> `optional` **items**: [`DataforseoTrendsDemographyInfo`](../classes/DataforseoTrendsDemographyInfo.md)[]

contains keyword popularity and related data

#### Defined in

main.ts:130359

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:130357

***

### keywords?

> `optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:130342

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:130350

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:130347

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:130344
