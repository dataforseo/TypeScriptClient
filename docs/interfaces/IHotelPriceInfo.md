[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelPriceInfo

# Interface: IHotelPriceInfo

Defined in: main.ts:217800

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_in?

> `optional` **check\_in**: `string`

Defined in: main.ts:217814

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### check\_out?

> `optional` **check\_out**: `string`

Defined in: main.ts:217819

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:217807

price currency
USD is applied by default, unless specified in the POST array

***

### discount\_text?

> `optional` **discount\_text**: `string`

Defined in: main.ts:217809

text about a discount applied

***

### items?

> `optional` **items**: [`HotelPriceItemInfo`](../classes/HotelPriceItemInfo.md)[]

Defined in: main.ts:217825

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:217802

price per night

***

### price\_without\_discount?

> `optional` **price\_without\_discount**: `number`

Defined in: main.ts:217804

full price per night without a discount applied

***

### visitors?

> `optional` **visitors**: `number`

Defined in: main.ts:217821

number of hotel visitors for this price
