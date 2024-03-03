[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorLocationsResultInfo

# Class: BusinessDataTripadvisorLocationsResultInfo

## Implements

- [`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](BusinessDataTripadvisorLocationsResultInfo.md#country_iso_code)
- [location\_code](BusinessDataTripadvisorLocationsResultInfo.md#location_code)
- [location\_name](BusinessDataTripadvisorLocationsResultInfo.md#location_name)
- [location\_name\_parent](BusinessDataTripadvisorLocationsResultInfo.md#location_name_parent)
- [location\_type](BusinessDataTripadvisorLocationsResultInfo.md#location_type)

### Methods

- [init](BusinessDataTripadvisorLocationsResultInfo.md#init)
- [toJSON](BusinessDataTripadvisorLocationsResultInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorLocationsResultInfo**(`data?`): [`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md) |

#### Returns

[`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Defined in

main.ts:200482

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataTripadvisorLocationsResultInfo](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[country_iso_code](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:200476

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IBusinessDataTripadvisorLocationsResultInfo](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[location_code](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_code)

#### Defined in

main.ts:200466

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataTripadvisorLocationsResultInfo](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[location_name](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_name)

#### Defined in

main.ts:200468

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[IBusinessDataTripadvisorLocationsResultInfo](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[location_name_parent](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:200474

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IBusinessDataTripadvisorLocationsResultInfo](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[location_type](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_type)

#### Defined in

main.ts:200478

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

main.ts:200491

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

main.ts:200512

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Defined in

main.ts:200505
