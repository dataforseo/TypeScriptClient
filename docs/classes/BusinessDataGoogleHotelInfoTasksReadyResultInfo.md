[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTasksReadyResultInfo

# Class: BusinessDataGoogleHotelInfoTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_html)
- [id](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#id)
- [se](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se)
- [tag](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTasksReadyResultInfo**(`data?`): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:200562

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:200552

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:200556

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[endpoint_html](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:200558

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:200547

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:200550

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:200554

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

main.ts:200571

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

main.ts:200593

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:200586
