[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#constructor)

### Properties

- [items](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items)
- [items\_count](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items_count)
- [offset](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset)
- [offset\_token](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset_token)
- [total\_count](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#total_count)

### Methods

- [init](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Defined in

[main.ts:74878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74878)

## Properties

### items

• `Optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

items array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[items](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items)

#### Defined in

[main.ts:74874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74874)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[items_count](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:74866](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74866)

___

### offset

• `Optional` **offset**: `number`

specified offset value

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[offset](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset)

#### Defined in

[main.ts:74868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74868)

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[offset_token](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:74872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74872)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[total_count](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:74864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74864)

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

[main.ts:74887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74887)

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

[main.ts:74912](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74912)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Defined in

[main.ts:74905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74905)
