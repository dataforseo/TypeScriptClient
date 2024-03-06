[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTasksReadyResultInfo

# Class: MerchantAmazonProductsTasksReadyResultInfo

## Implements

- [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](MerchantAmazonProductsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](MerchantAmazonProductsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](MerchantAmazonProductsTasksReadyResultInfo.md#endpoint_html)
- [id](MerchantAmazonProductsTasksReadyResultInfo.md#id)
- [se](MerchantAmazonProductsTasksReadyResultInfo.md#se)
- [se\_type](MerchantAmazonProductsTasksReadyResultInfo.md#se_type)
- [tag](MerchantAmazonProductsTasksReadyResultInfo.md#tag)

### Methods

- [init](MerchantAmazonProductsTasksReadyResultInfo.md#init)
- [toJSON](MerchantAmazonProductsTasksReadyResultInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTasksReadyResultInfo**(`data?`): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md) |

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Defined in

[main.ts:170474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170474)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantAmazonProductsTasksReadyResultInfo](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:170464](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170464)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Products Advanced task

#### Implementation of

[IMerchantAmazonProductsTasksReadyResultInfo](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:170468](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170468)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Products HTML task

#### Implementation of

[IMerchantAmazonProductsTasksReadyResultInfo](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:170470](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170470)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantAmazonProductsTasksReadyResultInfo](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[id](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:170457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170457)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantAmazonProductsTasksReadyResultInfo](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[se](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:170459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170459)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[IMerchantAmazonProductsTasksReadyResultInfo](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:170462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170462)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantAmazonProductsTasksReadyResultInfo](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[tag](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:170466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170466)

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

[main.ts:170483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170483)

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

[main.ts:170506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170506)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Defined in

[main.ts:170499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170499)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")