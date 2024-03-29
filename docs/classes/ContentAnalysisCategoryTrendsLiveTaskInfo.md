[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisCategoryTrendsLiveTaskInfo

# Class: ContentAnalysisCategoryTrendsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`ContentAnalysisCategoryTrendsLiveTaskInfo`**

## Implements

- [`IContentAnalysisCategoryTrendsLiveTaskInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisCategoryTrendsLiveTaskInfo.md#constructor)

### Properties

- [cost](ContentAnalysisCategoryTrendsLiveTaskInfo.md#cost)
- [data](ContentAnalysisCategoryTrendsLiveTaskInfo.md#data)
- [id](ContentAnalysisCategoryTrendsLiveTaskInfo.md#id)
- [path](ContentAnalysisCategoryTrendsLiveTaskInfo.md#path)
- [result](ContentAnalysisCategoryTrendsLiveTaskInfo.md#result)
- [result\_count](ContentAnalysisCategoryTrendsLiveTaskInfo.md#result_count)
- [status\_code](ContentAnalysisCategoryTrendsLiveTaskInfo.md#status_code)
- [status\_message](ContentAnalysisCategoryTrendsLiveTaskInfo.md#status_message)
- [time](ContentAnalysisCategoryTrendsLiveTaskInfo.md#time)

### Methods

- [init](ContentAnalysisCategoryTrendsLiveTaskInfo.md#init)
- [toJSON](ContentAnalysisCategoryTrendsLiveTaskInfo.md#tojson)
- [fromJS](ContentAnalysisCategoryTrendsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisCategoryTrendsLiveTaskInfo**(`data?`): [`ContentAnalysisCategoryTrendsLiveTaskInfo`](ContentAnalysisCategoryTrendsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisCategoryTrendsLiveTaskInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md) |

#### Returns

[`ContentAnalysisCategoryTrendsLiveTaskInfo`](ContentAnalysisCategoryTrendsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:159639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159639)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[cost](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#cost)

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

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[data](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#data)

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

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[id](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[path](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)[]

array of results

#### Implementation of

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[result](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#result)

#### Defined in

[main.ts:159635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159635)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[result_count](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#result_count)

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

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[status_code](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#status_code)

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

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[status_message](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentAnalysisCategoryTrendsLiveTaskInfo](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md).[time](../interfaces/IContentAnalysisCategoryTrendsLiveTaskInfo.md#time)

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

[main.ts:159643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159643)

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

[main.ts:159665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159665)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveTaskInfo`](ContentAnalysisCategoryTrendsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisCategoryTrendsLiveTaskInfo`](ContentAnalysisCategoryTrendsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:159658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159658)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")