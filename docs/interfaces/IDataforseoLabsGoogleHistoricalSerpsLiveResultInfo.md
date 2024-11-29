[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:106607

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:106604

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Defined in

main.ts:106596

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:106600

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:106598

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:106593

***

### total\_count?

> `optional` **total\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:106602
