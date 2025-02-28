[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

Defined in: main.ts:106791

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

Defined in: main.ts:106807

additional items present in the element
if there are none, equals null

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:106804

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:106796

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:106800

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:106798

location code in a POST array

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:106793

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:106802

the number of results returned in the items array
