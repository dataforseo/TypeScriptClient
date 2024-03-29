[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTasksReadyTaskInfo

# Class: BusinessDataTrustpilotSearchTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataTrustpilotSearchTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyTaskInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#cost)
- [data](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#data)
- [id](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#id)
- [path](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#path)
- [result](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTasksReadyTaskInfo**(`data?`): [`BusinessDataTrustpilotSearchTasksReadyTaskInfo`](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTasksReadyTaskInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyTaskInfo`](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:199006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199006)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#cost)

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

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#data)

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

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:199002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199002)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataTrustpilotSearchTasksReadyTaskInfo.md#time)

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

[main.ts:199010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199010)

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

[main.ts:199032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199032)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTasksReadyTaskInfo`](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyTaskInfo`](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:199025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199025)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")