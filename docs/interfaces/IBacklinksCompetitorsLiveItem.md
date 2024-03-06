[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksCompetitorsLiveItem

# Interface: IBacklinksCompetitorsLiveItem

## Implemented by

- [`BacklinksCompetitorsLiveItem`](../classes/BacklinksCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [intersections](IBacklinksCompetitorsLiveItem.md#intersections)
- [rank](IBacklinksCompetitorsLiveItem.md#rank)
- [target](IBacklinksCompetitorsLiveItem.md#target)
- [type](IBacklinksCompetitorsLiveItem.md#type)

## Properties

### intersections

• `Optional` **intersections**: `number`

indicates the number of backlink intersections with the target specified in the POST array

#### Defined in

[main.ts:136188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136188)

___


### rank

• `Optional` **rank**: `number`

domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:136186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136186)

___


### target

• `Optional` **target**: `string`

competitor domain

#### Defined in

[main.ts:136181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136181)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:136179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136179)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")