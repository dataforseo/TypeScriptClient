[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpLocationsCountryResultInfo

# Class: BusinessDataYelpLocationsCountryResultInfo

## Implements

- [`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](BusinessDataYelpLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](BusinessDataYelpLocationsCountryResultInfo.md#location_code)
- [location\_name](BusinessDataYelpLocationsCountryResultInfo.md#location_name)
- [location\_name\_parent](BusinessDataYelpLocationsCountryResultInfo.md#location_name_parent)
- [location\_type](BusinessDataYelpLocationsCountryResultInfo.md#location_type)

### Methods

- [init](BusinessDataYelpLocationsCountryResultInfo.md#init)
- [toJSON](BusinessDataYelpLocationsCountryResultInfo.md#tojson)
- [fromJS](BusinessDataYelpLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpLocationsCountryResultInfo**(`data?`): [`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md) |

#### Returns

[`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Defined in

main.ts:203114

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataYelpLocationsCountryResultInfo](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[country_iso_code](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:203108

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IBusinessDataYelpLocationsCountryResultInfo](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[location_code](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:203098

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataYelpLocationsCountryResultInfo](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[location_name](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:203100

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[IBusinessDataYelpLocationsCountryResultInfo](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[location_name_parent](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:203106

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IBusinessDataYelpLocationsCountryResultInfo](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[location_type](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:203110

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

main.ts:203123

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

main.ts:203144

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Defined in

main.ts:203137
