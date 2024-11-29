[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

# Interface: IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkKeywordDifficultyLiveItem`](../classes/DataforseoLabsBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Defined in

main.ts:115457

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:115455

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:115451

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:115448

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:115445

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:115453
