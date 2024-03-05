[dataforseo-client](../README.md) / [Exports](../modules.md) / PeopleAlsoSearch

# Class: PeopleAlsoSearch

## Implements

- [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoSearch.md#constructor)

### Properties

- [cid](PeopleAlsoSearch.md#cid)
- [feature\_id](PeopleAlsoSearch.md#feature_id)
- [rating](PeopleAlsoSearch.md#rating)
- [title](PeopleAlsoSearch.md#title)

### Methods

- [init](PeopleAlsoSearch.md#init)
- [toJSON](PeopleAlsoSearch.md#tojson)
- [fromJS](PeopleAlsoSearch.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoSearch**(`data?`): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md) |

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Defined in

[main.ts:188695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188695)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[IPeopleAlsoSearch](../interfaces/IPeopleAlsoSearch.md).[cid](../interfaces/IPeopleAlsoSearch.md#cid)

#### Defined in

[main.ts:188682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188682)

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[IPeopleAlsoSearch](../interfaces/IPeopleAlsoSearch.md).[feature_id](../interfaces/IPeopleAlsoSearch.md#feature_id)

#### Defined in

[main.ts:188685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188685)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IPeopleAlsoSearch](../interfaces/IPeopleAlsoSearch.md).[rating](../interfaces/IPeopleAlsoSearch.md#rating)

#### Defined in

[main.ts:188691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188691)

___

### title

• `Optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[IPeopleAlsoSearch](../interfaces/IPeopleAlsoSearch.md).[title](../interfaces/IPeopleAlsoSearch.md#title)

#### Defined in

[main.ts:188688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188688)

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

[main.ts:188704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188704)

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

[main.ts:188724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188724)

___

### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Defined in

[main.ts:188717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188717)
