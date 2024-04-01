[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLocationsResultInfo

# Class: BusinessDataGoogleLocationsResultInfo

## Implements

- [`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](BusinessDataGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](BusinessDataGoogleLocationsResultInfo.md#location_code)
- [location\_name](BusinessDataGoogleLocationsResultInfo.md#location_name)
- [location\_name\_parent](BusinessDataGoogleLocationsResultInfo.md#location_name_parent)
- [location\_type](BusinessDataGoogleLocationsResultInfo.md#location_type)

### Methods

- [init](BusinessDataGoogleLocationsResultInfo.md#init)
- [toJSON](BusinessDataGoogleLocationsResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLocationsResultInfo**(`data?`): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md) |

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:195639

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[country_iso_code](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:195633

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:195623

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_name](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:195625

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_name_parent](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:195631

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_type](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:195635

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

main.ts:195648

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

main.ts:195669

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:195662
