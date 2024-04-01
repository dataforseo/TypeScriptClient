[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#constructor)

### Properties

- [items](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items)
- [items\_count](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items_count)
- [offset](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset)
- [offset\_token](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset_token)
- [total\_count](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#total_count)

### Methods

- [init](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Defined in

main.ts:76813

## Properties

### items

• `Optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

items array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[items](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items)

#### Defined in

main.ts:76809

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[items_count](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items_count)

#### Defined in

main.ts:76801

___

### offset

• `Optional` **offset**: `number`

specified offset value

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[offset](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset)

#### Defined in

main.ts:76803

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[offset_token](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset_token)

#### Defined in

main.ts:76807

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[total_count](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#total_count)

#### Defined in

main.ts:76799

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

main.ts:76822

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

main.ts:76847

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Defined in

main.ts:76840
