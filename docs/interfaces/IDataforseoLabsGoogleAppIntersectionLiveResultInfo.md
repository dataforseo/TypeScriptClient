**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleAppIntersectionLiveResultInfo

# Interface: IDataforseoLabsGoogleAppIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_ids?

> **`optional`** **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:113765

***

### items?

> **`optional`** **items**: [`DataforseoLabsleAppIntersectionLiveItem`](../classes/DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Source

main.ts:113775

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:113773

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:113769

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:113767

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:113763

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:113771
