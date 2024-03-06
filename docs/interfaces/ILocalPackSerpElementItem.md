[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ILocalPackSerpElementItem

# Interface: ILocalPackSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`ILocalPackSerpElementItem`**

## Implemented by

- [`LocalPackSerpElementItem`](../classes/LocalPackSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](ILocalPackSerpElementItem.md#cid)
- [description](ILocalPackSerpElementItem.md#description)
- [domain](ILocalPackSerpElementItem.md#domain)
- [is\_paid](ILocalPackSerpElementItem.md#is_paid)
- [phone](ILocalPackSerpElementItem.md#phone)
- [position](ILocalPackSerpElementItem.md#position)
- [rank\_absolute](ILocalPackSerpElementItem.md#rank_absolute)
- [rank\_group](ILocalPackSerpElementItem.md#rank_group)
- [rating](ILocalPackSerpElementItem.md#rating)
- [rectangle](ILocalPackSerpElementItem.md#rectangle)
- [title](ILocalPackSerpElementItem.md#title)
- [url](ILocalPackSerpElementItem.md#url)
- [xpath](ILocalPackSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

[main.ts:29907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29907)

___


### description

• `Optional` **description**: `string`

description

#### Defined in

[main.ts:29894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29894)

___


### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

[main.ts:29896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29896)

___


### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Defined in

[main.ts:29902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29902)

___


### phone

• `Optional` **phone**: `string`

phone number

#### Defined in

[main.ts:29898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29898)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:29888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29888)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:29884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29884)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:29881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29881)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:29905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29905)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:29911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29911)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:29892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29892)

___


### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:29900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29900)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:29890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29890)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")