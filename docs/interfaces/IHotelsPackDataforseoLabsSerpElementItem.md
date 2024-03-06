[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IHotelsPackDataforseoLabsSerpElementItem

# Interface: IHotelsPackDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IHotelsPackDataforseoLabsSerpElementItem`**

## Implemented by

- [`HotelsPackDataforseoLabsSerpElementItem`](../classes/HotelsPackDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IHotelsPackDataforseoLabsSerpElementItem.md#date_from)
- [date\_to](IHotelsPackDataforseoLabsSerpElementItem.md#date_to)
- [items](IHotelsPackDataforseoLabsSerpElementItem.md#items)
- [position](IHotelsPackDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IHotelsPackDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IHotelsPackDataforseoLabsSerpElementItem.md#rank_group)
- [title](IHotelsPackDataforseoLabsSerpElementItem.md#title)
- [xpath](IHotelsPackDataforseoLabsSerpElementItem.md#xpath)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Defined in

[main.ts:93565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93565)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Defined in

[main.ts:93570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93570)

___


### items

• `Optional` **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:93572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93572)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:93556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93556)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:93552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93552)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:93549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93549)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:93560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93560)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:93558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93558)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")