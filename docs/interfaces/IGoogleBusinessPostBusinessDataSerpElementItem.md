[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleBusinessPostBusinessDataSerpElementItem

# Interface: IGoogleBusinessPostBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author?

> `optional` **author**: `string`

author of the post

#### Defined in

main.ts:202712

***

### images\_url?

> `optional` **images\_url**: `string`

url of an image included in the post

#### Defined in

main.ts:202720

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

links included in the post

#### Defined in

main.ts:202731

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values: right

#### Defined in

main.ts:202708

***

### post\_date?

> `optional` **post\_date**: `string`

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Defined in

main.ts:202724

***

### post\_text?

> `optional` **post\_text**: `string`

main content of a post

#### Defined in

main.ts:202716

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21392

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21390

***

### snippet?

> `optional` **snippet**: `string`

additional content of a post

#### Defined in

main.ts:202714

***

### timestamp?

> `optional` **timestamp**: `string`

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:202729

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:21387

***

### url?

> `optional` **url**: `string`

url of a post

#### Defined in

main.ts:202718

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:202710
