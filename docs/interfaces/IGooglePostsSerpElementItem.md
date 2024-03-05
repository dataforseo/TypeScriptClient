[dataforseo-client](../README.md) / [Exports](../modules.md) / IGooglePostsSerpElementItem

# Interface: IGooglePostsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IGooglePostsSerpElementItem`**

## Implemented by

- [`GooglePostsSerpElementItem`](../classes/GooglePostsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](IGooglePostsSerpElementItem.md#cid)
- [feature](IGooglePostsSerpElementItem.md#feature)
- [position](IGooglePostsSerpElementItem.md#position)
- [posts\_id](IGooglePostsSerpElementItem.md#posts_id)
- [rank\_absolute](IGooglePostsSerpElementItem.md#rank_absolute)
- [rank\_group](IGooglePostsSerpElementItem.md#rank_group)
- [rectangle](IGooglePostsSerpElementItem.md#rectangle)
- [xpath](IGooglePostsSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

[main.ts:34401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34401)

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Defined in

[main.ts:34399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34399)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:34393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34393)

___

### posts\_id

• `Optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Defined in

[main.ts:34397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34397)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:34389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34389)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:34386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34386)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:34405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34405)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:34395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34395)
