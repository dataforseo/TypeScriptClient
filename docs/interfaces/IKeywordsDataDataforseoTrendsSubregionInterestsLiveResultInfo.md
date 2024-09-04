[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

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

main.ts:126554

***

### items?

> `optional` **items**: [`BaseDataforseoTrendsItem`](../classes/BaseDataforseoTrendsItem.md)[]

keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region

#### Defined in

main.ts:126559

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:126556

***

### keywords?

> `optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:126541

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:126549

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:126546

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:126543
