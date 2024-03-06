[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooLocationsResultInfo

# Class: SerpYahooLocationsResultInfo

## Implements

- [`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpYahooLocationsResultInfo.md#country_iso_code)
- [location\_code](SerpYahooLocationsResultInfo.md#location_code)
- [location\_code\_parent](SerpYahooLocationsResultInfo.md#location_code_parent)
- [location\_name](SerpYahooLocationsResultInfo.md#location_name)
- [location\_type](SerpYahooLocationsResultInfo.md#location_type)

### Methods

- [init](SerpYahooLocationsResultInfo.md#init)
- [toJSON](SerpYahooLocationsResultInfo.md#tojson)
- [fromJS](SerpYahooLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooLocationsResultInfo**(`data?`): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md) |

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Defined in

[main.ts:62653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62653)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpYahooLocationsResultInfo](../interfaces/ISerpYahooLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpYahooLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:62647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62647)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpYahooLocationsResultInfo](../interfaces/ISerpYahooLocationsResultInfo.md).[location_code](../interfaces/ISerpYahooLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:62634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62634)

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

[ISerpYahooLocationsResultInfo](../interfaces/ISerpYahooLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpYahooLocationsResultInfo.md#location_code_parent)

#### Defined in

[main.ts:62645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62645)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpYahooLocationsResultInfo](../interfaces/ISerpYahooLocationsResultInfo.md).[location_name](../interfaces/ISerpYahooLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:62636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62636)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpYahooLocationsResultInfo](../interfaces/ISerpYahooLocationsResultInfo.md).[location_type](../interfaces/ISerpYahooLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:62649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62649)

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

[main.ts:62662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62662)

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

[main.ts:62683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62683)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Defined in

[main.ts:62676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62676)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")