[Documentation](../README.md) / [Exports](../modules.md) / IPages

# Interface: IPages

## Implemented by

- [`Pages`](../classes/Pages.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [page](IPages.md#page)
- [similarity](IPages.md#similarity)

## Properties

### page

• `Optional` **page**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

information about the page with duplicate content

#### Defined in

main.ts:147752

___

### similarity

• `Optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Defined in

main.ts:147750
