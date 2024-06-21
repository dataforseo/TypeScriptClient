**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](../classes/DataforseoLabsGoogleRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Source

main.ts:84505

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:84503

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:84499

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:84497

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:84490

***

### seed\_keyword?

> **`optional`** **seed\_keyword**: `string`

keyword in a POST array

#### Source

main.ts:84492

***

### seed\_keyword\_data?

> **`optional`** **seed\_keyword\_data**: `Object`

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:84495

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:84501
