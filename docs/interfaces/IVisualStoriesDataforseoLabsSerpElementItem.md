[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IVisualStoriesDataforseoLabsSerpElementItem

# Interface: IVisualStoriesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IVisualStoriesDataforseoLabsSerpElementItem`**

## Implemented by

- [`VisualStoriesDataforseoLabsSerpElementItem`](../classes/VisualStoriesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IVisualStoriesDataforseoLabsSerpElementItem.md#items)
- [position](IVisualStoriesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IVisualStoriesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IVisualStoriesDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IVisualStoriesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`LicensesElement`](../classes/LicensesElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:95898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95898)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:95894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95894)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:95890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95890)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:95887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95887)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:95896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95896)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")