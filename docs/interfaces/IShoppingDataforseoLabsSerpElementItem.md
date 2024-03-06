[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IShoppingDataforseoLabsSerpElementItem

# Interface: IShoppingDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IShoppingDataforseoLabsSerpElementItem`**

## Implemented by

- [`ShoppingDataforseoLabsSerpElementItem`](../classes/ShoppingDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IShoppingDataforseoLabsSerpElementItem.md#items)
- [position](IShoppingDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IShoppingDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IShoppingDataforseoLabsSerpElementItem.md#rank_group)
- [title](IShoppingDataforseoLabsSerpElementItem.md#title)
- [xpath](IShoppingDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ShoppingElement`](../classes/ShoppingElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:94756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94756)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:94750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94750)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:94746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94746)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:94743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94743)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:94754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94754)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:94752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94752)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")