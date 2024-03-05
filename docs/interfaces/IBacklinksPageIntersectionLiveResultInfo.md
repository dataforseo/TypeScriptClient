[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksPageIntersectionLiveResultInfo

# Interface: IBacklinksPageIntersectionLiveResultInfo

## Implemented by

- [`BacklinksPageIntersectionLiveResultInfo`](../classes/BacklinksPageIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IBacklinksPageIntersectionLiveResultInfo.md#items)
- [items\_count](IBacklinksPageIntersectionLiveResultInfo.md#items_count)
- [targets](IBacklinksPageIntersectionLiveResultInfo.md#targets)
- [total\_count](IBacklinksPageIntersectionLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`BacklinksPageIntersectionLiveItem`](../classes/BacklinksPageIntersectionLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Defined in

[main.ts:138240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138240)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:138238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138238)

___

### targets

• `Optional` **targets**: `Object`

targets from a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:138234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138234)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results relevant the request

#### Defined in

[main.ts:138236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138236)
