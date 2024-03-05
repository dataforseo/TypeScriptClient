[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#constructor)

### Properties

- [depth](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#depth)
- [device](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#device)
- [file\_formats](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#file_formats)
- [is\_free](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#is_free)
- [keyword](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#keyword)
- [language\_code](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_code)
- [language\_name](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_name)
- [last\_updated](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#last_updated)
- [os](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#os)
- [tag](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#tag)
- [topics](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#topics)
- [usage\_rights](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#usage_rights)

### Methods

- [init](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchLiveAdvancedRequestInfo**(`data?`): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:51391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51391)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[depth](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#depth)

#### Defined in

[main.ts:51361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51361)

___

### device

• `Optional` **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[device](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#device)

#### Defined in

[main.ts:51347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51347)

___

### file\_formats

• `Optional` **file\_formats**: `string`[]

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[file_formats](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#file_formats)

#### Defined in

[main.ts:51369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51369)

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[is_free](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#is_free)

#### Defined in

[main.ts:51377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51377)

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[keyword](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#keyword)

#### Defined in

[main.ts:51331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51331)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[language_code](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_code)

#### Defined in

[main.ts:51343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51343)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[language_name](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#language_name)

#### Defined in

[main.ts:51337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51337)

___

### last\_updated

• `Optional` **last\_updated**: `string`

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[last_updated](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#last_updated)

#### Defined in

[main.ts:51365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51365)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[os](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#os)

#### Defined in

[main.ts:51352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51352)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[tag](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#tag)

#### Defined in

[main.ts:51387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51387)

___

### topics

• `Optional` **topics**: `string`[]

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[topics](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#topics)

#### Defined in

[main.ts:51381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51381)

___

### usage\_rights

• `Optional` **usage\_rights**: `string`

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md).[usage_rights](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedRequestInfo.md#usage_rights)

#### Defined in

[main.ts:51373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51373)

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

[main.ts:51400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51400)

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

[main.ts:51436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51436)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:51429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51429)
