[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleHotelsSerpElementItem

# Interface: IGoogleHotelsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IGoogleHotelsSerpElementItem`**

## Implemented by

- [`GoogleHotelsSerpElementItem`](../classes/GoogleHotelsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](IGoogleHotelsSerpElementItem.md#cid)
- [hotel\_identifier](IGoogleHotelsSerpElementItem.md#hotel_identifier)
- [position](IGoogleHotelsSerpElementItem.md#position)
- [rank\_absolute](IGoogleHotelsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleHotelsSerpElementItem.md#rank_group)
- [rectangle](IGoogleHotelsSerpElementItem.md#rectangle)
- [url](IGoogleHotelsSerpElementItem.md#url)
- [xpath](IGoogleHotelsSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

[main.ts:33885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33885)

___


### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Defined in

[main.ts:33881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33881)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:33875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33875)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:33871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33871)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:33868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33868)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:33889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33889)

___


### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:33883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33883)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:33877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33877)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")