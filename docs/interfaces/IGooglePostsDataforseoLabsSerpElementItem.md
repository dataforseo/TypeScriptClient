**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGooglePostsDataforseoLabsSerpElementItem

# Interface: IGooglePostsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Source

main.ts:97858

***

### feature?

> **`optional`** **feature**: `string`

the additional feature of the review

#### Source

main.ts:97854

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:97848

***

### posts\_id?

> **`optional`** **posts\_id**: `string`

the identifier of the google_posts feature

#### Source

main.ts:97852

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:97844

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:97841

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:97850
