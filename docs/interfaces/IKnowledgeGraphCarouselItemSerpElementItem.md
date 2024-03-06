[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphCarouselItemSerpElementItem

# Interface: IKnowledgeGraphCarouselItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IKnowledgeGraphCarouselItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphCarouselItemSerpElementItem`](../classes/KnowledgeGraphCarouselItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphCarouselItemSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphCarouselItemSerpElementItem.md#items)
- [link](IKnowledgeGraphCarouselItemSerpElementItem.md#link)
- [position](IKnowledgeGraphCarouselItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphCarouselItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphCarouselItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphCarouselItemSerpElementItem.md#rectangle)
- [title](IKnowledgeGraphCarouselItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphCarouselItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Defined in

[main.ts:26309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26309)

___


### items

• `Optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:26313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26313)

___


### link

• `Optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

[main.ts:26311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26311)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:26301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26301)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:26297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26297)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:26294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26294)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:26317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26317)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:26305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26305)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:26303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26303)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")