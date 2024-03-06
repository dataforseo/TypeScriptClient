[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTasksFixedTaskInfo

# Class: SerpGoogleOrganicTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleOrganicTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleOrganicTasksFixedTaskInfo`](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleOrganicTasksFixedTaskInfo.md#data)
- [id](SerpGoogleOrganicTasksFixedTaskInfo.md#id)
- [path](SerpGoogleOrganicTasksFixedTaskInfo.md#path)
- [result](SerpGoogleOrganicTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleOrganicTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTasksFixedTaskInfo**(`data?`): [`SerpGoogleOrganicTasksFixedTaskInfo`](SerpGoogleOrganicTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTasksFixedTaskInfo`](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicTasksFixedTaskInfo`](SerpGoogleOrganicTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:25044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25044)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#data)

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

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:25040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25040)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTasksFixedTaskInfo](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicTasksFixedTaskInfo.md#time)

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

[main.ts:25048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25048)

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

[main.ts:25070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25070)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTasksFixedTaskInfo`](SerpGoogleOrganicTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTasksFixedTaskInfo`](SerpGoogleOrganicTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:25063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25063)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")