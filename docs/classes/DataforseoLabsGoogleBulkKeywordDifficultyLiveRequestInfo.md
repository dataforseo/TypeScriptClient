[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#constructor)

### Properties

- [keywords](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#keywords)
- [language\_code](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Defined in

main.ts:82403

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[keywords](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#keywords)

#### Defined in

main.ts:82365

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_code)

#### Defined in

main.ts:82393

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#language_name)

#### Defined in

main.ts:82386

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_code)

#### Defined in

main.ts:82379

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#location_name)

#### Defined in

main.ts:82372

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md#tag)

#### Defined in

main.ts:82399

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

main.ts:82412

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

main.ts:82438

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)

#### Defined in

main.ts:82431
