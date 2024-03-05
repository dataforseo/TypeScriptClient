[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksReferringDomainsLiveResultInfo

# Interface: IBacklinksReferringDomainsLiveResultInfo

## Implemented by

- [`BacklinksReferringDomainsLiveResultInfo`](../classes/BacklinksReferringDomainsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IBacklinksReferringDomainsLiveResultInfo.md#items)
- [items\_count](IBacklinksReferringDomainsLiveResultInfo.md#items_count)
- [target](IBacklinksReferringDomainsLiveResultInfo.md#target)
- [total\_count](IBacklinksReferringDomainsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`BacklinksReferringDomainsLiveItem`](../classes/BacklinksReferringDomainsLiveItem.md)[]

items array

#### Defined in

[main.ts:135036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135036)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the items array

#### Defined in

[main.ts:135034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135034)

___

### target

• `Optional` **target**: `string`

target in a POST array

#### Defined in

[main.ts:135028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135028)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Defined in

[main.ts:135032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135032)
