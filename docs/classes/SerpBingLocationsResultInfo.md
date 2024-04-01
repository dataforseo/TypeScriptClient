[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocationsResultInfo

# Class: SerpBingLocationsResultInfo

## Implements

- [`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpBingLocationsResultInfo.md#country_iso_code)
- [location\_code](SerpBingLocationsResultInfo.md#location_code)
- [location\_code\_parent](SerpBingLocationsResultInfo.md#location_code_parent)
- [location\_name](SerpBingLocationsResultInfo.md#location_name)
- [location\_type](SerpBingLocationsResultInfo.md#location_type)

### Methods

- [init](SerpBingLocationsResultInfo.md#init)
- [toJSON](SerpBingLocationsResultInfo.md#tojson)
- [fromJS](SerpBingLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocationsResultInfo**(`data?`): [`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md) |

#### Returns

[`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Defined in

main.ts:55514

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpBingLocationsResultInfo](../interfaces/ISerpBingLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpBingLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:55508

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpBingLocationsResultInfo](../interfaces/ISerpBingLocationsResultInfo.md).[location_code](../interfaces/ISerpBingLocationsResultInfo.md#location_code)

#### Defined in

main.ts:55495

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[ISerpBingLocationsResultInfo](../interfaces/ISerpBingLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpBingLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:55506

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpBingLocationsResultInfo](../interfaces/ISerpBingLocationsResultInfo.md).[location_name](../interfaces/ISerpBingLocationsResultInfo.md#location_name)

#### Defined in

main.ts:55497

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpBingLocationsResultInfo](../interfaces/ISerpBingLocationsResultInfo.md).[location_type](../interfaces/ISerpBingLocationsResultInfo.md#location_type)

#### Defined in

main.ts:55510

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

main.ts:55523

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

main.ts:55544

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Defined in

main.ts:55537
