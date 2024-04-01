[Documentation](../README.md) / [Exports](../modules.md) / HotelPriceItemInfo

# Class: HotelPriceItemInfo

## Implements

- [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelPriceItemInfo.md#constructor)

### Properties

- [currency](HotelPriceItemInfo.md#currency)
- [domain](HotelPriceItemInfo.md#domain)
- [free\_cancellation\_until](HotelPriceItemInfo.md#free_cancellation_until)
- [is\_paid](HotelPriceItemInfo.md#is_paid)
- [offers](HotelPriceItemInfo.md#offers)
- [price](HotelPriceItemInfo.md#price)
- [title](HotelPriceItemInfo.md#title)
- [type](HotelPriceItemInfo.md#type)
- [url](HotelPriceItemInfo.md#url)

### Methods

- [init](HotelPriceItemInfo.md#init)
- [toJSON](HotelPriceItemInfo.md#tojson)
- [fromJS](HotelPriceItemInfo.md#fromjs)

## Constructors

### constructor

• **new HotelPriceItemInfo**(`data?`): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md) |

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Defined in

main.ts:199056

## Properties

### currency

• `Optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[currency](../interfaces/IHotelPriceItemInfo.md#currency)

#### Defined in

main.ts:199036

___

### domain

• `Optional` **domain**: `string`

third-party domain
domain of the third-party website page with pricing information

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[domain](../interfaces/IHotelPriceItemInfo.md#domain)

#### Defined in

main.ts:199042

___

### free\_cancellation\_until

• `Optional` **free\_cancellation\_until**: `string`

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[free_cancellation_until](../interfaces/IHotelPriceItemInfo.md#free_cancellation_until)

#### Defined in

main.ts:199050

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[is_paid](../interfaces/IHotelPriceItemInfo.md#is_paid)

#### Defined in

main.ts:199046

___

### offers

• `Optional` **offers**: [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)[]

featured price offers

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[offers](../interfaces/IHotelPriceItemInfo.md#offers)

#### Defined in

main.ts:199052

___

### price

• `Optional` **price**: `number`

price per night

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[price](../interfaces/IHotelPriceItemInfo.md#price)

#### Defined in

main.ts:199033

___

### title

• `Optional` **title**: `string`

title of the hotel

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[title](../interfaces/IHotelPriceItemInfo.md#title)

#### Defined in

main.ts:199031

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[type](../interfaces/IHotelPriceItemInfo.md#type)

#### Defined in

main.ts:199029

___

### url

• `Optional` **url**: `string`

third-party page url
URL to the third-party website page with pricing information

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[url](../interfaces/IHotelPriceItemInfo.md#url)

#### Defined in

main.ts:199039

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

main.ts:199065

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

main.ts:199094

___

### fromJS

▸ **fromJS**(`data`): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Defined in

main.ts:199087
