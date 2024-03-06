[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksDomainIntersectionLiveItem

# Interface: IBacklinksDomainIntersectionLiveItem

## Implemented by

- [`BacklinksDomainIntersectionLiveItem`](../classes/BacklinksDomainIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain\_intersection](IBacklinksDomainIntersectionLiveItem.md#domain_intersection)
- [summary](IBacklinksDomainIntersectionLiveItem.md#summary)

## Properties

### domain\_intersection

• `Optional` **domain\_intersection**: `Object`

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index signature

▪ [key: `string`]: [`BacklinksDomainIntersectionInfo`](../classes/BacklinksDomainIntersectionInfo.md)

#### Defined in

[main.ts:137128](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137128)

___


### summary

• `Optional` **summary**: [`Summary`](../classes/Summary.md)

contains the domain intersections summary

#### Defined in

[main.ts:137130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137130)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")