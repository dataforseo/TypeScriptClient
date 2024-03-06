[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingDomainIntersectionLiveTaskInfo

# Class: DataforseoLabsBingDomainIntersectionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsBingDomainIntersectionLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#data)
- [id](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#id)
- [path](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#path)
- [result](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingDomainIntersectionLiveTaskInfo**(`data?`): [`DataforseoLabsBingDomainIntersectionLiveTaskInfo`](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingDomainIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveTaskInfo`](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:103818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103818)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#data)

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

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#result)

#### Defined in

[main.ts:103814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103814)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingDomainIntersectionLiveTaskInfo.md#time)

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

[main.ts:103822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103822)

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

[main.ts:103844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103844)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveTaskInfo`](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveTaskInfo`](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:103837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103837)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")