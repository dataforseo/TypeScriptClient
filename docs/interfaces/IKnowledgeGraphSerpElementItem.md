[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphSerpElementItem

# Interface: IKnowledgeGraphSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphSerpElementItem`**

## Implemented by

- [`KnowledgeGraphSerpElementItem`](../classes/KnowledgeGraphSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [card\_id](IKnowledgeGraphSerpElementItem.md#card_id)
- [cid](IKnowledgeGraphSerpElementItem.md#cid)
- [description](IKnowledgeGraphSerpElementItem.md#description)
- [image\_url](IKnowledgeGraphSerpElementItem.md#image_url)
- [items](IKnowledgeGraphSerpElementItem.md#items)
- [logo\_url](IKnowledgeGraphSerpElementItem.md#logo_url)
- [position](IKnowledgeGraphSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphSerpElementItem.md#rectangle)
- [subtitle](IKnowledgeGraphSerpElementItem.md#subtitle)
- [title](IKnowledgeGraphSerpElementItem.md#title)
- [url](IKnowledgeGraphSerpElementItem.md#url)
- [xpath](IKnowledgeGraphSerpElementItem.md#xpath)

## Properties

### card\_id

• `Optional` **card\_id**: `string`

card id

#### Defined in

main.ts:27791

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Defined in

main.ts:27802

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:27789

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:27796

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:27805

___

### logo\_url

• `Optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Defined in

main.ts:27798

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:27781

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:27777

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:27774

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:27809

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the item

#### Defined in

main.ts:27787

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:27785

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:27793

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:27783
