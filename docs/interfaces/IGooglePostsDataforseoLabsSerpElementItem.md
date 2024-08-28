[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IGooglePostsDataforseoLabsSerpElementItem

# Interface: IGooglePostsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Defined in

main.ts:100561

***

### feature?

> `optional` **feature**: `string`

the additional feature of the review

#### Defined in

main.ts:100557

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:100551

***

### posts\_id?

> `optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Defined in

main.ts:100555

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:100547

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:100544

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:100553
