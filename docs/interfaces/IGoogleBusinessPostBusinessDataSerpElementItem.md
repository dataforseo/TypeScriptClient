**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleBusinessPostBusinessDataSerpElementItem

# Interface: IGoogleBusinessPostBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author?

> **`optional`** **author**: `string`

author of the post

#### Source

main.ts:202577

***

### images\_url?

> **`optional`** **images\_url**: `string`

url of an image included in the post

#### Source

main.ts:202585

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

links included in the post

#### Source

main.ts:202596

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values: right

#### Source

main.ts:202573

***

### post\_date?

> **`optional`** **post\_date**: `string`

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Source

main.ts:202589

***

### post\_text?

> **`optional`** **post\_text**: `string`

main content of a post

#### Source

main.ts:202581

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed updates
absolute position among all present elements

#### Source

main.ts:202570

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:202567

***

### snippet?

> **`optional`** **snippet**: `string`

additional content of a post

#### Source

main.ts:202579

***

### timestamp?

> **`optional`** **timestamp**: `string`

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:202594

***

### url?

> **`optional`** **url**: `string`

url of a post

#### Source

main.ts:202583

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:202575
