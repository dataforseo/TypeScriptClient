[Documentation](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

## Implemented by

- [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../classes/DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items)
- [items\_count](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items_count)
- [offset](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset)
- [offset\_token](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset_token)
- [total\_count](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](../classes/DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

items array

#### Defined in

main.ts:76878

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:76870

___

### offset

• `Optional` **offset**: `number`

specified offset value

#### Defined in

main.ts:76872

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

main.ts:76876

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:76868
