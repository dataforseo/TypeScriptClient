**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGooglePageIntersectionLiveResultInfo

# Interface: IDataforseoLabsGooglePageIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### exclude\_pages?

> **`optional`** **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Source

main.ts:102906

***

### items?

> **`optional`** **items**: [`DataforseoLabsGooglePageIntersectionLiveItem`](../classes/DataforseoLabsGooglePageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Source

main.ts:102916

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:102914

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:102910

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:102908

***

### pages?

> **`optional`** **pages**: `Object`

URLs you specified a POST array

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:102904

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:102902

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:102912
