[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleLocationsCountryResultInfo

# Class: MerchantGoogleLocationsCountryResultInfo

## Implements

- [`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](MerchantGoogleLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](MerchantGoogleLocationsCountryResultInfo.md#location_code)
- [location\_name](MerchantGoogleLocationsCountryResultInfo.md#location_name)
- [location\_name\_parent](MerchantGoogleLocationsCountryResultInfo.md#location_name_parent)
- [location\_type](MerchantGoogleLocationsCountryResultInfo.md#location_type)

### Methods

- [init](MerchantGoogleLocationsCountryResultInfo.md#init)
- [toJSON](MerchantGoogleLocationsCountryResultInfo.md#tojson)
- [fromJS](MerchantGoogleLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleLocationsCountryResultInfo**(`data?`): [`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md) |

#### Returns

[`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:163834

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IMerchantGoogleLocationsCountryResultInfo](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[country_iso_code](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:163828

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IMerchantGoogleLocationsCountryResultInfo](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[location_code](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:163819

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IMerchantGoogleLocationsCountryResultInfo](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[location_name](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:163821

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_name": "Arkansas,United States",
"location_name_parent": "United States"

#### Implementation of

[IMerchantGoogleLocationsCountryResultInfo](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[location_name_parent](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:163826

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IMerchantGoogleLocationsCountryResultInfo](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[location_type](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:163830

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

main.ts:163843

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

main.ts:163864

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:163857
