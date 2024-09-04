[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleHotelsDataforseoLabsSerpElementItem

# Interface: IGoogleHotelsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Defined in

main.ts:102333

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:102327

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:102323

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:102320

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:102335

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:102329
