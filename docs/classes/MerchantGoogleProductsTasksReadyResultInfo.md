[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTasksReadyResultInfo

# Class: MerchantGoogleProductsTasksReadyResultInfo

## Implements

- [`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](MerchantGoogleProductsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](MerchantGoogleProductsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](MerchantGoogleProductsTasksReadyResultInfo.md#endpoint_html)
- [id](MerchantGoogleProductsTasksReadyResultInfo.md#id)
- [se](MerchantGoogleProductsTasksReadyResultInfo.md#se)
- [se\_type](MerchantGoogleProductsTasksReadyResultInfo.md#se_type)
- [tag](MerchantGoogleProductsTasksReadyResultInfo.md#tag)

### Methods

- [init](MerchantGoogleProductsTasksReadyResultInfo.md#init)
- [toJSON](MerchantGoogleProductsTasksReadyResultInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTasksReadyResultInfo**(`data?`): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md) |

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Defined in

[main.ts:164247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164247)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IMerchantGoogleProductsTasksReadyResultInfo](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[date_posted](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:164237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164237)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Products Advanced task

#### Implementation of

[IMerchantGoogleProductsTasksReadyResultInfo](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:164241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164241)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Products HTML task

#### Implementation of

[IMerchantGoogleProductsTasksReadyResultInfo](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[endpoint_html](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:164243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164243)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IMerchantGoogleProductsTasksReadyResultInfo](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[id](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:164230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164230)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IMerchantGoogleProductsTasksReadyResultInfo](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[se](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:164232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164232)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[IMerchantGoogleProductsTasksReadyResultInfo](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[se_type](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:164235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164235)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IMerchantGoogleProductsTasksReadyResultInfo](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[tag](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:164239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164239)

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

[main.ts:164256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164256)

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

[main.ts:164279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164279)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Defined in

[main.ts:164272](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164272)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")