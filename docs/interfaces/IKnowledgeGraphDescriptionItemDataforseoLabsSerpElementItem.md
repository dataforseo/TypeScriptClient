[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [links](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#links)
- [position](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_group)
- [text](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#text)
- [xpath](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:91757

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:91749

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:91745

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:91742

___

### text

• `Optional` **text**: `string`

description content

#### Defined in

main.ts:91753

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:91751
