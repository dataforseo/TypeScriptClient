[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphPartItemSerpElementItem

# Interface: IKnowledgeGraphPartItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphPartItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphPartItemSerpElementItem`](../classes/KnowledgeGraphPartItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphPartItemSerpElementItem.md#data_attrid)
- [links](IKnowledgeGraphPartItemSerpElementItem.md#links)
- [position](IKnowledgeGraphPartItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphPartItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphPartItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphPartItemSerpElementItem.md#rectangle)
- [text](IKnowledgeGraphPartItemSerpElementItem.md#text)
- [title](IKnowledgeGraphPartItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphPartItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

[main.ts:27275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27275)

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

[main.ts:27281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27281)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:27267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27267)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:27263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27263)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:27260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27260)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:27285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27285)

___

### text

• `Optional` **text**: `string`

content within the item

#### Defined in

[main.ts:27277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27277)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:27271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27271)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:27269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27269)
