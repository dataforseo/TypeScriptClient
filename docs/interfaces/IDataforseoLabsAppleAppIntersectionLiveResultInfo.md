**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAppleAppIntersectionLiveResultInfo

# Interface: IDataforseoLabsAppleAppIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_ids?

> **`optional`** **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:114628

***

### items?

> **`optional`** **items**: [`DataforseoLabsleAppIntersectionLiveItem`](../classes/DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Source

main.ts:114638

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:114636

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:114632

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:114630

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:114626

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:114634
