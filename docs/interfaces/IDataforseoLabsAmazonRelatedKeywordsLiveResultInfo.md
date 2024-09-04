[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRelatedKeywordsLiveItem.md)[]

contains objects with keywords and related data

#### Defined in

main.ts:102934

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:102932

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:102928

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:102926

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:102919

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:102921

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`AmazonKeywordData`](../classes/AmazonKeywordData.md)

keyword data for the seed keyword
fields in the object are identical to that of keyword_data

#### Defined in

main.ts:102924

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:102930
