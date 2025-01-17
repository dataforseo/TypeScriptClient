[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelPriceItemInfo

# Class: HotelPriceItemInfo

Defined in: main.ts:217090

## Implements

- [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelPriceItemInfo()

> **new HotelPriceItemInfo**(`data`?): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

Defined in: main.ts:217119

#### Parameters

##### data?

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:217099

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`currency`](../interfaces/IHotelPriceItemInfo.md#currency)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:217105

third-party domain
domain of the third-party website page with pricing information

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`domain`](../interfaces/IHotelPriceItemInfo.md#domain)

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

Defined in: main.ts:217113

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`free_cancellation_until`](../interfaces/IHotelPriceItemInfo.md#free_cancellation_until)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:217109

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`is_paid`](../interfaces/IHotelPriceItemInfo.md#is_paid)

***

### offers?

> `optional` **offers**: [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)[]

Defined in: main.ts:217115

featured price offers

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`offers`](../interfaces/IHotelPriceItemInfo.md#offers)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:217096

price per night

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`price`](../interfaces/IHotelPriceItemInfo.md#price)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:217094

title of the hotel

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`title`](../interfaces/IHotelPriceItemInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:217092

type of element

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`type`](../interfaces/IHotelPriceItemInfo.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:217102

third-party page url
URL to the third-party website page with pricing information

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`url`](../interfaces/IHotelPriceItemInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:217128

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:217157

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

Defined in: main.ts:217150

#### Parameters

##### data

`any`

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)
