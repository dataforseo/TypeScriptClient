[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksDomainIntersectionLiveResultInfo

# Interface: IBacklinksDomainIntersectionLiveResultInfo

## Implemented by

- [`BacklinksDomainIntersectionLiveResultInfo`](../classes/BacklinksDomainIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IBacklinksDomainIntersectionLiveResultInfo.md#items)
- [items\_count](IBacklinksDomainIntersectionLiveResultInfo.md#items_count)
- [targets](IBacklinksDomainIntersectionLiveResultInfo.md#targets)
- [total\_count](IBacklinksDomainIntersectionLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`BacklinksDomainIntersectionLiveItem`](../classes/BacklinksDomainIntersectionLiveItem.md)[]

contains domain that link to all targets from the POST array

#### Defined in

main.ts:137362

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:137360

___

### targets

• `Optional` **targets**: `Object`

target domains, subdomains or webpages in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:137356

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results relevant to your request

#### Defined in

main.ts:137358
