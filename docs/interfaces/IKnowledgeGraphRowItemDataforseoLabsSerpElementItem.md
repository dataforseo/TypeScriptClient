[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphRowItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphRowItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#data_attrid)
- [links](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#links)
- [position](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_group)
- [text](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#text)
- [title](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Defined in

[main.ts:91821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91821)

___


### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

[main.ts:91827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91827)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:91813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91813)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:91809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91809)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:91806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91806)

___


### text

• `Optional` **text**: `string`

row content

#### Defined in

[main.ts:91823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91823)

___


### title

• `Optional` **title**: `string`

title of the item

#### Defined in

[main.ts:91817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91817)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:91815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91815)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")