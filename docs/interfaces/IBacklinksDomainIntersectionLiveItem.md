**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksDomainIntersectionLiveItem

# Interface: IBacklinksDomainIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain\_intersection?

> **`optional`** **domain\_intersection**: `Object`

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index signature

 \[`key`: `string`\]: [`BacklinksDomainIntersectionInfo`](../classes/BacklinksDomainIntersectionInfo.md)

#### Source

main.ts:143703

***

### summary?

> **`optional`** **summary**: [`IntersectionSummaryInfo`](../classes/IntersectionSummaryInfo.md)

contains the domain intersections summary

#### Source

main.ts:143705
