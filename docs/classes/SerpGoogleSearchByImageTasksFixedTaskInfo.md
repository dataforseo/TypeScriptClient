[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTasksFixedTaskInfo

# Class: SerpGoogleSearchByImageTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleSearchByImageTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleSearchByImageTasksFixedTaskInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleSearchByImageTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleSearchByImageTasksFixedTaskInfo.md#data)
- [id](SerpGoogleSearchByImageTasksFixedTaskInfo.md#id)
- [path](SerpGoogleSearchByImageTasksFixedTaskInfo.md#path)
- [result](SerpGoogleSearchByImageTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleSearchByImageTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleSearchByImageTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleSearchByImageTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleSearchByImageTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleSearchByImageTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTasksFixedTaskInfo**(`data?`): [`SerpGoogleSearchByImageTasksFixedTaskInfo`](SerpGoogleSearchByImageTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTasksFixedTaskInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTasksFixedTaskInfo`](SerpGoogleSearchByImageTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:47910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47910)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#data)

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

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:47906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47906)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedTaskInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleSearchByImageTasksFixedTaskInfo.md#time)

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

[main.ts:47914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47914)

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

[main.ts:47936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47936)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTasksFixedTaskInfo`](SerpGoogleSearchByImageTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTasksFixedTaskInfo`](SerpGoogleSearchByImageTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:47929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47929)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")