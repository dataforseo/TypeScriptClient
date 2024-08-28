[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IImagesDataforseoLabsSerpElementItem

# Interface: IImagesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`ImagesElement`](../classes/ImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:100778

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:100769

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:100765

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:100762

***

### related\_image\_searches?

> `optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](../classes/RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Defined in

main.ts:100781

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:100773

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:100775

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:100771
