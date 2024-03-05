[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:83582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83582)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result)

#### Defined in

[main.ts:83578](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83578)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md#time)

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

[main.ts:83586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83586)

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

[main.ts:83608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83608)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:83601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83601)
