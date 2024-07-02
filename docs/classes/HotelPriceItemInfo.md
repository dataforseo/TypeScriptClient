**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelPriceItemInfo

# Class: HotelPriceItemInfo

## Implements

- [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelPriceItemInfo(data)

> **new HotelPriceItemInfo**(`data`?): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

• **data?**: [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Source

main.ts:203717

## Properties

### currency?

> **`optional`** **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`currency`](../interfaces/IHotelPriceItemInfo.md#currency)

#### Source

main.ts:203697

***

### domain?

> **`optional`** **domain**: `string`

third-party domain
domain of the third-party website page with pricing information

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`domain`](../interfaces/IHotelPriceItemInfo.md#domain)

#### Source

main.ts:203703

***

### free\_cancellation\_until?

> **`optional`** **free\_cancellation\_until**: `string`

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`free_cancellation_until`](../interfaces/IHotelPriceItemInfo.md#free_cancellation_until)

#### Source

main.ts:203711

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`is_paid`](../interfaces/IHotelPriceItemInfo.md#is_paid)

#### Source

main.ts:203707

***

### offers?

> **`optional`** **offers**: [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)[]

featured price offers

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`offers`](../interfaces/IHotelPriceItemInfo.md#offers)

#### Source

main.ts:203713

***

### price?

> **`optional`** **price**: `number`

price per night

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`price`](../interfaces/IHotelPriceItemInfo.md#price)

#### Source

main.ts:203694

***

### title?

> **`optional`** **title**: `string`

title of the hotel

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`title`](../interfaces/IHotelPriceItemInfo.md#title)

#### Source

main.ts:203692

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`type`](../interfaces/IHotelPriceItemInfo.md#type)

#### Source

main.ts:203690

***

### url?

> **`optional`** **url**: `string`

third-party page url
URL to the third-party website page with pricing information

#### Implementation of

[`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md).[`url`](../interfaces/IHotelPriceItemInfo.md#url)

#### Source

main.ts:203700

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:203726

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:203755

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Source

main.ts:203748
