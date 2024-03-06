[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicLiveAdvancedTaskInfo

# Class: SerpBingOrganicLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingOrganicLiveAdvancedTaskInfo`**

## Implements

- [`ISerpBingOrganicLiveAdvancedTaskInfo`](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicLiveAdvancedTaskInfo.md#cost)
- [data](SerpBingOrganicLiveAdvancedTaskInfo.md#data)
- [id](SerpBingOrganicLiveAdvancedTaskInfo.md#id)
- [path](SerpBingOrganicLiveAdvancedTaskInfo.md#path)
- [result](SerpBingOrganicLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpBingOrganicLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpBingOrganicLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpBingOrganicLiveAdvancedTaskInfo.md#status_message)
- [time](SerpBingOrganicLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpBingOrganicLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpBingOrganicLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpBingOrganicLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicLiveAdvancedTaskInfo**(`data?`): [`SerpBingOrganicLiveAdvancedTaskInfo`](SerpBingOrganicLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicLiveAdvancedTaskInfo`](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpBingOrganicLiveAdvancedTaskInfo`](SerpBingOrganicLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:55364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55364)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#cost)

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

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#data)

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

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:55360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55360)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#result_count)

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

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#status_code)

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

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingOrganicLiveAdvancedTaskInfo](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpBingOrganicLiveAdvancedTaskInfo.md#time)

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

[main.ts:55368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55368)

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

[main.ts:55390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55390)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicLiveAdvancedTaskInfo`](SerpBingOrganicLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicLiveAdvancedTaskInfo`](SerpBingOrganicLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:55383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55383)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")