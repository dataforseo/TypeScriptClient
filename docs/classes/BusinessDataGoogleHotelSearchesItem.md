[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesItem

# Class: BusinessDataGoogleHotelSearchesItem

## Implements

- [`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesItem.md#constructor)

### Properties

- [hotel\_identifier](BusinessDataGoogleHotelSearchesItem.md#hotel_identifier)
- [is\_paid](BusinessDataGoogleHotelSearchesItem.md#is_paid)
- [location](BusinessDataGoogleHotelSearchesItem.md#location)
- [overview\_images](BusinessDataGoogleHotelSearchesItem.md#overview_images)
- [prices](BusinessDataGoogleHotelSearchesItem.md#prices)
- [reviews](BusinessDataGoogleHotelSearchesItem.md#reviews)
- [stars](BusinessDataGoogleHotelSearchesItem.md#stars)
- [title](BusinessDataGoogleHotelSearchesItem.md#title)
- [type](BusinessDataGoogleHotelSearchesItem.md#type)

### Methods

- [init](BusinessDataGoogleHotelSearchesItem.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesItem.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesItem.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesItem**(`data?`): [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Defined in

main.ts:199292

## Properties

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[hotel_identifier](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#hotel_identifier)

#### Defined in

main.ts:199271

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[is_paid](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#is_paid)

#### Defined in

main.ts:199280

___

### location

• `Optional` **location**: [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

GPS coordinates of the hotel’s location

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[location](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#location)

#### Defined in

main.ts:199282

___

### overview\_images

• `Optional` **overview\_images**: `string`[]

featured images for a hotel

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[overview_images](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#overview_images)

#### Defined in

main.ts:199286

___

### prices

• `Optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

hotel price

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[prices](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#prices)

#### Defined in

main.ts:199288

___

### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews and rating information

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[reviews](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#reviews)

#### Defined in

main.ts:199284

___

### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[stars](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#stars)

#### Defined in

main.ts:199276

___

### title

• `Optional` **title**: `string`

title of the hotel

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[title](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#title)

#### Defined in

main.ts:199273

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[type](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#type)

#### Defined in

main.ts:199267

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

main.ts:199301

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

main.ts:199330

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Defined in

main.ts:199323
