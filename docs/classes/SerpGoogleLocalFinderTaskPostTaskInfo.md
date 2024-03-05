[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTaskPostTaskInfo

# Class: SerpGoogleLocalFinderTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleLocalFinderTaskPostTaskInfo`**

## Implements

- [`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderTaskPostTaskInfo.md#cost)
- [data](SerpGoogleLocalFinderTaskPostTaskInfo.md#data)
- [id](SerpGoogleLocalFinderTaskPostTaskInfo.md#id)
- [path](SerpGoogleLocalFinderTaskPostTaskInfo.md#path)
- [result](SerpGoogleLocalFinderTaskPostTaskInfo.md#result)
- [result\_count](SerpGoogleLocalFinderTaskPostTaskInfo.md#result_count)
- [status\_code](SerpGoogleLocalFinderTaskPostTaskInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderTaskPostTaskInfo.md#status_message)
- [time](SerpGoogleLocalFinderTaskPostTaskInfo.md#time)

### Methods

- [init](SerpGoogleLocalFinderTaskPostTaskInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTaskPostTaskInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTaskPostTaskInfo**(`data?`): [`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:39959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39959)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#cost)

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

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[data](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#data)

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

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[id](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[path](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[result](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:39955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39955)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[result_count](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#result_count)

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

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#status_code)

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

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderTaskPostTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[time](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#time)

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

[main.ts:39963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39963)

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

[main.ts:39981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39981)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:39974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39974)
