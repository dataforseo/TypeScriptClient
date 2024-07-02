**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsBingRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRelatedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsBingRelatedKeywordsLiveItem`](../classes/DataforseoLabsBingRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Source

main.ts:110959

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:110957

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:110953

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:110951

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:110944

***

### seed\_keyword?

> **`optional`** **seed\_keyword**: `string`

keyword in a POST array

#### Source

main.ts:110946

***

### seed\_keyword\_data?

> **`optional`** **seed\_keyword\_data**: [`KeywordDataKeywordDataInfo`](../classes/KeywordDataKeywordDataInfo.md)

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Source

main.ts:110949

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:110955
