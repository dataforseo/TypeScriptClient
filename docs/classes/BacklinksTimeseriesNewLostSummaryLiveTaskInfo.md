[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesNewLostSummaryLiveTaskInfo

# Class: BacklinksTimeseriesNewLostSummaryLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BacklinksTimeseriesNewLostSummaryLiveTaskInfo`**

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveTaskInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#cost)
- [data](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#data)
- [id](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#id)
- [path](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#path)
- [result](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#result)
- [result\_count](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#result_count)
- [status\_code](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#status_code)
- [status\_message](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#status_message)
- [time](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#time)

### Methods

- [init](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#init)
- [toJSON](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#tojson)
- [fromJS](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesNewLostSummaryLiveTaskInfo**(`data?`): [`BacklinksTimeseriesNewLostSummaryLiveTaskInfo`](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesNewLostSummaryLiveTaskInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md) |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveTaskInfo`](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:139193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139193)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[cost](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#cost)

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

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[data](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#data)

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

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[id](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[path](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[result](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#result)

#### Defined in

[main.ts:139189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139189)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[result_count](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#result_count)

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

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[status_code](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#status_code)

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

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[status_message](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveTaskInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md).[time](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveTaskInfo.md#time)

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

[main.ts:139197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139197)

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

[main.ts:139219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139219)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveTaskInfo`](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveTaskInfo`](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:139212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139212)
