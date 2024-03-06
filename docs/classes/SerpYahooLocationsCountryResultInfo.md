[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooLocationsCountryResultInfo

# Class: SerpYahooLocationsCountryResultInfo

## Implements

- [`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpYahooLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](SerpYahooLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](SerpYahooLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](SerpYahooLocationsCountryResultInfo.md#location_name)
- [location\_type](SerpYahooLocationsCountryResultInfo.md#location_type)

### Methods

- [init](SerpYahooLocationsCountryResultInfo.md#init)
- [toJSON](SerpYahooLocationsCountryResultInfo.md#tojson)
- [fromJS](SerpYahooLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooLocationsCountryResultInfo**(`data?`): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md) |

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Defined in

[main.ts:62851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62851)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpYahooLocationsCountryResultInfo](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[country_iso_code](../interfaces/ISerpYahooLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

[main.ts:62845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62845)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpYahooLocationsCountryResultInfo](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[location_code](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code)

#### Defined in

[main.ts:62832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62832)

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

[ISerpYahooLocationsCountryResultInfo](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[location_code_parent](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

[main.ts:62843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62843)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpYahooLocationsCountryResultInfo](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[location_name](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_name)

#### Defined in

[main.ts:62834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62834)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpYahooLocationsCountryResultInfo](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[location_type](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_type)

#### Defined in

[main.ts:62847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62847)

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

[main.ts:62860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62860)

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

[main.ts:62881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62881)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Defined in

[main.ts:62874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62874)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")