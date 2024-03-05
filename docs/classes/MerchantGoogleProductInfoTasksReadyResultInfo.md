[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductInfoTasksReadyResultInfo

# Class: MerchantGoogleProductInfoTasksReadyResultInfo

## Implements

- [`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductInfoTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](MerchantGoogleProductInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](MerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](MerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_html)
- [id](MerchantGoogleProductInfoTasksReadyResultInfo.md#id)
- [se](MerchantGoogleProductInfoTasksReadyResultInfo.md#se)
- [se\_type](MerchantGoogleProductInfoTasksReadyResultInfo.md#se_type)
- [tag](MerchantGoogleProductInfoTasksReadyResultInfo.md#tag)

### Methods

- [init](MerchantGoogleProductInfoTasksReadyResultInfo.md#init)
- [toJSON](MerchantGoogleProductInfoTasksReadyResultInfo.md#tojson)
- [fromJS](MerchantGoogleProductInfoTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductInfoTasksReadyResultInfo**(`data?`): [`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md) |

#### Returns

[`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:168796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168796)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyResultInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:168785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168785)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyResultInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:168789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168789)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google Shopping Product Specifications HTML task
note: HTML is not available for this endpoint, the value will be null

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyResultInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:168792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168792)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyResultInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[id](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:168778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168778)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyResultInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[se](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:168780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168780)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping_specifications

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyResultInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:168783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168783)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyResultInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[tag](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:168787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168787)

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

[main.ts:168805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168805)

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

[main.ts:168828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168828)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:168821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168821)
