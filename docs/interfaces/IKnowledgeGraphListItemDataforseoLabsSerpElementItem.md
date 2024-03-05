[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphListItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphListItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#items)
- [link](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#link)
- [position](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Defined in

[main.ts:93681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93681)

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:93686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93686)

___

### link

• `Optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

[main.ts:93683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93683)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:93673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93673)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:93669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93669)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:93666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93666)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:93677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93677)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:93675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93675)
