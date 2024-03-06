[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderLiveAdvancedTaskInfo

# Class: SerpGoogleLocalFinderLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleLocalFinderLiveAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#cost)
- [data](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#data)
- [id](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#id)
- [path](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#path)
- [result](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderLiveAdvancedTaskInfo**(`data?`): [`SerpGoogleLocalFinderLiveAdvancedTaskInfo`](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedTaskInfo`](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:41376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41376)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#cost)

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

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#data)

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

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:41372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41372)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleLocalFinderLiveAdvancedTaskInfo.md#time)

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

[main.ts:41380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41380)

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

[main.ts:41402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41402)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderLiveAdvancedTaskInfo`](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedTaskInfo`](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:41395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41395)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")