[Documentation](../README.md) / [Exports](../modules.md) / HotelPriceInfo

# Class: HotelPriceInfo

## Implements

- [`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelPriceInfo.md#constructor)

### Properties

- [check\_in](HotelPriceInfo.md#check_in)
- [check\_out](HotelPriceInfo.md#check_out)
- [currency](HotelPriceInfo.md#currency)
- [discount\_text](HotelPriceInfo.md#discount_text)
- [items](HotelPriceInfo.md#items)
- [price](HotelPriceInfo.md#price)
- [price\_without\_discount](HotelPriceInfo.md#price_without_discount)
- [visitors](HotelPriceInfo.md#visitors)

### Methods

- [init](HotelPriceInfo.md#init)
- [toJSON](HotelPriceInfo.md#tojson)
- [fromJS](HotelPriceInfo.md#fromjs)

## Constructors

### constructor

• **new HotelPriceInfo**(`data?`): [`HotelPriceInfo`](HotelPriceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md) |

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)

#### Defined in

main.ts:193835

## Properties

### check\_in

• `Optional` **check\_in**: `string`

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[check_in](../interfaces/IHotelPriceInfo.md#check_in)

#### Defined in

main.ts:193820

___

### check\_out

• `Optional` **check\_out**: `string`

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[check_out](../interfaces/IHotelPriceInfo.md#check_out)

#### Defined in

main.ts:193825

___

### currency

• `Optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[currency](../interfaces/IHotelPriceInfo.md#currency)

#### Defined in

main.ts:193813

___

### discount\_text

• `Optional` **discount\_text**: `string`

text about a discount applied

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[discount_text](../interfaces/IHotelPriceInfo.md#discount_text)

#### Defined in

main.ts:193815

___

### items

• `Optional` **items**: [`HotelPriceItemInfo`](HotelPriceItemInfo.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[items](../interfaces/IHotelPriceInfo.md#items)

#### Defined in

main.ts:193831

___

### price

• `Optional` **price**: `number`

price per night

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[price](../interfaces/IHotelPriceInfo.md#price)

#### Defined in

main.ts:193808

___

### price\_without\_discount

• `Optional` **price\_without\_discount**: `number`

full price per night without a discount applied

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[price_without_discount](../interfaces/IHotelPriceInfo.md#price_without_discount)

#### Defined in

main.ts:193810

___

### visitors

• `Optional` **visitors**: `number`

number of hotel visitors for this price

#### Implementation of

[IHotelPriceInfo](../interfaces/IHotelPriceInfo.md).[visitors](../interfaces/IHotelPriceInfo.md#visitors)

#### Defined in

main.ts:193827

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:193844

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:193872

___

### fromJS

▸ **fromJS**(`data`): [`HotelPriceInfo`](HotelPriceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)

#### Defined in

main.ts:193865
