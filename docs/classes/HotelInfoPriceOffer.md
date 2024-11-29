[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelInfoPriceOffer

# Class: HotelInfoPriceOffer

featured price offers

## Implements

- [`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelInfoPriceOffer()

> **new HotelInfoPriceOffer**(`data`?): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Parameters

##### data?

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md)

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Defined in

main.ts:216935

## Properties

### currency?

> `optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`currency`](../interfaces/IHotelInfoPriceOffer.md#currency)

#### Defined in

main.ts:216918

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`free_cancellation_until`](../interfaces/IHotelInfoPriceOffer.md#free_cancellation_until)

#### Defined in

main.ts:216931

***

### max\_visitors?

> `optional` **max\_visitors**: `number`

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`max_visitors`](../interfaces/IHotelInfoPriceOffer.md#max_visitors)

#### Defined in

main.ts:216924

***

### offer\_images?

> `optional` **offer\_images**: `string`[]

price offer images
URLs of the images featured in the price offer

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`offer_images`](../interfaces/IHotelInfoPriceOffer.md#offer_images)

#### Defined in

main.ts:216927

***

### price?

> `optional` **price**: `number`

price per night

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`price`](../interfaces/IHotelInfoPriceOffer.md#price)

#### Defined in

main.ts:216915

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`title`](../interfaces/IHotelInfoPriceOffer.md#title)

#### Defined in

main.ts:216913

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`type`](../interfaces/IHotelInfoPriceOffer.md#type)

#### Defined in

main.ts:216911

***

### url?

> `optional` **url**: `string`

url of the price offer
URL to the page of the website where price offer appears

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`url`](../interfaces/IHotelInfoPriceOffer.md#url)

#### Defined in

main.ts:216921

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:216944

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:216972

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Parameters

##### data

`any`

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Defined in

main.ts:216965
