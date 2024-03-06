[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IRelatedSearchesDataforseoLabsSerpElementItem

# Interface: IRelatedSearchesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IRelatedSearchesDataforseoLabsSerpElementItem`**

## Implemented by

- [`RelatedSearchesDataforseoLabsSerpElementItem`](../classes/RelatedSearchesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRelatedSearchesDataforseoLabsSerpElementItem.md#items)
- [position](IRelatedSearchesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](IRelatedSearchesDataforseoLabsSerpElementItem.md#se_type)
- [xpath](IRelatedSearchesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: `string`[]

elements of search results found in SERP

#### Defined in

[main.ts:91513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91513)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:91509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91509)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:91505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91505)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:91502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91502)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:91499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91499)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:91511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91511)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")