[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelInfoPriceOffer

# Class: HotelInfoPriceOffer

Defined in: main.ts:217479

featured price offers

## Implements

- [`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelInfoPriceOffer()

> **new HotelInfoPriceOffer**(`data`?): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

Defined in: main.ts:217505

#### Parameters

##### data?

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md)

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:217488

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`currency`](../interfaces/IHotelInfoPriceOffer.md#currency)

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

Defined in: main.ts:217501

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`free_cancellation_until`](../interfaces/IHotelInfoPriceOffer.md#free_cancellation_until)

***

### max\_visitors?

> `optional` **max\_visitors**: `number`

Defined in: main.ts:217494

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`max_visitors`](../interfaces/IHotelInfoPriceOffer.md#max_visitors)

***

### offer\_images?

> `optional` **offer\_images**: `string`[]

Defined in: main.ts:217497

price offer images
URLs of the images featured in the price offer

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`offer_images`](../interfaces/IHotelInfoPriceOffer.md#offer_images)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:217485

price per night

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`price`](../interfaces/IHotelInfoPriceOffer.md#price)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:217483

title of the hotel

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`title`](../interfaces/IHotelInfoPriceOffer.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:217481

type of element

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`type`](../interfaces/IHotelInfoPriceOffer.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:217491

url of the price offer
URL to the page of the website where price offer appears

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`url`](../interfaces/IHotelInfoPriceOffer.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:217514

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:217542

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

Defined in: main.ts:217535

#### Parameters

##### data

`any`

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)
