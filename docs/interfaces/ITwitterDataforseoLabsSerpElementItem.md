**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITwitterDataforseoLabsSerpElementItem

# Interface: ITwitterDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`TwitterElement`](../classes/TwitterElement.md)[]

elements of search results found in SERP

#### Source

main.ts:93968

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:93960

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:93956

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:93953

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:93950

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:93964

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:93966

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:93962
