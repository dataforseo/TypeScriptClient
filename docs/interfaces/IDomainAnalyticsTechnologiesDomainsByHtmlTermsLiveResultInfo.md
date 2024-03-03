[Documentation](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

## Implemented by

- [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../classes/DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items)
- [items\_count](IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items_count)
- [offset](IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset)
- [offset\_token](IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset_token)
- [total\_count](IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](../classes/DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

items array

#### Defined in

main.ts:75087

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:75079

___

### offset

• `Optional` **offset**: `number`

specified offset value

#### Defined in

main.ts:75081

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

main.ts:75085

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:75077
