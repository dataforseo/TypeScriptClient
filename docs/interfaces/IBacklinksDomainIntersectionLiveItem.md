[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksDomainIntersectionLiveItem

# Interface: IBacklinksDomainIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain\_intersection?

> `optional` **domain\_intersection**: `object`

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index Signature

 \[`key`: `string`\]: [`BacklinksDomainIntersectionInfo`](../classes/BacklinksDomainIntersectionInfo.md)

#### Defined in

main.ts:146745

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](../classes/IntersectionSummaryInfo.md)

contains the domain intersections summary

#### Defined in

main.ts:146747
