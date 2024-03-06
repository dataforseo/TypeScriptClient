[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ICommercialUnitsDataforseoLabsSerpElementItem

# Interface: ICommercialUnitsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`ICommercialUnitsDataforseoLabsSerpElementItem`**

## Implemented by

- [`CommercialUnitsDataforseoLabsSerpElementItem`](../classes/CommercialUnitsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ICommercialUnitsDataforseoLabsSerpElementItem.md#items)
- [position](ICommercialUnitsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_group)
- [title](ICommercialUnitsDataforseoLabsSerpElementItem.md#title)
- [xpath](ICommercialUnitsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`CommercialUnitsElement`](../classes/CommercialUnitsElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:95992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95992)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:95986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95986)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:95982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95982)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:95979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95979)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:95990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95990)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:95988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95988)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")