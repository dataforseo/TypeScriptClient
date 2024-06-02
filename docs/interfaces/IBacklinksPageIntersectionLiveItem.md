**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksPageIntersectionLiveItem

# Interface: IBacklinksPageIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### page\_intersection?

> **`optional`** **page\_intersection**: `Object`

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index signature

 \[`key`: `string`\]: ([`BacklinksPageIntersectionInfo`](../classes/BacklinksPageIntersectionInfo.md) \| `undefined`)[]

#### Source

main.ts:144828

***

### summary?

> **`optional`** **summary**: [`IntersectionSummaryInfo`](../classes/IntersectionSummaryInfo.md)

contains the page intersections summary

#### Source

main.ts:144830
