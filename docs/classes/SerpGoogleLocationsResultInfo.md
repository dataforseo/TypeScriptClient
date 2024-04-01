[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLocationsResultInfo

# Class: SerpGoogleLocationsResultInfo

## Implements

- [`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](SerpGoogleLocationsResultInfo.md#location_code)
- [location\_code\_parent](SerpGoogleLocationsResultInfo.md#location_code_parent)
- [location\_name](SerpGoogleLocationsResultInfo.md#location_name)
- [location\_type](SerpGoogleLocationsResultInfo.md#location_type)

### Methods

- [init](SerpGoogleLocationsResultInfo.md#init)
- [toJSON](SerpGoogleLocationsResultInfo.md#tojson)
- [fromJS](SerpGoogleLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocationsResultInfo**(`data?`): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md) |

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Defined in

main.ts:24598

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:24592

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_code](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:24579

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

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:24590

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_name](../interfaces/ISerpGoogleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:24581

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_type](../interfaces/ISerpGoogleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:24594

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

main.ts:24607

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

main.ts:24628

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Defined in

main.ts:24621
