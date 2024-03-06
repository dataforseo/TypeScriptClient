[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisPhraseTrendsLiveTaskInfo

# Class: ContentAnalysisPhraseTrendsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`ContentAnalysisPhraseTrendsLiveTaskInfo`**

## Implements

- [`IContentAnalysisPhraseTrendsLiveTaskInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisPhraseTrendsLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentAnalysisPhraseTrendsLiveTaskInfo.md#cost)
- [data](ContentAnalysisPhraseTrendsLiveTaskInfo.md#data)
- [id](ContentAnalysisPhraseTrendsLiveTaskInfo.md#id)
- [path](ContentAnalysisPhraseTrendsLiveTaskInfo.md#path)
- [result](ContentAnalysisPhraseTrendsLiveTaskInfo.md#result)
- [result\_count](ContentAnalysisPhraseTrendsLiveTaskInfo.md#result_count)
- [status\_code](ContentAnalysisPhraseTrendsLiveTaskInfo.md#status_code)
- [status\_message](ContentAnalysisPhraseTrendsLiveTaskInfo.md#status_message)
- [time](ContentAnalysisPhraseTrendsLiveTaskInfo.md#time)

### Methods

- [init](ContentAnalysisPhraseTrendsLiveTaskInfo.md#init)
- [toJSON](ContentAnalysisPhraseTrendsLiveTaskInfo.md#tojson)
- [fromJS](ContentAnalysisPhraseTrendsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisPhraseTrendsLiveTaskInfo**(`data?`): [`ContentAnalysisPhraseTrendsLiveTaskInfo`](ContentAnalysisPhraseTrendsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisPhraseTrendsLiveTaskInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md) |

#### Returns

[`ContentAnalysisPhraseTrendsLiveTaskInfo`](ContentAnalysisPhraseTrendsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:159083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159083)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[cost](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#cost)

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

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[data](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#data)

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

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[id](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[path](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[result](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#result)

#### Defined in

[main.ts:159079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159079)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[result_count](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#result_count)

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

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[status_code](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#status_code)

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

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[status_message](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentAnalysisPhraseTrendsLiveTaskInfo](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md).[time](../interfaces/IContentAnalysisPhraseTrendsLiveTaskInfo.md#time)

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

[main.ts:159087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159087)

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

[main.ts:159109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159109)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisPhraseTrendsLiveTaskInfo`](ContentAnalysisPhraseTrendsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisPhraseTrendsLiveTaskInfo`](ContentAnalysisPhraseTrendsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:159102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159102)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")