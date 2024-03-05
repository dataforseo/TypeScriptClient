[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#cost)
- [data](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#data)
- [id](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#id)
- [path](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#path)
- [result](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo**(`data?`): [`BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:190906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190906)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#data)

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

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:190902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190902)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md#time)

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

[main.ts:190910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190910)

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

[main.ts:190932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190932)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:190925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190925)
