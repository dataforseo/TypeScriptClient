[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocationsCountryResultInfo

# Class: SerpBingLocationsCountryResultInfo

## Implements

- [`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpBingLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](SerpBingLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](SerpBingLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](SerpBingLocationsCountryResultInfo.md#location_name)
- [location\_type](SerpBingLocationsCountryResultInfo.md#location_type)

### Methods

- [init](SerpBingLocationsCountryResultInfo.md#init)
- [toJSON](SerpBingLocationsCountryResultInfo.md#tojson)
- [fromJS](SerpBingLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocationsCountryResultInfo**(`data?`): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md) |

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Defined in

[main.ts:53337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53337)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpBingLocationsCountryResultInfo](../interfaces/ISerpBingLocationsCountryResultInfo.md).[country_iso_code](../interfaces/ISerpBingLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

[main.ts:53331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53331)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpBingLocationsCountryResultInfo](../interfaces/ISerpBingLocationsCountryResultInfo.md).[location_code](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_code)

#### Defined in

[main.ts:53318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53318)

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

[ISerpBingLocationsCountryResultInfo](../interfaces/ISerpBingLocationsCountryResultInfo.md).[location_code_parent](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

[main.ts:53329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53329)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpBingLocationsCountryResultInfo](../interfaces/ISerpBingLocationsCountryResultInfo.md).[location_name](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_name)

#### Defined in

[main.ts:53320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53320)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpBingLocationsCountryResultInfo](../interfaces/ISerpBingLocationsCountryResultInfo.md).[location_type](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_type)

#### Defined in

[main.ts:53333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53333)

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

[main.ts:53346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53346)

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

[main.ts:53367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53367)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Defined in

[main.ts:53360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53360)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")