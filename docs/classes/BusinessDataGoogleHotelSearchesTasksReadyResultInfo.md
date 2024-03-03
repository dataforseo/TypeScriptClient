[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#id)
- [se](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se)
- [tag](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTasksReadyResultInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Defined in

main.ts:193336

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:193328

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:193332

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#id)

#### Defined in

main.ts:193323

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se)

#### Defined in

main.ts:193326

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:193330

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:193345

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:193366

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Defined in

main.ts:193359
