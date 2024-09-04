[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ILocalServicesDataforseoLabsSerpElementItem

# Interface: ILocalServicesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:102242

***

### items?

> `optional` **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:102245

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:102234

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:102230

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:102227

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:102238

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:102240

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:102236
