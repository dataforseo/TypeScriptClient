[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoLiveAdvancedResponseInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:53211

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetInfoLiveAdvancedTaskInfo`](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:53207

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

[BaseResponseInfo](BaseResponseInfo.md).[init](BaseResponseInfo.md#init)

#### Defined in

main.ts:53215

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

[BaseResponseInfo](BaseResponseInfo.md).[toJSON](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:53237

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:53230
