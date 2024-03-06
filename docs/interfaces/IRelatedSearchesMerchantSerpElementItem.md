[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IRelatedSearchesMerchantSerpElementItem

# Interface: IRelatedSearchesMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)
  
  ↳ **`IRelatedSearchesMerchantSerpElementItem`**

## Implemented by

- [`RelatedSearchesMerchantSerpElementItem`](../classes/RelatedSearchesMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRelatedSearchesMerchantSerpElementItem.md#items)
- [position](IRelatedSearchesMerchantSerpElementItem.md#position)
- [rank\_absolute](IRelatedSearchesMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IRelatedSearchesMerchantSerpElementItem.md#rank_group)
- [xpath](IRelatedSearchesMerchantSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:165364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165364)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:165359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165359)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

[main.ts:165355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165355)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:165352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165352)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

[main.ts:165361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165361)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")