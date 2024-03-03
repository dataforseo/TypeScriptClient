[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleLocationsResultInfo

# Class: MerchantGoogleLocationsResultInfo

## Implements

- [`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](MerchantGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](MerchantGoogleLocationsResultInfo.md#location_code)
- [location\_name](MerchantGoogleLocationsResultInfo.md#location_name)
- [location\_name\_parent](MerchantGoogleLocationsResultInfo.md#location_name_parent)
- [location\_type](MerchantGoogleLocationsResultInfo.md#location_type)

### Methods

- [init](MerchantGoogleLocationsResultInfo.md#init)
- [toJSON](MerchantGoogleLocationsResultInfo.md#tojson)
- [fromJS](MerchantGoogleLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleLocationsResultInfo**(`data?`): [`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md) |

#### Returns

[`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Defined in

main.ts:163644

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IMerchantGoogleLocationsResultInfo](../interfaces/IMerchantGoogleLocationsResultInfo.md).[country_iso_code](../interfaces/IMerchantGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:163638

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IMerchantGoogleLocationsResultInfo](../interfaces/IMerchantGoogleLocationsResultInfo.md).[location_code](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:163629

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IMerchantGoogleLocationsResultInfo](../interfaces/IMerchantGoogleLocationsResultInfo.md).[location_name](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:163631

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_name": "Arkansas,United States",
"location_name_parent": "United States"

#### Implementation of

[IMerchantGoogleLocationsResultInfo](../interfaces/IMerchantGoogleLocationsResultInfo.md).[location_name_parent](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:163636

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IMerchantGoogleLocationsResultInfo](../interfaces/IMerchantGoogleLocationsResultInfo.md).[location_type](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:163640

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

main.ts:163653

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

main.ts:163674

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Defined in

main.ts:163667
