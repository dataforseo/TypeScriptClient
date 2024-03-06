[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkReferringDomainsLiveTaskInfo

# Class: BacklinksBulkReferringDomainsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BacklinksBulkReferringDomainsLiveTaskInfo`**

## Implements

- [`IBacklinksBulkReferringDomainsLiveTaskInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkReferringDomainsLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksBulkReferringDomainsLiveTaskInfo.md#cost)
- [data](BacklinksBulkReferringDomainsLiveTaskInfo.md#data)
- [id](BacklinksBulkReferringDomainsLiveTaskInfo.md#id)
- [path](BacklinksBulkReferringDomainsLiveTaskInfo.md#path)
- [result](BacklinksBulkReferringDomainsLiveTaskInfo.md#result)
- [result\_count](BacklinksBulkReferringDomainsLiveTaskInfo.md#result_count)
- [status\_code](BacklinksBulkReferringDomainsLiveTaskInfo.md#status_code)
- [status\_message](BacklinksBulkReferringDomainsLiveTaskInfo.md#status_message)
- [time](BacklinksBulkReferringDomainsLiveTaskInfo.md#time)

### Methods

- [init](BacklinksBulkReferringDomainsLiveTaskInfo.md#init)
- [toJSON](BacklinksBulkReferringDomainsLiveTaskInfo.md#tojson)
- [fromJS](BacklinksBulkReferringDomainsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkReferringDomainsLiveTaskInfo**(`data?`): [`BacklinksBulkReferringDomainsLiveTaskInfo`](BacklinksBulkReferringDomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkReferringDomainsLiveTaskInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md) |

#### Returns

[`BacklinksBulkReferringDomainsLiveTaskInfo`](BacklinksBulkReferringDomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:140571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140571)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[cost](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#cost)

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

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[data](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#data)

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

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[id](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[path](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[result](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#result)

#### Defined in

[main.ts:140567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140567)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[result_count](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#result_count)

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

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[status_code](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#status_code)

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

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[status_message](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksBulkReferringDomainsLiveTaskInfo](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md).[time](../interfaces/IBacklinksBulkReferringDomainsLiveTaskInfo.md#time)

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

[main.ts:140575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140575)

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

[main.ts:140597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140597)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveTaskInfo`](BacklinksBulkReferringDomainsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkReferringDomainsLiveTaskInfo`](BacklinksBulkReferringDomainsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:140590](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140590)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")