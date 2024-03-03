[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphDescriptionItemSerpElementItem

# Interface: IKnowledgeGraphDescriptionItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphDescriptionItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphDescriptionItemSerpElementItem`](../classes/KnowledgeGraphDescriptionItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [links](IKnowledgeGraphDescriptionItemSerpElementItem.md#links)
- [position](IKnowledgeGraphDescriptionItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphDescriptionItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphDescriptionItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphDescriptionItemSerpElementItem.md#rectangle)
- [text](IKnowledgeGraphDescriptionItemSerpElementItem.md#text)
- [xpath](IKnowledgeGraphDescriptionItemSerpElementItem.md#xpath)

## Properties

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:26565

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:26557

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:26553

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:26550

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:26569

___

### text

• `Optional` **text**: `string`

description content

#### Defined in

main.ts:26561

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:26559
