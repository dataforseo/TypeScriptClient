[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#items)
- [link](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#link)
- [position](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Defined in

[main.ts:92236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92236)

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:92241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92241)

___

### link

• `Optional` **link**: `any`

link of the element

#### Defined in

[main.ts:92238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92238)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:92228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92228)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:92224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92224)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:92221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92221)

___

### title

• `Optional` **title**: `string`

title of the link

#### Defined in

[main.ts:92232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92232)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:92230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92230)
