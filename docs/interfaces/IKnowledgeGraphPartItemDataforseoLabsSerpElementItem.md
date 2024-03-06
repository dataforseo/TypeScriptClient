[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)
- [links](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)
- [position](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)
- [text](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)
- [title](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

[main.ts:93792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93792)

___


### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

[main.ts:93796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93796)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:93784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93784)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:93780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93780)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:93777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93777)

___


### text

• `Optional` **text**: `string`

content within the item

#### Defined in

[main.ts:93794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93794)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:93788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93788)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:93786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93786)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")