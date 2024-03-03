[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLocationsCountryResultInfo

# Class: BusinessDataGoogleLocationsCountryResultInfo

## Implements

- [`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](BusinessDataGoogleLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](BusinessDataGoogleLocationsCountryResultInfo.md#location_code)
- [location\_name](BusinessDataGoogleLocationsCountryResultInfo.md#location_name)
- [location\_name\_parent](BusinessDataGoogleLocationsCountryResultInfo.md#location_name_parent)
- [location\_type](BusinessDataGoogleLocationsCountryResultInfo.md#location_type)

### Methods

- [init](BusinessDataGoogleLocationsCountryResultInfo.md#init)
- [toJSON](BusinessDataGoogleLocationsCountryResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLocationsCountryResultInfo**(`data?`): [`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md) |

#### Returns

[`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:190498

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataGoogleLocationsCountryResultInfo](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[country_iso_code](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:190492

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IBusinessDataGoogleLocationsCountryResultInfo](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:190482

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataGoogleLocationsCountryResultInfo](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[location_name](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:190484

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[IBusinessDataGoogleLocationsCountryResultInfo](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[location_name_parent](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:190490

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IBusinessDataGoogleLocationsCountryResultInfo](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[location_type](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:190494

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

main.ts:190507

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

main.ts:190528

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:190521
