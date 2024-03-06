[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphShoppingItemSerpElementItem

# Interface: IKnowledgeGraphShoppingItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IKnowledgeGraphShoppingItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphShoppingItemSerpElementItem`](../classes/KnowledgeGraphShoppingItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphShoppingItemSerpElementItem.md#items)
- [position](IKnowledgeGraphShoppingItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphShoppingItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphShoppingItemSerpElementItem.md#rectangle)
- [title](IKnowledgeGraphShoppingItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphShoppingItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Defined in

[main.ts:27504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27504)

___


### items

• `Optional` **items**: [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:27507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27507)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:27496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27496)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:27492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27492)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:27489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27489)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:27511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27511)

___


### title

• `Optional` **title**: `string`

title of the place

#### Defined in

[main.ts:27500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27500)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:27498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27498)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")