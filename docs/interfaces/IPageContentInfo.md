[Documentation](../README.md) / [Exports](../modules.md) / IPageContentInfo

# Interface: IPageContentInfo

## Implemented by

- [`PageContentInfo`](../classes/PageContentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [footer](IPageContentInfo.md#footer)
- [header](IPageContentInfo.md#header)
- [main\_topic](IPageContentInfo.md#main_topic)
- [secondary\_topic](IPageContentInfo.md#secondary_topic)

## Properties

### footer

• `Optional` **footer**: [`PageSectionContentInfo`](../classes/PageSectionContentInfo.md)

parsed content of the footer

#### Defined in

main.ts:152414

___

### header

• `Optional` **header**: [`PageSectionContentInfo`](../classes/PageSectionContentInfo.md)

parsed content of the header

#### Defined in

main.ts:152412

___

### main\_topic

• `Optional` **main\_topic**: [`TopicInfo`](../classes/TopicInfo.md)[]

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Defined in

main.ts:152417

___

### secondary\_topic

• `Optional` **secondary\_topic**: [`TopicInfo`](../classes/TopicInfo.md)[]

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Defined in

main.ts:152420
