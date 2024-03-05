[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleHotelsDataforseoLabsSerpElementItem

# Interface: IGoogleHotelsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IGoogleHotelsDataforseoLabsSerpElementItem`**

## Implemented by

- [`GoogleHotelsDataforseoLabsSerpElementItem`](../classes/GoogleHotelsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [hotel\_identifier](IGoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)
- [position](IGoogleHotelsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)
- [url](IGoogleHotelsDataforseoLabsSerpElementItem.md#url)
- [xpath](IGoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Defined in

[main.ts:96186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96186)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:96180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96180)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:96176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96176)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:96173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96173)

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

[main.ts:96188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96188)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:96182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96182)
