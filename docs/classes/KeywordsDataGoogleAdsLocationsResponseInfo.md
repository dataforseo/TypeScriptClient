[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsLocationsResponseInfo

# Class: KeywordsDataGoogleAdsLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsLocationsResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsLocationsResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsLocationsResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsLocationsResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsLocationsResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsLocationsResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsLocationsResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsLocationsResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsLocationsResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsLocationsResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsLocationsResponseInfo**(`data?`): [`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:113393

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsLocationsTaskInfo`](KeywordsDataGoogleAdsLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:113389

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#version)

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

main.ts:113397

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

main.ts:113419

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:113412
