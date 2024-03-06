[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTasksReadyTaskInfo

# Class: KeywordsDataBingSearchVolumeTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#data)
- [id](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#id)
- [path](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#path)
- [result](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTasksReadyTaskInfo**(`data?`): [`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:122755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122755)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#data)

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

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:122751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122751)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#result_count)

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

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#time)

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

[main.ts:122759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122759)

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

[main.ts:122781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122781)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:122774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122774)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")