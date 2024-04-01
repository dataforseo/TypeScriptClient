[Documentation](../README.md) / [Exports](../modules.md) / HotelInfoPriceOffer

# Class: HotelInfoPriceOffer

featured price offers

## Implements

- [`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelInfoPriceOffer.md#constructor)

### Properties

- [currency](HotelInfoPriceOffer.md#currency)
- [free\_cancellation\_until](HotelInfoPriceOffer.md#free_cancellation_until)
- [max\_visitors](HotelInfoPriceOffer.md#max_visitors)
- [offer\_images](HotelInfoPriceOffer.md#offer_images)
- [price](HotelInfoPriceOffer.md#price)
- [title](HotelInfoPriceOffer.md#title)
- [type](HotelInfoPriceOffer.md#type)
- [url](HotelInfoPriceOffer.md#url)

### Methods

- [init](HotelInfoPriceOffer.md#init)
- [toJSON](HotelInfoPriceOffer.md#tojson)
- [fromJS](HotelInfoPriceOffer.md#fromjs)

## Constructors

### constructor

• **new HotelInfoPriceOffer**(`data?`): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md) |

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Defined in

main.ts:198940

## Properties

### currency

• `Optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[currency](../interfaces/IHotelInfoPriceOffer.md#currency)

#### Defined in

main.ts:198923

___

### free\_cancellation\_until

• `Optional` **free\_cancellation\_until**: `string`

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[free_cancellation_until](../interfaces/IHotelInfoPriceOffer.md#free_cancellation_until)

#### Defined in

main.ts:198936

___

### max\_visitors

• `Optional` **max\_visitors**: `number`

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[max_visitors](../interfaces/IHotelInfoPriceOffer.md#max_visitors)

#### Defined in

main.ts:198929

___

### offer\_images

• `Optional` **offer\_images**: `string`[]

price offer images
URLs of the images featured in the price offer

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[offer_images](../interfaces/IHotelInfoPriceOffer.md#offer_images)

#### Defined in

main.ts:198932

___

### price

• `Optional` **price**: `number`

price per night

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[price](../interfaces/IHotelInfoPriceOffer.md#price)

#### Defined in

main.ts:198920

___

### title

• `Optional` **title**: `string`

title of the hotel

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[title](../interfaces/IHotelInfoPriceOffer.md#title)

#### Defined in

main.ts:198918

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[type](../interfaces/IHotelInfoPriceOffer.md#type)

#### Defined in

main.ts:198916

___

### url

• `Optional` **url**: `string`

url of the price offer
URL to the page of the website where price offer appears

#### Implementation of

[IHotelInfoPriceOffer](../interfaces/IHotelInfoPriceOffer.md).[url](../interfaces/IHotelInfoPriceOffer.md#url)

#### Defined in

main.ts:198926

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

main.ts:198949

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

main.ts:198977

___

### fromJS

▸ **fromJS**(`data`): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Defined in

main.ts:198970
