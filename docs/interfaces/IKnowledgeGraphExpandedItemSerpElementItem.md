[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphExpandedItemSerpElementItem

# Interface: IKnowledgeGraphExpandedItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IKnowledgeGraphExpandedItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphExpandedItemSerpElementItem`](../classes/KnowledgeGraphExpandedItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphExpandedItemSerpElementItem.md#data_attrid)
- [expanded\_element](IKnowledgeGraphExpandedItemSerpElementItem.md#expanded_element)
- [position](IKnowledgeGraphExpandedItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphExpandedItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphExpandedItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphExpandedItemSerpElementItem.md#rectangle)
- [title](IKnowledgeGraphExpandedItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphExpandedItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

[main.ts:27153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27153)

___


### expanded\_element

• `Optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](../classes/KnowledgeGraphExpandedElement.md)[]

link of the element

#### Defined in

[main.ts:27155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27155)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:27145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27145)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:27141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27141)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:27138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27138)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:27159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27159)

___


### title

• `Optional` **title**: `string`

title of the link

#### Defined in

[main.ts:27149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27149)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:27147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27147)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")