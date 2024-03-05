[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeLocationsCountryResultInfo

# Class: SerpYoutubeLocationsCountryResultInfo

## Implements

- [`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpYoutubeLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](SerpYoutubeLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](SerpYoutubeLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](SerpYoutubeLocationsCountryResultInfo.md#location_name)
- [location\_type](SerpYoutubeLocationsCountryResultInfo.md#location_type)

### Methods

- [init](SerpYoutubeLocationsCountryResultInfo.md#init)
- [toJSON](SerpYoutubeLocationsCountryResultInfo.md#tojson)
- [fromJS](SerpYoutubeLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeLocationsCountryResultInfo**(`data?`): [`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md) |

#### Returns

[`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Defined in

[main.ts:57389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57389)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpYoutubeLocationsCountryResultInfo](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[country_iso_code](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

[main.ts:57383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57383)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpYoutubeLocationsCountryResultInfo](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[location_code](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_code)

#### Defined in

[main.ts:57370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57370)

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

[ISerpYoutubeLocationsCountryResultInfo](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[location_code_parent](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

[main.ts:57381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57381)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpYoutubeLocationsCountryResultInfo](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[location_name](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_name)

#### Defined in

[main.ts:57372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57372)

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpYoutubeLocationsCountryResultInfo](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[location_type](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_type)

#### Defined in

[main.ts:57385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57385)

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

[main.ts:57398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57398)

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

[main.ts:57419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57419)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Defined in

[main.ts:57412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57412)
