[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HotelPriceInfo

# Class: HotelPriceInfo

## Implements

- [`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelPriceInfo()

> **new HotelPriceInfo**(`data`?): [`HotelPriceInfo`](HotelPriceInfo.md)

#### Parameters

• **data?**: [`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md)

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)

#### Defined in

main.ts:203972

## Properties

### check\_in?

> `optional` **check\_in**: `string`

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`check_in`](../interfaces/IHotelPriceInfo.md#check_in)

#### Defined in

main.ts:203957

***

### check\_out?

> `optional` **check\_out**: `string`

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`check_out`](../interfaces/IHotelPriceInfo.md#check_out)

#### Defined in

main.ts:203962

***

### currency?

> `optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`currency`](../interfaces/IHotelPriceInfo.md#currency)

#### Defined in

main.ts:203950

***

### discount\_text?

> `optional` **discount\_text**: `string`

text about a discount applied

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`discount_text`](../interfaces/IHotelPriceInfo.md#discount_text)

#### Defined in

main.ts:203952

***

### items?

> `optional` **items**: [`HotelPriceItemInfo`](HotelPriceItemInfo.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`items`](../interfaces/IHotelPriceInfo.md#items)

#### Defined in

main.ts:203968

***

### price?

> `optional` **price**: `number`

price per night

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`price`](../interfaces/IHotelPriceInfo.md#price)

#### Defined in

main.ts:203945

***

### price\_without\_discount?

> `optional` **price\_without\_discount**: `number`

full price per night without a discount applied

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`price_without_discount`](../interfaces/IHotelPriceInfo.md#price_without_discount)

#### Defined in

main.ts:203947

***

### visitors?

> `optional` **visitors**: `number`

number of hotel visitors for this price

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`visitors`](../interfaces/IHotelPriceInfo.md#visitors)

#### Defined in

main.ts:203964

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:203981

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:204009

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelPriceInfo`](HotelPriceInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)

#### Defined in

main.ts:204002
