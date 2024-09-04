[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IHotelPriceInfo

# Interface: IHotelPriceInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_in?

> `optional` **check\_in**: `string`

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:204045

***

### check\_out?

> `optional` **check\_out**: `string`

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:204050

***

### currency?

> `optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Defined in

main.ts:204038

***

### discount\_text?

> `optional` **discount\_text**: `string`

text about a discount applied

#### Defined in

main.ts:204040

***

### items?

> `optional` **items**: [`HotelPriceItemInfo`](../classes/HotelPriceItemInfo.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

#### Defined in

main.ts:204056

***

### price?

> `optional` **price**: `number`

price per night

#### Defined in

main.ts:204033

***

### price\_without\_discount?

> `optional` **price\_without\_discount**: `number`

full price per night without a discount applied

#### Defined in

main.ts:204035

***

### visitors?

> `optional` **visitors**: `number`

number of hotel visitors for this price

#### Defined in

main.ts:204052
