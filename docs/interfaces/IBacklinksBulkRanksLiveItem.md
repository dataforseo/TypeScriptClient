[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksBulkRanksLiveItem

# Interface: IBacklinksBulkRanksLiveItem

## Implemented by

- [`BacklinksBulkRanksLiveItem`](../classes/BacklinksBulkRanksLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [rank](IBacklinksBulkRanksLiveItem.md#rank)
- [target](IBacklinksBulkRanksLiveItem.md#target)

## Properties

### rank

• `Optional` **rank**: `number`

rank of the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:139458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139458)

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Defined in

[main.ts:139454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139454)
