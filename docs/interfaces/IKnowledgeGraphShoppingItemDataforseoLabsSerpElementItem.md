[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#items)
- [position](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Defined in

main.ts:96381

___

### items

• `Optional` **items**: [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:96383

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:96373

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:96369

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:96366

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:96377

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:96375
