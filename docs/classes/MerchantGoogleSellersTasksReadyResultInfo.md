[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTasksReadyResultInfo

# Class: MerchantGoogleSellersTasksReadyResultInfo

## Implements

- [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](MerchantGoogleSellersTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](MerchantGoogleSellersTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](MerchantGoogleSellersTasksReadyResultInfo.md#endpoint_html)
- [id](MerchantGoogleSellersTasksReadyResultInfo.md#id)
- [se](MerchantGoogleSellersTasksReadyResultInfo.md#se)
- [se\_type](MerchantGoogleSellersTasksReadyResultInfo.md#se_type)
- [tag](MerchantGoogleSellersTasksReadyResultInfo.md#tag)

### Methods

- [init](MerchantGoogleSellersTasksReadyResultInfo.md#init)
- [toJSON](MerchantGoogleSellersTasksReadyResultInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTasksReadyResultInfo**(`data?`): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md) |

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Defined in

main.ts:171688

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantGoogleSellersTasksReadyResultInfo](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:171678

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Sellers Advanced task

#### Implementation of

[IMerchantGoogleSellersTasksReadyResultInfo](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:171682

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Sellers HTML task

#### Implementation of

[IMerchantGoogleSellersTasksReadyResultInfo](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:171684

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantGoogleSellersTasksReadyResultInfo](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[id](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#id)

#### Defined in

main.ts:171671

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantGoogleSellersTasksReadyResultInfo](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[se](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se)

#### Defined in

main.ts:171673

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[IMerchantGoogleSellersTasksReadyResultInfo](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:171676

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantGoogleSellersTasksReadyResultInfo](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[tag](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:171680

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

main.ts:171697

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

main.ts:171720

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Defined in

main.ts:171713
