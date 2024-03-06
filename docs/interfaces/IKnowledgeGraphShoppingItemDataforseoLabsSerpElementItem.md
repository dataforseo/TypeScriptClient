[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

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

[main.ts:94004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94004)

___


### items

• `Optional` **items**: [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:94006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94006)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:93996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93996)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:93992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93992)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:93989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93989)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:94000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94000)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:93998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93998)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")