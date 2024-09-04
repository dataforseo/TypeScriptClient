[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:98444

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:98442

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:98434

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:98438

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:98436

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:98431

***

### total\_count?

> `optional` **total\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:98440
