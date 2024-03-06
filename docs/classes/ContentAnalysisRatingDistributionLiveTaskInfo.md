[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisRatingDistributionLiveTaskInfo

# Class: ContentAnalysisRatingDistributionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`ContentAnalysisRatingDistributionLiveTaskInfo`**

## Implements

- [`IContentAnalysisRatingDistributionLiveTaskInfo`](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisRatingDistributionLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentAnalysisRatingDistributionLiveTaskInfo.md#cost)
- [data](ContentAnalysisRatingDistributionLiveTaskInfo.md#data)
- [id](ContentAnalysisRatingDistributionLiveTaskInfo.md#id)
- [path](ContentAnalysisRatingDistributionLiveTaskInfo.md#path)
- [result](ContentAnalysisRatingDistributionLiveTaskInfo.md#result)
- [result\_count](ContentAnalysisRatingDistributionLiveTaskInfo.md#result_count)
- [status\_code](ContentAnalysisRatingDistributionLiveTaskInfo.md#status_code)
- [status\_message](ContentAnalysisRatingDistributionLiveTaskInfo.md#status_message)
- [time](ContentAnalysisRatingDistributionLiveTaskInfo.md#time)

### Methods

- [init](ContentAnalysisRatingDistributionLiveTaskInfo.md#init)
- [toJSON](ContentAnalysisRatingDistributionLiveTaskInfo.md#tojson)
- [fromJS](ContentAnalysisRatingDistributionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisRatingDistributionLiveTaskInfo**(`data?`): [`ContentAnalysisRatingDistributionLiveTaskInfo`](ContentAnalysisRatingDistributionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisRatingDistributionLiveTaskInfo`](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md) |

#### Returns

[`ContentAnalysisRatingDistributionLiveTaskInfo`](ContentAnalysisRatingDistributionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:158479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158479)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[cost](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#cost)

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

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[data](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#data)

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

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[id](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[path](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[result](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#result)

#### Defined in

[main.ts:158475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158475)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[result_count](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#result_count)

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

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[status_code](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#status_code)

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

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[status_message](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentAnalysisRatingDistributionLiveTaskInfo](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md).[time](../interfaces/IContentAnalysisRatingDistributionLiveTaskInfo.md#time)

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

[main.ts:158483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158483)

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

[main.ts:158505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158505)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisRatingDistributionLiveTaskInfo`](ContentAnalysisRatingDistributionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisRatingDistributionLiveTaskInfo`](ContentAnalysisRatingDistributionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:158498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158498)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")