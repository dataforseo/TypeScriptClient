[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksDomainIntersectionLiveItem

# Interface: IBacklinksDomainIntersectionLiveItem

Defined in: main.ts:158048

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain\_intersection?

> `optional` **domain\_intersection**: `object`

Defined in: main.ts:158051

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index Signature

\[`key`: `string`\]: [`BacklinksDomainIntersectionInfo`](../classes/BacklinksDomainIntersectionInfo.md)

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](../classes/IntersectionSummaryInfo.md)

Defined in: main.ts:158053

contains the domain intersections summary
