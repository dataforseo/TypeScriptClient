[Documentation](../README.md) / [Exports](../modules.md) / SerpSeznamLocationsCountryResultInfo

# Class: SerpSeznamLocationsCountryResultInfo

## Implements

- [`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpSeznamLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](SerpSeznamLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](SerpSeznamLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](SerpSeznamLocationsCountryResultInfo.md#location_name)
- [location\_type](SerpSeznamLocationsCountryResultInfo.md#location_type)

### Methods

- [init](SerpSeznamLocationsCountryResultInfo.md#init)
- [toJSON](SerpSeznamLocationsCountryResultInfo.md#tojson)
- [fromJS](SerpSeznamLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamLocationsCountryResultInfo**(`data?`): [`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md) |

#### Returns

[`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Defined in

main.ts:71333

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpSeznamLocationsCountryResultInfo](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[country_iso_code](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:71327

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpSeznamLocationsCountryResultInfo](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[location_code](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:71319

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[ISerpSeznamLocationsCountryResultInfo](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[location_code_parent](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:71325

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpSeznamLocationsCountryResultInfo](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[location_name](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:71321

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpSeznamLocationsCountryResultInfo](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[location_type](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:71329

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

main.ts:71342

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

main.ts:71363

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Defined in

main.ts:71356
