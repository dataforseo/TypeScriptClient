**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IScholarlyArticlesDataforseoLabsSerpElementItem

# Interface: IScholarlyArticlesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`ScholarlyArticlesElement`](../classes/ScholarlyArticlesElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:99840

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:99831

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:99827

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:99824

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:99835

***

### url?

> **`optional`** **url**: `string`

URL link

#### Source

main.ts:99837

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:99833
