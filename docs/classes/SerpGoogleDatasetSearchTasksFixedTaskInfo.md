[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTasksFixedTaskInfo

# Class: SerpGoogleDatasetSearchTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleDatasetSearchTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedTaskInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#data)
- [id](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#id)
- [path](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#path)
- [result](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTasksFixedTaskInfo**(`data?`): [`SerpGoogleDatasetSearchTasksFixedTaskInfo`](SerpGoogleDatasetSearchTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTasksFixedTaskInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTasksFixedTaskInfo`](SerpGoogleDatasetSearchTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:50456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50456)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#data)

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

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:50452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50452)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchTasksFixedTaskInfo.md#time)

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

[main.ts:50460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50460)

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

[main.ts:50482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50482)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksFixedTaskInfo`](SerpGoogleDatasetSearchTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTasksFixedTaskInfo`](SerpGoogleDatasetSearchTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:50475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50475)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")