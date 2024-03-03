[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorLocationsCountryResultInfo

# Class: BusinessDataTripadvisorLocationsCountryResultInfo

## Implements

- [`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](BusinessDataTripadvisorLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](BusinessDataTripadvisorLocationsCountryResultInfo.md#location_code)
- [location\_name](BusinessDataTripadvisorLocationsCountryResultInfo.md#location_name)
- [location\_name\_parent](BusinessDataTripadvisorLocationsCountryResultInfo.md#location_name_parent)
- [location\_type](BusinessDataTripadvisorLocationsCountryResultInfo.md#location_type)

### Methods

- [init](BusinessDataTripadvisorLocationsCountryResultInfo.md#init)
- [toJSON](BusinessDataTripadvisorLocationsCountryResultInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorLocationsCountryResultInfo**(`data?`): [`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md) |

#### Returns

[`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Defined in

main.ts:200674

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResultInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[country_iso_code](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:200668

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResultInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[location_code](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:200658

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResultInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[location_name](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:200660

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResultInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[location_name_parent](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:200666

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResultInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[location_type](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:200670

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

main.ts:200683

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

main.ts:200704

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Defined in

main.ts:200697
