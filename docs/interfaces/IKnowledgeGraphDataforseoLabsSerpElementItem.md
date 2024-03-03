[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [card\_id](IKnowledgeGraphDataforseoLabsSerpElementItem.md#card_id)
- [cid](IKnowledgeGraphDataforseoLabsSerpElementItem.md#cid)
- [description](IKnowledgeGraphDataforseoLabsSerpElementItem.md#description)
- [image\_url](IKnowledgeGraphDataforseoLabsSerpElementItem.md#image_url)
- [items](IKnowledgeGraphDataforseoLabsSerpElementItem.md#items)
- [logo\_url](IKnowledgeGraphDataforseoLabsSerpElementItem.md#logo_url)
- [position](IKnowledgeGraphDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](IKnowledgeGraphDataforseoLabsSerpElementItem.md#se_type)
- [sub\_title](IKnowledgeGraphDataforseoLabsSerpElementItem.md#sub_title)
- [title](IKnowledgeGraphDataforseoLabsSerpElementItem.md#title)
- [url](IKnowledgeGraphDataforseoLabsSerpElementItem.md#url)
- [xpath](IKnowledgeGraphDataforseoLabsSerpElementItem.md#xpath)

## Properties

### card\_id

• `Optional` **card\_id**: `string`

card id

#### Defined in

main.ts:92103

___

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:92111

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:92101

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image from knowledge graph

#### Defined in

main.ts:92107

___

### items

• `Optional` **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:92113

___

### logo\_url

• `Optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Defined in

main.ts:92109

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:92093

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:92089

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:92086

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:92083

___

### sub\_title

• `Optional` **sub\_title**: `string`

subtitle of the item

#### Defined in

main.ts:92099

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:92097

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

main.ts:92105

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:92095
