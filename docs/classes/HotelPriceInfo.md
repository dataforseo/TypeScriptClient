[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelPriceInfo

# Class: HotelPriceInfo

Defined in: main.ts:217210

## Implements

- [`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelPriceInfo()

> **new HotelPriceInfo**(`data`?): [`HotelPriceInfo`](HotelPriceInfo.md)

Defined in: main.ts:217239

#### Parameters

##### data?

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md)

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)

## Properties

### check\_in?

> `optional` **check\_in**: `string`

Defined in: main.ts:217224

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`check_in`](../interfaces/IHotelPriceInfo.md#check_in)

***

### check\_out?

> `optional` **check\_out**: `string`

Defined in: main.ts:217229

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`check_out`](../interfaces/IHotelPriceInfo.md#check_out)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:217217

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`currency`](../interfaces/IHotelPriceInfo.md#currency)

***

### discount\_text?

> `optional` **discount\_text**: `string`

Defined in: main.ts:217219

text about a discount applied

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`discount_text`](../interfaces/IHotelPriceInfo.md#discount_text)

***

### items?

> `optional` **items**: [`HotelPriceItemInfo`](HotelPriceItemInfo.md)[]

Defined in: main.ts:217235

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`items`](../interfaces/IHotelPriceInfo.md#items)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:217212

price per night

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`price`](../interfaces/IHotelPriceInfo.md#price)

***

### price\_without\_discount?

> `optional` **price\_without\_discount**: `number`

Defined in: main.ts:217214

full price per night without a discount applied

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`price_without_discount`](../interfaces/IHotelPriceInfo.md#price_without_discount)

***

### visitors?

> `optional` **visitors**: `number`

Defined in: main.ts:217231

number of hotel visitors for this price

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`visitors`](../interfaces/IHotelPriceInfo.md#visitors)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:217248

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:217276

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelPriceInfo`](HotelPriceInfo.md)

Defined in: main.ts:217269

#### Parameters

##### data

`any`

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)
