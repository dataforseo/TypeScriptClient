[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTasksReadyResultInfo

# Class: MerchantAmazonAsinTasksReadyResultInfo

## Implements

- [`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](MerchantAmazonAsinTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](MerchantAmazonAsinTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](MerchantAmazonAsinTasksReadyResultInfo.md#endpoint_html)
- [id](MerchantAmazonAsinTasksReadyResultInfo.md#id)
- [se](MerchantAmazonAsinTasksReadyResultInfo.md#se)
- [se\_type](MerchantAmazonAsinTasksReadyResultInfo.md#se_type)
- [tag](MerchantAmazonAsinTasksReadyResultInfo.md#tag)

### Methods

- [init](MerchantAmazonAsinTasksReadyResultInfo.md#init)
- [toJSON](MerchantAmazonAsinTasksReadyResultInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTasksReadyResultInfo**(`data?`): [`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md) |

#### Returns

[`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Defined in

main.ts:177593

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantAmazonAsinTasksReadyResultInfo](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:177583

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon ASIN Advanced task

#### Implementation of

[IMerchantAmazonAsinTasksReadyResultInfo](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:177587

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon ASIN HTML task

#### Implementation of

[IMerchantAmazonAsinTasksReadyResultInfo](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:177589

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantAmazonAsinTasksReadyResultInfo](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[id](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#id)

#### Defined in

main.ts:177576

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantAmazonAsinTasksReadyResultInfo](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[se](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se)

#### Defined in

main.ts:177578

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[IMerchantAmazonAsinTasksReadyResultInfo](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:177581

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantAmazonAsinTasksReadyResultInfo](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[tag](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:177585

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

main.ts:177602

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

main.ts:177625

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Defined in

main.ts:177618
