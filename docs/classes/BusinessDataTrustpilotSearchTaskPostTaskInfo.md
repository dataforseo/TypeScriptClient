[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTaskPostTaskInfo

# Class: BusinessDataTrustpilotSearchTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataTrustpilotSearchTaskPostTaskInfo`**

## Implements

- [`IBusinessDataTrustpilotSearchTaskPostTaskInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#cost)
- [data](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#data)
- [id](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#id)
- [path](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#path)
- [result](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#result)
- [result\_count](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#result_count)
- [status\_code](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#status_message)
- [time](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#time)

### Methods

- [init](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTaskPostTaskInfo**(`data?`): [`BusinessDataTrustpilotSearchTaskPostTaskInfo`](BusinessDataTrustpilotSearchTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTaskPostTaskInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTaskPostTaskInfo`](BusinessDataTrustpilotSearchTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:198825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198825)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[cost](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#cost)

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

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[data](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#data)

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

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[id](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[path](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#path)

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

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[result](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:198821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198821)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[result_count](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#result_count)

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

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#status_code)

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

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md).[time](../interfaces/IBusinessDataTrustpilotSearchTaskPostTaskInfo.md#time)

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

[main.ts:198829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198829)

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

[main.ts:198847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198847)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskPostTaskInfo`](BusinessDataTrustpilotSearchTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTaskPostTaskInfo`](BusinessDataTrustpilotSearchTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:198840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198840)
