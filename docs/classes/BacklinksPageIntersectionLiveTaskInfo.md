[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksPageIntersectionLiveTaskInfo

# Class: BacklinksPageIntersectionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BacklinksPageIntersectionLiveTaskInfo`**

## Implements

- [`IBacklinksPageIntersectionLiveTaskInfo`](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksPageIntersectionLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksPageIntersectionLiveTaskInfo.md#cost)
- [data](BacklinksPageIntersectionLiveTaskInfo.md#data)
- [id](BacklinksPageIntersectionLiveTaskInfo.md#id)
- [path](BacklinksPageIntersectionLiveTaskInfo.md#path)
- [result](BacklinksPageIntersectionLiveTaskInfo.md#result)
- [result\_count](BacklinksPageIntersectionLiveTaskInfo.md#result_count)
- [status\_code](BacklinksPageIntersectionLiveTaskInfo.md#status_code)
- [status\_message](BacklinksPageIntersectionLiveTaskInfo.md#status_message)
- [time](BacklinksPageIntersectionLiveTaskInfo.md#time)

### Methods

- [init](BacklinksPageIntersectionLiveTaskInfo.md#init)
- [toJSON](BacklinksPageIntersectionLiveTaskInfo.md#tojson)
- [fromJS](BacklinksPageIntersectionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksPageIntersectionLiveTaskInfo**(`data?`): [`BacklinksPageIntersectionLiveTaskInfo`](BacklinksPageIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksPageIntersectionLiveTaskInfo`](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md) |

#### Returns

[`BacklinksPageIntersectionLiveTaskInfo`](BacklinksPageIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:138251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138251)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[cost](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#cost)

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

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[data](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#data)

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

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[id](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[path](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[result](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#result)

#### Defined in

[main.ts:138247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138247)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[result_count](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#result_count)

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

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[status_code](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#status_code)

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

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[status_message](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksPageIntersectionLiveTaskInfo](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md).[time](../interfaces/IBacklinksPageIntersectionLiveTaskInfo.md#time)

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

[main.ts:138255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138255)

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

[main.ts:138277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138277)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksPageIntersectionLiveTaskInfo`](BacklinksPageIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksPageIntersectionLiveTaskInfo`](BacklinksPageIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:138270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138270)
