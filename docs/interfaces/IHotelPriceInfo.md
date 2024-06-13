**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelPriceInfo

# Interface: IHotelPriceInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_in?

> **`optional`** **check\_in**: `string`

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:202698

***

### check\_out?

> **`optional`** **check\_out**: `string`

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:202703

***

### currency?

> **`optional`** **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Source

main.ts:202691

***

### discount\_text?

> **`optional`** **discount\_text**: `string`

text about a discount applied

#### Source

main.ts:202693

***

### items?

> **`optional`** **items**: [`HotelPriceItemInfo`](../classes/HotelPriceItemInfo.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

#### Source

main.ts:202709

***

### price?

> **`optional`** **price**: `number`

price per night

#### Source

main.ts:202686

***

### price\_without\_discount?

> **`optional`** **price\_without\_discount**: `number`

full price per night without a discount applied

#### Source

main.ts:202688

***

### visitors?

> **`optional`** **visitors**: `number`

number of hotel visitors for this price

#### Source

main.ts:202705
