[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksPageIntersectionLiveItem

# Interface: IBacklinksPageIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### page\_intersection?

> `optional` **page\_intersection**: `object`

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index Signature

 \[`key`: `string`\]: [`BacklinksPageIntersectionInfo`](../classes/BacklinksPageIntersectionInfo.md)[]

#### Defined in

main.ts:159021

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](../classes/IntersectionSummaryInfo.md)

contains the page intersections summary

#### Defined in

main.ts:159023
