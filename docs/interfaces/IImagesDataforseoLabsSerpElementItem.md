**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IImagesDataforseoLabsSerpElementItem

# Interface: IImagesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`ImagesElement`](../classes/ImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:98075

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:98066

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:98062

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:98059

***

### related\_image\_searches?

> **`optional`** **related\_image\_searches**: [`RelatedImageSearchesElement`](../classes/RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Source

main.ts:98078

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:98070

***

### url?

> **`optional`** **url**: `string`

URL link

#### Source

main.ts:98072

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:98068
