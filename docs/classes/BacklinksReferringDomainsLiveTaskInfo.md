[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksReferringDomainsLiveTaskInfo

# Class: BacklinksReferringDomainsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BacklinksReferringDomainsLiveTaskInfo`**

## Implements

- [`IBacklinksReferringDomainsLiveTaskInfo`](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksReferringDomainsLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksReferringDomainsLiveTaskInfo.md#cost)
- [data](BacklinksReferringDomainsLiveTaskInfo.md#data)
- [id](BacklinksReferringDomainsLiveTaskInfo.md#id)
- [path](BacklinksReferringDomainsLiveTaskInfo.md#path)
- [result](BacklinksReferringDomainsLiveTaskInfo.md#result)
- [result\_count](BacklinksReferringDomainsLiveTaskInfo.md#result_count)
- [status\_code](BacklinksReferringDomainsLiveTaskInfo.md#status_code)
- [status\_message](BacklinksReferringDomainsLiveTaskInfo.md#status_message)
- [time](BacklinksReferringDomainsLiveTaskInfo.md#time)

### Methods

- [init](BacklinksReferringDomainsLiveTaskInfo.md#init)
- [toJSON](BacklinksReferringDomainsLiveTaskInfo.md#tojson)
- [fromJS](BacklinksReferringDomainsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksReferringDomainsLiveTaskInfo**(`data?`): [`BacklinksReferringDomainsLiveTaskInfo`](BacklinksReferringDomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksReferringDomainsLiveTaskInfo`](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md) |

#### Returns

[`BacklinksReferringDomainsLiveTaskInfo`](BacklinksReferringDomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:135047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135047)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[cost](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#cost)

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

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[data](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#data)

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

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[id](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[path](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[result](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#result)

#### Defined in

[main.ts:135043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135043)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[result_count](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#result_count)

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

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[status_code](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#status_code)

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

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[status_message](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksReferringDomainsLiveTaskInfo](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md).[time](../interfaces/IBacklinksReferringDomainsLiveTaskInfo.md#time)

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

[main.ts:135051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135051)

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

[main.ts:135073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135073)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksReferringDomainsLiveTaskInfo`](BacklinksReferringDomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksReferringDomainsLiveTaskInfo`](BacklinksReferringDomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:135066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135066)
