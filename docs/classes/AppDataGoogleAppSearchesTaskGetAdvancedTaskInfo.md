[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo

# Class: AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo**(`data?`): [`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:183367

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:23121

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:23127

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result)

#### Defined in

main.ts:183363

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:23123

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:23114

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:23119

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

main.ts:183371

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

main.ts:183393

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:183386
