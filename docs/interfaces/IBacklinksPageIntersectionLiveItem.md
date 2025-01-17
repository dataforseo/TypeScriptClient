[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksPageIntersectionLiveItem

# Interface: IBacklinksPageIntersectionLiveItem

Defined in: main.ts:159086

## Indexable

\[`key`: `string`\]: `any`

## Properties

### page\_intersection?

> `optional` **page\_intersection**: `object`

Defined in: main.ts:159089

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index Signature

\[`key`: `string`\]: [`BacklinksPageIntersectionInfo`](../classes/BacklinksPageIntersectionInfo.md)[]

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](../classes/IntersectionSummaryInfo.md)

Defined in: main.ts:159091

contains the page intersections summary
