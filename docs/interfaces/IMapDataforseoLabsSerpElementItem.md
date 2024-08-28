[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IMapDataforseoLabsSerpElementItem

# Interface: IMapDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:99179

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:99175

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:99172

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:99183

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:99185

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:99181
