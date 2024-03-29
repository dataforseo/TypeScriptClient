[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesItem

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

[main.ts:193831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193831)

## Properties

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[hotel_identifier](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#hotel_identifier)

#### Defined in

[main.ts:193810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193810)

___


### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[is_paid](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#is_paid)

#### Defined in

[main.ts:193819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193819)

___


### location

• `Optional` **location**: [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

GPS coordinates of the hotel’s location

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[location](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#location)

#### Defined in

[main.ts:193821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193821)

___


### overview\_images

• `Optional` **overview\_images**: `string`[]

featured images for a hotel

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[overview_images](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#overview_images)

#### Defined in

[main.ts:193825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193825)

___


### prices

• `Optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

hotel price

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[prices](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#prices)

#### Defined in

[main.ts:193827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193827)

___


### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews and rating information

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[reviews](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#reviews)

#### Defined in

[main.ts:193823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193823)

___


### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[stars](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#stars)

#### Defined in

[main.ts:193815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193815)

___


### title

• `Optional` **title**: `string`

title of the hotel

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[title](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#title)

#### Defined in

[main.ts:193812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193812)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataGoogleHotelSearchesItem](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[type](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#type)

#### Defined in

[main.ts:193806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193806)

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

[main.ts:193840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193840)

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

[main.ts:193869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193869)

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

[main.ts:193862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193862)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")