[Documentation](../README.md) / [Exports](../modules.md) / HotelAmenityInfo

# Class: HotelAmenityInfo

## Implements

- [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelAmenityInfo.md#constructor)

### Properties

- [category](HotelAmenityInfo.md#category)
- [category\_label](HotelAmenityInfo.md#category_label)
- [items](HotelAmenityInfo.md#items)

### Methods

- [init](HotelAmenityInfo.md#init)
- [toJSON](HotelAmenityInfo.md#tojson)
- [fromJS](HotelAmenityInfo.md#fromjs)

## Constructors

### constructor

• **new HotelAmenityInfo**(`data?`): [`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md) |

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Defined in

main.ts:200816

## Properties

### category

• `Optional` **category**: `string`

standardised category of the ammenity

#### Implementation of

[IHotelAmenityInfo](../interfaces/IHotelAmenityInfo.md).[category](../interfaces/IHotelAmenityInfo.md#category)

#### Defined in

main.ts:200808

___

### category\_label

• `Optional` **category\_label**: `string`

label of the category

#### Implementation of

[IHotelAmenityInfo](../interfaces/IHotelAmenityInfo.md).[category_label](../interfaces/IHotelAmenityInfo.md#category_label)

#### Defined in

main.ts:200810

___

### items

• `Optional` **items**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

specific amenities and details

#### Implementation of

[IHotelAmenityInfo](../interfaces/IHotelAmenityInfo.md).[items](../interfaces/IHotelAmenityInfo.md#items)

#### Defined in

main.ts:200812

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

main.ts:200825

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

main.ts:200848

___

### fromJS

▸ **fromJS**(`data`): [`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Defined in

main.ts:200841
