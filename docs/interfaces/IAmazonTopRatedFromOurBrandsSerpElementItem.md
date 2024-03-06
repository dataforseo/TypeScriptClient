[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAmazonTopRatedFromOurBrandsSerpElementItem

# Interface: IAmazonTopRatedFromOurBrandsSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)
  
  ↳ **`IAmazonTopRatedFromOurBrandsSerpElementItem`**

## Implemented by

- [`AmazonTopRatedFromOurBrandsSerpElementItem`](../classes/AmazonTopRatedFromOurBrandsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IAmazonTopRatedFromOurBrandsSerpElementItem.md#items)
- [position](IAmazonTopRatedFromOurBrandsSerpElementItem.md#position)
- [rank\_absolute](IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_group)
- [xpath](IAmazonTopRatedFromOurBrandsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`AmazonSerpElement`](../classes/AmazonSerpElement.md)[]

Amazon product items

#### Defined in

[main.ts:171269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171269)

___


### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Defined in

[main.ts:171265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171265)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Defined in

[main.ts:171261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171261)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:171258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171258)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:171267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171267)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")