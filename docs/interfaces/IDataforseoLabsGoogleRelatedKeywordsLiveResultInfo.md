[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](../classes/DataforseoLabsGoogleRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Defined in

main.ts:85698

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:85696

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:85692

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:85690

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:85683

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:85685

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: `object`

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:85688

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:85694
