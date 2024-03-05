[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#constructor)

### Properties

- [dataset\_id](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#dataset_id)
- [device](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#device)
- [language\_code](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_code)
- [language\_name](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_name)
- [os](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#os)
- [tag](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#tag)

### Methods

- [init](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoLiveAdvancedRequestInfo**(`data?`): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:52787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52787)

## Properties

### dataset\_id

• `Optional` **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[dataset_id](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#dataset_id)

#### Defined in

[main.ts:52756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52756)

___

### device

• `Optional` **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[device](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#device)

#### Defined in

[main.ts:52772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52772)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[language_code](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_code)

#### Defined in

[main.ts:52768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52768)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[language_name](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_name)

#### Defined in

[main.ts:52762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52762)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[os](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#os)

#### Defined in

[main.ts:52777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52777)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedRequestInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md).[tag](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#tag)

#### Defined in

[main.ts:52783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52783)

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

[main.ts:52796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52796)

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

[main.ts:52818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52818)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:52811](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52811)
