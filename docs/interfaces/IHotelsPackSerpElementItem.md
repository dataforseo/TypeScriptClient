[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IHotelsPackSerpElementItem

# Interface: IHotelsPackSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IHotelsPackSerpElementItem`**

## Implemented by

- [`HotelsPackSerpElementItem`](../classes/HotelsPackSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IHotelsPackSerpElementItem.md#date_from)
- [date\_to](IHotelsPackSerpElementItem.md#date_to)
- [items](IHotelsPackSerpElementItem.md#items)
- [position](IHotelsPackSerpElementItem.md#position)
- [rank\_absolute](IHotelsPackSerpElementItem.md#rank_absolute)
- [rank\_group](IHotelsPackSerpElementItem.md#rank_group)
- [rectangle](IHotelsPackSerpElementItem.md#rectangle)
- [title](IHotelsPackSerpElementItem.md#title)
- [xpath](IHotelsPackSerpElementItem.md#xpath)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Defined in

[main.ts:33200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33200)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Defined in

[main.ts:33205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33205)

___


### items

• `Optional` **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:33207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33207)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:33191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33191)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:33187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33187)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:33184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33184)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:33211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33211)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:33195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33195)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:33193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33193)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")