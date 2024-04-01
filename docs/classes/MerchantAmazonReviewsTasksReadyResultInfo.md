[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTasksReadyResultInfo

# Class: MerchantAmazonReviewsTasksReadyResultInfo

## Implements

- [`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](MerchantAmazonReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](MerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](MerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_html)
- [id](MerchantAmazonReviewsTasksReadyResultInfo.md#id)
- [se](MerchantAmazonReviewsTasksReadyResultInfo.md#se)
- [se\_type](MerchantAmazonReviewsTasksReadyResultInfo.md#se_type)
- [tag](MerchantAmazonReviewsTasksReadyResultInfo.md#tag)

### Methods

- [init](MerchantAmazonReviewsTasksReadyResultInfo.md#init)
- [toJSON](MerchantAmazonReviewsTasksReadyResultInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTasksReadyResultInfo**(`data?`): [`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md) |

#### Returns

[`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:180813

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:180803

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:180807

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:180809

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[id](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:180796

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[se](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:180798

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:180801

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[tag](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:180805

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

main.ts:180822

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

main.ts:180845

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:180838
