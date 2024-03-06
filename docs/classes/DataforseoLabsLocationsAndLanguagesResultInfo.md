[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsLocationsAndLanguagesResultInfo

# Class: DataforseoLabsLocationsAndLanguagesResultInfo

## Implements

- [`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsLocationsAndLanguagesResultInfo.md#constructor)

### Properties

- [available\_languages](DataforseoLabsLocationsAndLanguagesResultInfo.md#available_languages)
- [country\_iso\_code](DataforseoLabsLocationsAndLanguagesResultInfo.md#country_iso_code)
- [location\_code](DataforseoLabsLocationsAndLanguagesResultInfo.md#location_code)
- [location\_code\_parent](DataforseoLabsLocationsAndLanguagesResultInfo.md#location_code_parent)
- [location\_name](DataforseoLabsLocationsAndLanguagesResultInfo.md#location_name)
- [location\_type](DataforseoLabsLocationsAndLanguagesResultInfo.md#location_type)

### Methods

- [init](DataforseoLabsLocationsAndLanguagesResultInfo.md#init)
- [toJSON](DataforseoLabsLocationsAndLanguagesResultInfo.md#tojson)
- [fromJS](DataforseoLabsLocationsAndLanguagesResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsLocationsAndLanguagesResultInfo**(`data?`): [`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md) |

#### Returns

[`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Defined in

[main.ts:77946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77946)

## Properties

### available\_languages

• `Optional` **available\_languages**: [`AvailableLanguages`](AvailableLanguages.md)[]

supported languages
contains the languages which are supported for a specific location

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResultInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[available_languages](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#available_languages)

#### Defined in

[main.ts:77942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77942)

___


### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResultInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[country_iso_code](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#country_iso_code)

#### Defined in

[main.ts:77935](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77935)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResultInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[location_code](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code)

#### Defined in

[main.ts:77928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77928)

___


### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResultInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[location_code_parent](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code_parent)

#### Defined in

[main.ts:77933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77933)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResultInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[location_name](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_name)

#### Defined in

[main.ts:77930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77930)

___


### location\_type

• `Optional` **location\_type**: `string`

location type
possible values:
Country

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResultInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[location_type](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_type)

#### Defined in

[main.ts:77939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77939)

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

[main.ts:77955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77955)

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

[main.ts:77981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77981)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Defined in

[main.ts:77974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77974)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")