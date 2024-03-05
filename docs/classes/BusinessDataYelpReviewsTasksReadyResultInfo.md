[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTasksReadyResultInfo

# Class: BusinessDataYelpReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataYelpReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataYelpReviewsTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataYelpReviewsTasksReadyResultInfo.md#id)
- [se](BusinessDataYelpReviewsTasksReadyResultInfo.md#se)
- [se\_type](BusinessDataYelpReviewsTasksReadyResultInfo.md#se_type)
- [tag](BusinessDataYelpReviewsTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataYelpReviewsTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTasksReadyResultInfo**(`data?`): [`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:205055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205055)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyResultInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:205047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205047)

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyResultInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#endpoint)

#### Defined in

[main.ts:205051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205051)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyResultInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:205039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205039)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyResultInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:205042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205042)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: reviews

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyResultInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[se_type](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:205045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205045)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyResultInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:205049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205049)

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

[main.ts:205064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205064)

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

[main.ts:205086](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205086)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:205079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205079)
