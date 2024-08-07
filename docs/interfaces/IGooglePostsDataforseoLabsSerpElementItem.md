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

#### Source

main.ts:99983

***

### feature?

> **`optional`** **feature**: `string`

the additional feature of the review

#### Source

main.ts:99981

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:99975

***

### posts\_id?

> **`optional`** **posts\_id**: `string`

the identifier of the google_posts feature

#### Source

main.ts:99979

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:99971

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:99968

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:99977
