[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:116115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116115)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___


### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___


### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:116111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116111)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___


### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___


### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:116119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116119)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:116141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116141)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:116134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116134)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")