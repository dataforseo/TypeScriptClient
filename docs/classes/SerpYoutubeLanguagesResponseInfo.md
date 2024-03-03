[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeLanguagesResponseInfo

# Class: SerpYoutubeLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYoutubeLanguagesResponseInfo`**

## Implements

- [`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeLanguagesResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeLanguagesResponseInfo.md#cost)
- [status\_code](SerpYoutubeLanguagesResponseInfo.md#status_code)
- [status\_message](SerpYoutubeLanguagesResponseInfo.md#status_message)
- [tasks](SerpYoutubeLanguagesResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeLanguagesResponseInfo.md#tasks_error)
- [time](SerpYoutubeLanguagesResponseInfo.md#time)
- [version](SerpYoutubeLanguagesResponseInfo.md#version)

### Methods

- [init](SerpYoutubeLanguagesResponseInfo.md#init)
- [toJSON](SerpYoutubeLanguagesResponseInfo.md#tojson)
- [fromJS](SerpYoutubeLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeLanguagesResponseInfo**(`data?`): [`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md) |

#### Returns

[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:57827

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[cost](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#cost)

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

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[status_code](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#status_code)

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

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[status_message](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpYoutubeLanguagesTaskInfo`](SerpYoutubeLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[tasks](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:57823

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[time](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeLanguagesResponseInfo](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[version](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#version)

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

main.ts:57831

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

main.ts:57853

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:57846
