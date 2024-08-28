[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesLiveResultInfo

# Interface: IBusinessDataGoogleHotelSearchesLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:209609

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:209614

***

### items?

> `optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](../classes/BusinessDataGoogleHotelSearchesItem.md)[]

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Defined in

main.ts:209620

***

### items\_count?

> `optional` **items\_count**: `number`

item types
the number of items in the items array

#### Defined in

main.ts:209617

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:209602

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:209606

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:209604
