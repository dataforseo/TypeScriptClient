**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPageContentInfo

# Interface: IPageContentInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### footer?

> **`optional`** **footer**: [`PageSectionContentInfo`](../classes/PageSectionContentInfo.md)

parsed content of the footer

#### Source

main.ts:160202

***

### header?

> **`optional`** **header**: [`PageSectionContentInfo`](../classes/PageSectionContentInfo.md)

content of the header of the table

#### Source

main.ts:160200

***

### main\_topic?

> **`optional`** **main\_topic**: [`MainTopic`](../classes/MainTopic.md)[]

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Source

main.ts:160205

***

### secondary\_topic?

> **`optional`** **secondary\_topic**: [`SecondaryTopic`](../classes/SecondaryTopic.md)[]

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Source

main.ts:160208
