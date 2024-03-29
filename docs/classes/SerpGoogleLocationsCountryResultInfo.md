[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocationsCountryResultInfo

# Class: SerpGoogleLocationsCountryResultInfo

## Implements

- [`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpGoogleLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](SerpGoogleLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](SerpGoogleLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](SerpGoogleLocationsCountryResultInfo.md#location_name)
- [location\_type](SerpGoogleLocationsCountryResultInfo.md#location_type)

### Methods

- [init](SerpGoogleLocationsCountryResultInfo.md#init)
- [toJSON](SerpGoogleLocationsCountryResultInfo.md#tojson)
- [fromJS](SerpGoogleLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocationsCountryResultInfo**(`data?`): [`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md) |

#### Returns

[`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Defined in

[main.ts:24277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24277)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpGoogleLocationsCountryResultInfo](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[country_iso_code](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

[main.ts:24271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24271)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpGoogleLocationsCountryResultInfo](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[location_code](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_code)

#### Defined in

[main.ts:24258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24258)

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

[ISerpGoogleLocationsCountryResultInfo](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[location_code_parent](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

[main.ts:24269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24269)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpGoogleLocationsCountryResultInfo](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[location_name](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_name)

#### Defined in

[main.ts:24260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24260)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpGoogleLocationsCountryResultInfo](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[location_type](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_type)

#### Defined in

[main.ts:24273](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24273)

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

[main.ts:24286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24286)

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

[main.ts:24307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24307)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Defined in

[main.ts:24300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24300)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")