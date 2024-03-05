[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#constructor)

### Properties

- [keywords](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#keywords)
- [language\_code](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo**(`data?`): [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Defined in

[main.ts:102135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102135)

## Properties

### keywords

• `Optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[keywords](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#keywords)

#### Defined in

[main.ts:102095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102095)

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:102125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102125)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:102118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102118)

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:102111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102111)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:102103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102103)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#tag)

#### Defined in

[main.ts:102131](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102131)

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

[main.ts:102144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102144)

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

[main.ts:102170](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102170)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

#### Defined in

[main.ts:102163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102163)
