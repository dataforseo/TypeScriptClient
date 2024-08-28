[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsBingRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRelatedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBingRelatedKeywordsLiveItem`](../classes/DataforseoLabsBingRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Defined in

main.ts:112606

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:112604

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:112600

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:112598

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:112591

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:112593

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordData`](../classes/KeywordData.md)

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Defined in

main.ts:112596

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:112602
