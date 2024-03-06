[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTaskGetTaskInfo

# Class: BusinessDataTrustpilotSearchTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataTrustpilotSearchTaskGetTaskInfo`**

## Implements

- [`IBusinessDataTrustpilotSearchTaskGetTaskInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#cost)
- [data](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#data)
- [id](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#id)
- [path](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#path)
- [result](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#status_message)
- [time](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTaskGetTaskInfo**(`data?`): [`BusinessDataTrustpilotSearchTaskGetTaskInfo`](BusinessDataTrustpilotSearchTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTaskGetTaskInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTaskGetTaskInfo`](BusinessDataTrustpilotSearchTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:199304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199304)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#cost)

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

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#data)

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

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:199300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199300)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#result_count)

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

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#status_code)

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

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataTrustpilotSearchTaskGetTaskInfo.md#time)

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

[main.ts:199308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199308)

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

[main.ts:199330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199330)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskGetTaskInfo`](BusinessDataTrustpilotSearchTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTaskGetTaskInfo`](BusinessDataTrustpilotSearchTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:199323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199323)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")