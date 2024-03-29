[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisSummaryLiveTaskInfo

# Class: ContentAnalysisSummaryLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`ContentAnalysisSummaryLiveTaskInfo`**

## Implements

- [`IContentAnalysisSummaryLiveTaskInfo`](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisSummaryLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentAnalysisSummaryLiveTaskInfo.md#cost)
- [data](ContentAnalysisSummaryLiveTaskInfo.md#data)
- [id](ContentAnalysisSummaryLiveTaskInfo.md#id)
- [path](ContentAnalysisSummaryLiveTaskInfo.md#path)
- [result](ContentAnalysisSummaryLiveTaskInfo.md#result)
- [result\_count](ContentAnalysisSummaryLiveTaskInfo.md#result_count)
- [status\_code](ContentAnalysisSummaryLiveTaskInfo.md#status_code)
- [status\_message](ContentAnalysisSummaryLiveTaskInfo.md#status_message)
- [time](ContentAnalysisSummaryLiveTaskInfo.md#time)

### Methods

- [init](ContentAnalysisSummaryLiveTaskInfo.md#init)
- [toJSON](ContentAnalysisSummaryLiveTaskInfo.md#tojson)
- [fromJS](ContentAnalysisSummaryLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisSummaryLiveTaskInfo**(`data?`): [`ContentAnalysisSummaryLiveTaskInfo`](ContentAnalysisSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisSummaryLiveTaskInfo`](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md) |

#### Returns

[`ContentAnalysisSummaryLiveTaskInfo`](ContentAnalysisSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:157505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157505)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[cost](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#cost)

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

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[data](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#data)

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

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[id](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[path](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)[]

array of results

#### Implementation of

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[result](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#result)

#### Defined in

[main.ts:157501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157501)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[result_count](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#result_count)

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

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[status_code](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#status_code)

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

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[status_message](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentAnalysisSummaryLiveTaskInfo](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md).[time](../interfaces/IContentAnalysisSummaryLiveTaskInfo.md#time)

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

[main.ts:157509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157509)

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

[main.ts:157531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157531)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisSummaryLiveTaskInfo`](ContentAnalysisSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisSummaryLiveTaskInfo`](ContentAnalysisSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:157524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157524)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")