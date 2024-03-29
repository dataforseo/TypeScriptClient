[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTasksFixedTaskInfo

# Class: SerpGoogleImagesTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleImagesTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleImagesTasksFixedTaskInfo`](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleImagesTasksFixedTaskInfo.md#data)
- [id](SerpGoogleImagesTasksFixedTaskInfo.md#id)
- [path](SerpGoogleImagesTasksFixedTaskInfo.md#path)
- [result](SerpGoogleImagesTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleImagesTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleImagesTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleImagesTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleImagesTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleImagesTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleImagesTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleImagesTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTasksFixedTaskInfo**(`data?`): [`SerpGoogleImagesTasksFixedTaskInfo`](SerpGoogleImagesTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTasksFixedTaskInfo`](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleImagesTasksFixedTaskInfo`](SerpGoogleImagesTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:45990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45990)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#data)

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

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:45986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45986)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleImagesTasksFixedTaskInfo](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleImagesTasksFixedTaskInfo.md#time)

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

[main.ts:45994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45994)

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

[main.ts:46016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46016)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTasksFixedTaskInfo`](SerpGoogleImagesTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTasksFixedTaskInfo`](SerpGoogleImagesTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:46009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46009)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")