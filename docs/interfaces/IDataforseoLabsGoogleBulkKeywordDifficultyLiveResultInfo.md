[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

# Interface: IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](../classes/DataforseoLabsBBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Defined in

main.ts:87800

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:87798

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:87794

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:87791

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:87788

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:87796
