[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTasksFixedTaskInfo

# Class: SerpGoogleLocalFinderTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleLocalFinderTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleLocalFinderTasksFixedTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleLocalFinderTasksFixedTaskInfo.md#data)
- [id](SerpGoogleLocalFinderTasksFixedTaskInfo.md#id)
- [path](SerpGoogleLocalFinderTasksFixedTaskInfo.md#path)
- [result](SerpGoogleLocalFinderTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleLocalFinderTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleLocalFinderTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleLocalFinderTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleLocalFinderTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTasksFixedTaskInfo**(`data?`): [`SerpGoogleLocalFinderTasksFixedTaskInfo`](SerpGoogleLocalFinderTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTasksFixedTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTasksFixedTaskInfo`](SerpGoogleLocalFinderTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:40376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40376)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#data)

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

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleLocalFinderTasksFixedResultInfo`](SerpGoogleLocalFinderTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:40372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40372)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleLocalFinderTasksFixedTaskInfo.md#time)

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

[main.ts:40380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40380)

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

[main.ts:40402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40402)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTasksFixedTaskInfo`](SerpGoogleLocalFinderTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTasksFixedTaskInfo`](SerpGoogleLocalFinderTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:40395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40395)
