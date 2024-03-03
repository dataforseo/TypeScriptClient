[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksPageIntersectionLiveItem

# Interface: IBacklinksPageIntersectionLiveItem

## Implemented by

- [`BacklinksPageIntersectionLiveItem`](../classes/BacklinksPageIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [page\_intersection](IBacklinksPageIntersectionLiveItem.md#page_intersection)
- [summary](IBacklinksPageIntersectionLiveItem.md#summary)

## Properties

### page\_intersection

• `Optional` **page\_intersection**: `Object`

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index signature

▪ [key: `string`]: ([`BacklinksPageIntersectionInfo`](../classes/BacklinksPageIntersectionInfo.md) \| `undefined`)[]

#### Defined in

main.ts:138294

___

### summary

• `Optional` **summary**: [`Summary`](../classes/Summary.md)

contains the page intersections summary

#### Defined in

main.ts:138296
