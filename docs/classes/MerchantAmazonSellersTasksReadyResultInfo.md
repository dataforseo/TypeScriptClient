[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTasksReadyResultInfo

# Class: MerchantAmazonSellersTasksReadyResultInfo

## Implements

- [`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](MerchantAmazonSellersTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](MerchantAmazonSellersTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](MerchantAmazonSellersTasksReadyResultInfo.md#endpoint_html)
- [id](MerchantAmazonSellersTasksReadyResultInfo.md#id)
- [se](MerchantAmazonSellersTasksReadyResultInfo.md#se)
- [se\_type](MerchantAmazonSellersTasksReadyResultInfo.md#se_type)
- [tag](MerchantAmazonSellersTasksReadyResultInfo.md#tag)

### Methods

- [init](MerchantAmazonSellersTasksReadyResultInfo.md#init)
- [toJSON](MerchantAmazonSellersTasksReadyResultInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTasksReadyResultInfo**(`data?`): [`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md) |

#### Returns

[`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Defined in

[main.ts:173932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173932)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantAmazonSellersTasksReadyResultInfo](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:173922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173922)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of Amazon Sellers Advanced task

#### Implementation of

[IMerchantAmazonSellersTasksReadyResultInfo](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:173926](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173926)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of Amazon Sellers HTML task

#### Implementation of

[IMerchantAmazonSellersTasksReadyResultInfo](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:173928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173928)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantAmazonSellersTasksReadyResultInfo](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[id](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:173915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173915)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantAmazonSellersTasksReadyResultInfo](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[se](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:173917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173917)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[IMerchantAmazonSellersTasksReadyResultInfo](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:173920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173920)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantAmazonSellersTasksReadyResultInfo](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[tag](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:173924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173924)

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

[main.ts:173941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173941)

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

[main.ts:173964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173964)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Defined in

[main.ts:173957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173957)
