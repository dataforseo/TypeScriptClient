[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRelatedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelatedKeywordsLiveItem`](../classes/DataforseoLabsRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Defined in

main.ts:119105

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:119103

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:119099

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:119097

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:119090

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:119092

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Defined in

main.ts:119095

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:119101
