[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphRowItemSerpElementItem

# Interface: IKnowledgeGraphRowItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IKnowledgeGraphRowItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphRowItemSerpElementItem`](../classes/KnowledgeGraphRowItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphRowItemSerpElementItem.md#data_attrid)
- [links](IKnowledgeGraphRowItemSerpElementItem.md#links)
- [position](IKnowledgeGraphRowItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphRowItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphRowItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphRowItemSerpElementItem.md#rectangle)
- [text](IKnowledgeGraphRowItemSerpElementItem.md#text)
- [title](IKnowledgeGraphRowItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphRowItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Defined in

[main.ts:26853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26853)

___


### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

links featured in the faq_box_element

#### Defined in

[main.ts:26857](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26857)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:26845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26845)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:26841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26841)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:26838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26838)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:26861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26861)

___


### text

• `Optional` **text**: `string`

row content

#### Defined in

[main.ts:26855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26855)

___


### title

• `Optional` **title**: `string`

title of the item

#### Defined in

[main.ts:26849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26849)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:26847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26847)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")