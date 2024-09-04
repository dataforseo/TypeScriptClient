[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HotelPriceItemInfo

# Class: HotelPriceItemInfo

## Implements

- [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelPriceItemInfo()

> **new HotelPriceItemInfo**(`data`?): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

• **data?**: [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Defined in

main.ts:208514

## Properties

### currency?

> `optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`currency`](../interfaces/IHotelPriceItemInfo.md#currency)

#### Defined in

main.ts:208494

***

### domain?

> `optional` **domain**: `string`

third-party domain
domain of the third-party website page with pricing information

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`domain`](../interfaces/IHotelPriceItemInfo.md#domain)

#### Defined in

main.ts:208500

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`free_cancellation_until`](../interfaces/IHotelPriceItemInfo.md#free_cancellation_until)

#### Defined in

main.ts:208508

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`is_paid`](../interfaces/IHotelPriceItemInfo.md#is_paid)

#### Defined in

main.ts:208504

***

### offers?

> `optional` **offers**: [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)[]

featured price offers

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`offers`](../interfaces/IHotelPriceItemInfo.md#offers)

#### Defined in

main.ts:208510

***

### price?

> `optional` **price**: `number`

price per night

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`price`](../interfaces/IHotelPriceItemInfo.md#price)

#### Defined in

main.ts:208491

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`title`](../interfaces/IHotelPriceItemInfo.md#title)

#### Defined in

main.ts:208489

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`type`](../interfaces/IHotelPriceItemInfo.md#type)

#### Defined in

main.ts:208487

***

### url?

> `optional` **url**: `string`

third-party page url
URL to the third-party website page with pricing information

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`url`](../interfaces/IHotelPriceItemInfo.md#url)

#### Defined in

main.ts:208497

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:208523

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:208552

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Defined in

main.ts:208545
