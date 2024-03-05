[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTasksReadyTaskInfo

# Class: SerpGoogleSearchByImageTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleSearchByImageTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleSearchByImageTasksReadyTaskInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleSearchByImageTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleSearchByImageTasksReadyTaskInfo.md#data)
- [id](SerpGoogleSearchByImageTasksReadyTaskInfo.md#id)
- [path](SerpGoogleSearchByImageTasksReadyTaskInfo.md#path)
- [result](SerpGoogleSearchByImageTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleSearchByImageTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleSearchByImageTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleSearchByImageTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleSearchByImageTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleSearchByImageTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTasksReadyTaskInfo**(`data?`): [`SerpGoogleSearchByImageTasksReadyTaskInfo`](SerpGoogleSearchByImageTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTasksReadyTaskInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTasksReadyTaskInfo`](SerpGoogleSearchByImageTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:47698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47698)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#data)

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

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:47694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47694)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleSearchByImageTasksReadyTaskInfo.md#time)

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

[main.ts:47702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47702)

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

[main.ts:47724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47724)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTasksReadyTaskInfo`](SerpGoogleSearchByImageTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTasksReadyTaskInfo`](SerpGoogleSearchByImageTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:47717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47717)
