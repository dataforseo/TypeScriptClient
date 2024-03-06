[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTasksFixedTaskInfo

# Class: SerpBaiduOrganicTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBaiduOrganicTasksFixedTaskInfo`**

## Implements

- [`ISerpBaiduOrganicTasksFixedTaskInfo`](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTasksFixedTaskInfo.md#cost)
- [data](SerpBaiduOrganicTasksFixedTaskInfo.md#data)
- [id](SerpBaiduOrganicTasksFixedTaskInfo.md#id)
- [path](SerpBaiduOrganicTasksFixedTaskInfo.md#path)
- [result](SerpBaiduOrganicTasksFixedTaskInfo.md#result)
- [result\_count](SerpBaiduOrganicTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpBaiduOrganicTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTasksFixedTaskInfo.md#status_message)
- [time](SerpBaiduOrganicTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpBaiduOrganicTasksFixedTaskInfo.md#init)
- [toJSON](SerpBaiduOrganicTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTasksFixedTaskInfo**(`data?`): [`SerpBaiduOrganicTasksFixedTaskInfo`](SerpBaiduOrganicTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTasksFixedTaskInfo`](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md) |

#### Returns

[`SerpBaiduOrganicTasksFixedTaskInfo`](SerpBaiduOrganicTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:66488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66488)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[cost](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#cost)

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

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[data](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#data)

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

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[id](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[path](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[result](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:66484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66484)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#result_count)

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

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#status_code)

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

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTasksFixedTaskInfo](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md).[time](../interfaces/ISerpBaiduOrganicTasksFixedTaskInfo.md#time)

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

[main.ts:66492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66492)

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

[main.ts:66514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66514)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTasksFixedTaskInfo`](SerpBaiduOrganicTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTasksFixedTaskInfo`](SerpBaiduOrganicTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:66507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66507)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")