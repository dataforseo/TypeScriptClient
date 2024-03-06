[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IPodcastsDataforseoLabsSerpElementItem

# Interface: IPodcastsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IPodcastsDataforseoLabsSerpElementItem`**

## Implemented by

- [`PodcastsDataforseoLabsSerpElementItem`](../classes/PodcastsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPodcastsDataforseoLabsSerpElementItem.md#items)
- [position](IPodcastsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IPodcastsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IPodcastsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IPodcastsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PodcastsElement`](../classes/PodcastsElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:95508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95508)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:95504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95504)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:95500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95500)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:95497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95497)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:95506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95506)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")