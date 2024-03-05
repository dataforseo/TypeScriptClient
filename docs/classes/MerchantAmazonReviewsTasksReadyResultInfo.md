[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTasksReadyResultInfo

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

[main.ts:175360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175360)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:175350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175350)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:175354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175354)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:175356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175356)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[id](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:175343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175343)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[se](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:175345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175345)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:175348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175348)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResultInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[tag](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:175352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175352)

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

[main.ts:175369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175369)

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

[main.ts:175392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175392)

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

[main.ts:175385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175385)
