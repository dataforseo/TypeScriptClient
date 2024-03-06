[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTasksFixedTaskInfo

# Class: SerpGoogleDatasetInfoTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleDatasetInfoTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleDatasetInfoTasksFixedTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#data)
- [id](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#id)
- [path](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#path)
- [result](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTasksFixedTaskInfo**(`data?`): [`SerpGoogleDatasetInfoTasksFixedTaskInfo`](SerpGoogleDatasetInfoTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTasksFixedTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTasksFixedTaskInfo`](SerpGoogleDatasetInfoTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:52400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52400)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#data)

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

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleDatasetInfoTasksFixedResultInfo`](SerpGoogleDatasetInfoTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:52396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52396)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoTasksFixedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoTasksFixedTaskInfo.md#time)

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

[main.ts:52404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52404)

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

[main.ts:52426](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52426)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksFixedTaskInfo`](SerpGoogleDatasetInfoTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTasksFixedTaskInfo`](SerpGoogleDatasetInfoTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:52419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52419)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")