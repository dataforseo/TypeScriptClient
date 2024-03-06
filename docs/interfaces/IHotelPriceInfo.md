[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IHotelPriceInfo

# Interface: IHotelPriceInfo

## Implemented by

- [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_in](IHotelPriceInfo.md#check_in)
- [check\_out](IHotelPriceInfo.md#check_out)
- [currency](IHotelPriceInfo.md#currency)
- [discount\_text](IHotelPriceInfo.md#discount_text)
- [items](IHotelPriceInfo.md#items)
- [price](IHotelPriceInfo.md#price)
- [price\_without\_discount](IHotelPriceInfo.md#price_without_discount)
- [visitors](IHotelPriceInfo.md#visitors)

## Properties

### check\_in

• `Optional` **check\_in**: `string`

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:193788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193788)

___


### check\_out

• `Optional` **check\_out**: `string`

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:193793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193793)

___


### currency

• `Optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Defined in

[main.ts:193781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193781)

___


### discount\_text

• `Optional` **discount\_text**: `string`

text about a discount applied

#### Defined in

[main.ts:193783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193783)

___


### items

• `Optional` **items**: [`HotelPriceItemInfo`](../classes/HotelPriceItemInfo.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

#### Defined in

[main.ts:193799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193799)

___


### price

• `Optional` **price**: `number`

price per night

#### Defined in

[main.ts:193776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193776)

___


### price\_without\_discount

• `Optional` **price\_without\_discount**: `number`

full price per night without a discount applied

#### Defined in

[main.ts:193778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193778)

___


### visitors

• `Optional` **visitors**: `number`

number of hotel visitors for this price

#### Defined in

[main.ts:193795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193795)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")