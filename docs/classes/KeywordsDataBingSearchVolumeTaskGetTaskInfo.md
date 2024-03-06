[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTaskGetTaskInfo

# Class: KeywordsDataBingSearchVolumeTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingSearchVolumeTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeTaskGetTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#cost)
- [data](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#data)
- [id](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#id)
- [path](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#path)
- [result](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTaskGetTaskInfo**(`data?`): [`KeywordsDataBingSearchVolumeTaskGetTaskInfo`](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTaskGetTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetTaskInfo`](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:123015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123015)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#data)

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

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:123011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123011)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeTaskGetTaskInfo.md#time)

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

[main.ts:123019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123019)

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

[main.ts:123041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123041)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskGetTaskInfo`](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetTaskInfo`](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:123034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123034)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")