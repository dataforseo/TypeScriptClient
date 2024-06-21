**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Source

main.ts:96729

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:96727

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:96719

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:96723

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:96721

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:96716

***

### total\_count?

> **`optional`** **total\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:96725
