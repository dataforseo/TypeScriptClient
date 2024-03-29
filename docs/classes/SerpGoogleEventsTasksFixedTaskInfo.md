[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTasksFixedTaskInfo

# Class: SerpGoogleEventsTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleEventsTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleEventsTasksFixedTaskInfo`](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleEventsTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleEventsTasksFixedTaskInfo.md#data)
- [id](SerpGoogleEventsTasksFixedTaskInfo.md#id)
- [path](SerpGoogleEventsTasksFixedTaskInfo.md#path)
- [result](SerpGoogleEventsTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleEventsTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleEventsTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleEventsTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleEventsTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleEventsTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleEventsTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleEventsTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTasksFixedTaskInfo**(`data?`): [`SerpGoogleEventsTasksFixedTaskInfo`](SerpGoogleEventsTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTasksFixedTaskInfo`](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleEventsTasksFixedTaskInfo`](SerpGoogleEventsTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:44316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44316)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#data)

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

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleEventsTasksFixedResultInfo`](SerpGoogleEventsTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:44312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44312)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleEventsTasksFixedTaskInfo](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleEventsTasksFixedTaskInfo.md#time)

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

[main.ts:44320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44320)

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

[main.ts:44342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44342)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTasksFixedTaskInfo`](SerpGoogleEventsTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTasksFixedTaskInfo`](SerpGoogleEventsTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:44335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44335)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")