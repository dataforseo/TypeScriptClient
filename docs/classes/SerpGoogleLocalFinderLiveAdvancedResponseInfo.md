[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderLiveAdvancedResponseInfo

# Class: SerpGoogleLocalFinderLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleLocalFinderLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:41573

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#cost)

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

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleLocalFinderLiveAdvancedTaskInfo`](SerpGoogleLocalFinderLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:41569

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResponseInfo.md#version)

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

main.ts:41577

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

main.ts:41599

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:41592
