[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainIntersectionLiveTaskInfo

# Class: BacklinksDomainIntersectionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BacklinksDomainIntersectionLiveTaskInfo`**

## Implements

- [`IBacklinksDomainIntersectionLiveTaskInfo`](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainIntersectionLiveTaskInfo.md#constructor)

### Properties

- [cost](BacklinksDomainIntersectionLiveTaskInfo.md#cost)
- [data](BacklinksDomainIntersectionLiveTaskInfo.md#data)
- [id](BacklinksDomainIntersectionLiveTaskInfo.md#id)
- [path](BacklinksDomainIntersectionLiveTaskInfo.md#path)
- [result](BacklinksDomainIntersectionLiveTaskInfo.md#result)
- [result\_count](BacklinksDomainIntersectionLiveTaskInfo.md#result_count)
- [status\_code](BacklinksDomainIntersectionLiveTaskInfo.md#status_code)
- [status\_message](BacklinksDomainIntersectionLiveTaskInfo.md#status_message)
- [time](BacklinksDomainIntersectionLiveTaskInfo.md#time)

### Methods

- [init](BacklinksDomainIntersectionLiveTaskInfo.md#init)
- [toJSON](BacklinksDomainIntersectionLiveTaskInfo.md#tojson)
- [fromJS](BacklinksDomainIntersectionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainIntersectionLiveTaskInfo**(`data?`): [`BacklinksDomainIntersectionLiveTaskInfo`](BacklinksDomainIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainIntersectionLiveTaskInfo`](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md) |

#### Returns

[`BacklinksDomainIntersectionLiveTaskInfo`](BacklinksDomainIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:137229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137229)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[cost](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#cost)

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

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[data](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#data)

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

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[id](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[path](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[result](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#result)

#### Defined in

[main.ts:137225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137225)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[result_count](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#result_count)

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

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[status_code](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#status_code)

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

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[status_message](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBacklinksDomainIntersectionLiveTaskInfo](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md).[time](../interfaces/IBacklinksDomainIntersectionLiveTaskInfo.md#time)

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

[main.ts:137233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137233)

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

[main.ts:137255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137255)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainIntersectionLiveTaskInfo`](BacklinksDomainIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainIntersectionLiveTaskInfo`](BacklinksDomainIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:137248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137248)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")