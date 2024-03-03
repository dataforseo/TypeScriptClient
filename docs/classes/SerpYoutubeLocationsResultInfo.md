[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeLocationsResultInfo

# Class: SerpYoutubeLocationsResultInfo

## Implements

- [`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpYoutubeLocationsResultInfo.md#country_iso_code)
- [location\_code](SerpYoutubeLocationsResultInfo.md#location_code)
- [location\_code\_parent](SerpYoutubeLocationsResultInfo.md#location_code_parent)
- [location\_name](SerpYoutubeLocationsResultInfo.md#location_name)
- [location\_type](SerpYoutubeLocationsResultInfo.md#location_type)

### Methods

- [init](SerpYoutubeLocationsResultInfo.md#init)
- [toJSON](SerpYoutubeLocationsResultInfo.md#tojson)
- [fromJS](SerpYoutubeLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeLocationsResultInfo**(`data?`): [`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md) |

#### Returns

[`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Defined in

main.ts:57335

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpYoutubeLocationsResultInfo](../interfaces/ISerpYoutubeLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpYoutubeLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:57329

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpYoutubeLocationsResultInfo](../interfaces/ISerpYoutubeLocationsResultInfo.md).[location_code](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code)

#### Defined in

main.ts:57316

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

[ISerpYoutubeLocationsResultInfo](../interfaces/ISerpYoutubeLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:57327

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpYoutubeLocationsResultInfo](../interfaces/ISerpYoutubeLocationsResultInfo.md).[location_name](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_name)

#### Defined in

main.ts:57318

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpYoutubeLocationsResultInfo](../interfaces/ISerpYoutubeLocationsResultInfo.md).[location_type](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_type)

#### Defined in

main.ts:57331

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

main.ts:57344

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

main.ts:57365

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Defined in

main.ts:57358
