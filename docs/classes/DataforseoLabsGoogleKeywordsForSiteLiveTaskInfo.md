[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo

# Class: DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:80006

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:22744

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:22750

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#result)

#### Defined in

main.ts:80002

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:22746

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:22737

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:22742

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

main.ts:80010

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

main.ts:80032

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:80025
