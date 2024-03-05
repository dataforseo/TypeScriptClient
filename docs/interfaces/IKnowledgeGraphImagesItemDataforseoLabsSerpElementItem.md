[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#items)
- [link](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#link)
- [position](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`KnowledgeGraphImagesElement`](../classes/KnowledgeGraphImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:91711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91711)

___

### link

• `Optional` **link**: `any`

link of the element

#### Defined in

[main.ts:91708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91708)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:91704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91704)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:91700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91700)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:91697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91697)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:91706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91706)
