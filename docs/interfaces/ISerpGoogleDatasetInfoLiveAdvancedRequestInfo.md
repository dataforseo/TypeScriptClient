[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Interface: ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

## Implemented by

- [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](../classes/SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [dataset\_id](ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#dataset_id)
- [device](ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#device)
- [language\_code](ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_code)
- [language\_name](ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#language_name)
- [os](ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#os)
- [tag](ISerpGoogleDatasetInfoLiveAdvancedRequestInfo.md#tag)

## Properties

### dataset\_id

• `Optional` **dataset\_id**: `string`

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

#### Defined in

[main.ts:52840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52840)

___


### device

• `Optional` **device**: `string`

device type
optional field
possible value: desktop

#### Defined in

[main.ts:52856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52856)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

#### Defined in

[main.ts:52852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52852)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Defined in

[main.ts:52846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52846)

___


### os

• `Optional` **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Defined in

[main.ts:52861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52861)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:52867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52867)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")