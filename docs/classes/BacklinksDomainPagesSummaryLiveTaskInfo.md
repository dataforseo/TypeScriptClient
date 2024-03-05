[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesSummaryLiveTaskInfo

# Class: BacklinksDomainPagesSummaryLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BacklinksDomainPagesSummaryLiveTaskInfo`**

## Implements

- [`IBacklinksDomainPagesSummaryLiveTaskInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesSummaryLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksDomainPagesSummaryLiveTaskInfo.md#cost)
- [data](BacklinksDomainPagesSummaryLiveTaskInfo.md#data)
- [id](BacklinksDomainPagesSummaryLiveTaskInfo.md#id)
- [path](BacklinksDomainPagesSummaryLiveTaskInfo.md#path)
- [result](BacklinksDomainPagesSummaryLiveTaskInfo.md#result)
- [result\_count](BacklinksDomainPagesSummaryLiveTaskInfo.md#result_count)
- [status\_code](BacklinksDomainPagesSummaryLiveTaskInfo.md#status_code)
- [status\_message](BacklinksDomainPagesSummaryLiveTaskInfo.md#status_message)
- [time](BacklinksDomainPagesSummaryLiveTaskInfo.md#time)

### Methods

- [init](BacklinksDomainPagesSummaryLiveTaskInfo.md#init)
- [toJSON](BacklinksDomainPagesSummaryLiveTaskInfo.md#tojson)
- [fromJS](BacklinksDomainPagesSummaryLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesSummaryLiveTaskInfo**(`data?`): [`BacklinksDomainPagesSummaryLiveTaskInfo`](BacklinksDomainPagesSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesSummaryLiveTaskInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md) |

#### Returns

[`BacklinksDomainPagesSummaryLiveTaskInfo`](BacklinksDomainPagesSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:134271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134271)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[cost](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#cost)

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

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[data](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#data)

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

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[id](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[path](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[result](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#result)

#### Defined in

[main.ts:134267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134267)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[result_count](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#result_count)

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

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[status_code](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#status_code)

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

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[status_message](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksDomainPagesSummaryLiveTaskInfo](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md).[time](../interfaces/IBacklinksDomainPagesSummaryLiveTaskInfo.md#time)

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

[main.ts:134275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134275)

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

[main.ts:134297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134297)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveTaskInfo`](BacklinksDomainPagesSummaryLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesSummaryLiveTaskInfo`](BacklinksDomainPagesSummaryLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:134290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134290)
