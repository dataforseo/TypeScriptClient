[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationTextSummaryLiveTaskInfo

# Class: ContentGenerationTextSummaryLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`ContentGenerationTextSummaryLiveTaskInfo`**

## Implements

- [`IContentGenerationTextSummaryLiveTaskInfo`](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationTextSummaryLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationTextSummaryLiveTaskInfo.md#cost)
- [data](ContentGenerationTextSummaryLiveTaskInfo.md#data)
- [id](ContentGenerationTextSummaryLiveTaskInfo.md#id)
- [path](ContentGenerationTextSummaryLiveTaskInfo.md#path)
- [result](ContentGenerationTextSummaryLiveTaskInfo.md#result)
- [result\_count](ContentGenerationTextSummaryLiveTaskInfo.md#result_count)
- [status\_code](ContentGenerationTextSummaryLiveTaskInfo.md#status_code)
- [status\_message](ContentGenerationTextSummaryLiveTaskInfo.md#status_message)
- [time](ContentGenerationTextSummaryLiveTaskInfo.md#time)

### Methods

- [init](ContentGenerationTextSummaryLiveTaskInfo.md#init)
- [toJSON](ContentGenerationTextSummaryLiveTaskInfo.md#tojson)
- [fromJS](ContentGenerationTextSummaryLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationTextSummaryLiveTaskInfo**(`data?`): [`ContentGenerationTextSummaryLiveTaskInfo`](ContentGenerationTextSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationTextSummaryLiveTaskInfo`](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md) |

#### Returns

[`ContentGenerationTextSummaryLiveTaskInfo`](ContentGenerationTextSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:162381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162381)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[cost](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#cost)

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

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[data](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#data)

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

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[id](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[path](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[result](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#result)

#### Defined in

[main.ts:162377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162377)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[result_count](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#result_count)

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

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[status_code](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#status_code)

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

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[status_message](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationTextSummaryLiveTaskInfo](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md).[time](../interfaces/IContentGenerationTextSummaryLiveTaskInfo.md#time)

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

[main.ts:162385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162385)

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

[main.ts:162407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162407)

___


### fromJS

▸ **fromJS**(`data`): [`ContentGenerationTextSummaryLiveTaskInfo`](ContentGenerationTextSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationTextSummaryLiveTaskInfo`](ContentGenerationTextSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:162400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162400)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")