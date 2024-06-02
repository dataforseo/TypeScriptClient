**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ILocalServicesDataforseoLabsSerpElementItem

# Interface: ILocalServicesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Source

main.ts:99539

***

### items?

> **`optional`** **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:99542

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:99531

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:99527

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:99524

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:99535

***

### url?

> **`optional`** **url**: `string`

URL link

#### Source

main.ts:99537

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:99533
