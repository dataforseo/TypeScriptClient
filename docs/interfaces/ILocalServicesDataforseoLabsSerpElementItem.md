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

main.ts:101633

***

### items?

> **`optional`** **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

elements of search results found in SERP

#### Source

main.ts:101635

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:101625

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:101621

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:101618

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:101629

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:101631

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:101627
