[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpSearchTasksReadyResultInfo

# Class: BusinessDataYelpSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpSearchTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataYelpSearchTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataYelpSearchTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataYelpSearchTasksReadyResultInfo.md#id)
- [se](BusinessDataYelpSearchTasksReadyResultInfo.md#se)
- [se\_type](BusinessDataYelpSearchTasksReadyResultInfo.md#se_type)
- [tag](BusinessDataYelpSearchTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataYelpSearchTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataYelpSearchTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataYelpSearchTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpSearchTasksReadyResultInfo**(`data?`): [`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:203693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203693)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataYelpSearchTasksReadyResultInfo](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:203685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203685)

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataYelpSearchTasksReadyResultInfo](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#endpoint)

#### Defined in

[main.ts:203689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203689)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataYelpSearchTasksReadyResultInfo](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:203677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203677)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Implementation of

[IBusinessDataYelpSearchTasksReadyResultInfo](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:203680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203680)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: search

#### Implementation of

[IBusinessDataYelpSearchTasksReadyResultInfo](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[se_type](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:203683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203683)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataYelpSearchTasksReadyResultInfo](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:203687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203687)

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

[main.ts:203702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203702)

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

[main.ts:203724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203724)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:203717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203717)
