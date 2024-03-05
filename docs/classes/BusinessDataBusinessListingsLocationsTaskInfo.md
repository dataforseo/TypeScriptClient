[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsLocationsTaskInfo

# Class: BusinessDataBusinessListingsLocationsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataBusinessListingsLocationsTaskInfo`**

## Implements

- [`IBusinessDataBusinessListingsLocationsTaskInfo`](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsLocationsTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataBusinessListingsLocationsTaskInfo.md#cost)
- [data](BusinessDataBusinessListingsLocationsTaskInfo.md#data)
- [id](BusinessDataBusinessListingsLocationsTaskInfo.md#id)
- [path](BusinessDataBusinessListingsLocationsTaskInfo.md#path)
- [result](BusinessDataBusinessListingsLocationsTaskInfo.md#result)
- [result\_count](BusinessDataBusinessListingsLocationsTaskInfo.md#result_count)
- [status\_code](BusinessDataBusinessListingsLocationsTaskInfo.md#status_code)
- [status\_message](BusinessDataBusinessListingsLocationsTaskInfo.md#status_message)
- [time](BusinessDataBusinessListingsLocationsTaskInfo.md#time)

### Methods

- [init](BusinessDataBusinessListingsLocationsTaskInfo.md#init)
- [toJSON](BusinessDataBusinessListingsLocationsTaskInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsLocationsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsLocationsTaskInfo**(`data?`): [`BusinessDataBusinessListingsLocationsTaskInfo`](BusinessDataBusinessListingsLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsLocationsTaskInfo`](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md) |

#### Returns

[`BusinessDataBusinessListingsLocationsTaskInfo`](BusinessDataBusinessListingsLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:187900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187900)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[cost](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#cost)

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

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[data](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#data)

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

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[id](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[path](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[result](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#result)

#### Defined in

[main.ts:187896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187896)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[result_count](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#result_count)

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

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[status_code](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#status_code)

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

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[status_message](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataBusinessListingsLocationsTaskInfo](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md).[time](../interfaces/IBusinessDataBusinessListingsLocationsTaskInfo.md#time)

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

[main.ts:187904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187904)

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

[main.ts:187926](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187926)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsLocationsTaskInfo`](BusinessDataBusinessListingsLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsLocationsTaskInfo`](BusinessDataBusinessListingsLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:187919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187919)
