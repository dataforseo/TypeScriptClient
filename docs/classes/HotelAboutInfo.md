[Documentation](../README.md) / [Exports](../modules.md) / HotelAboutInfo

# Class: HotelAboutInfo

## Implements

- [`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelAboutInfo.md#constructor)

### Properties

- [amenities](HotelAboutInfo.md#amenities)
- [check\_in\_time](HotelAboutInfo.md#check_in_time)
- [check\_out\_time](HotelAboutInfo.md#check_out_time)
- [description](HotelAboutInfo.md#description)
- [domain](HotelAboutInfo.md#domain)
- [full\_address](HotelAboutInfo.md#full_address)
- [popular\_amenities](HotelAboutInfo.md#popular_amenities)
- [sub\_descriptions](HotelAboutInfo.md#sub_descriptions)
- [url](HotelAboutInfo.md#url)

### Methods

- [init](HotelAboutInfo.md#init)
- [toJSON](HotelAboutInfo.md#tojson)
- [fromJS](HotelAboutInfo.md#fromjs)

## Constructors

### constructor

• **new HotelAboutInfo**(`data?`): [`HotelAboutInfo`](HotelAboutInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md) |

#### Returns

[`HotelAboutInfo`](HotelAboutInfo.md)

#### Defined in

main.ts:200907

## Properties

### amenities

• `Optional` **amenities**: [`HotelAmenityInfo`](HotelAmenityInfo.md)[]

hotel amenities
information about hotel amenities

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[amenities](../interfaces/IHotelAboutInfo.md#amenities)

#### Defined in

main.ts:200900

___

### check\_in\_time

• `Optional` **check\_in\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

hotel check-in time
check-in time indicated in the hotel listing

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[check_in_time](../interfaces/IHotelAboutInfo.md#check_in_time)

#### Defined in

main.ts:200885

___

### check\_out\_time

• `Optional` **check\_out\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

hotel check-out time
check-out time indicated in the hotel listing

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[check_out_time](../interfaces/IHotelAboutInfo.md#check_out_time)

#### Defined in

main.ts:200888

___

### description

• `Optional` **description**: `string`

description of the hotel
the description of the hotel entity for which the results are collected

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[description](../interfaces/IHotelAboutInfo.md#description)

#### Defined in

main.ts:200879

___

### domain

• `Optional` **domain**: `string`

hotel domain
domain of the hotel’s website

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[domain](../interfaces/IHotelAboutInfo.md#domain)

#### Defined in

main.ts:200894

___

### full\_address

• `Optional` **full\_address**: `string`

full address of the hotel
address of the hotel indicated in the standardised format

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[full_address](../interfaces/IHotelAboutInfo.md#full_address)

#### Defined in

main.ts:200891

___

### popular\_amenities

• `Optional` **popular\_amenities**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

hotel amenities
information about hotel amenities labelled as “popular”

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[popular_amenities](../interfaces/IHotelAboutInfo.md#popular_amenities)

#### Defined in

main.ts:200903

___

### sub\_descriptions

• `Optional` **sub\_descriptions**: `string`[]

additional description of the hotel
details about the hotel provided in addition to the description

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[sub_descriptions](../interfaces/IHotelAboutInfo.md#sub_descriptions)

#### Defined in

main.ts:200882

___

### url

• `Optional` **url**: `string`

hotel url
URL to the hotel’s website indicated in the listing

#### Implementation of

[IHotelAboutInfo](../interfaces/IHotelAboutInfo.md).[url](../interfaces/IHotelAboutInfo.md#url)

#### Defined in

main.ts:200897

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

main.ts:200916

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

main.ts:200953

___

### fromJS

▸ **fromJS**(`data`): [`HotelAboutInfo`](HotelAboutInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelAboutInfo`](HotelAboutInfo.md)

#### Defined in

main.ts:200946
