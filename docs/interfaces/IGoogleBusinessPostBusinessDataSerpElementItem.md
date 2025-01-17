[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleBusinessPostBusinessDataSerpElementItem

# Interface: IGoogleBusinessPostBusinessDataSerpElementItem

Defined in: main.ts:215781

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:215788

author of the post

***

### images\_url?

> `optional` **images\_url**: `string`

Defined in: main.ts:215796

url of an image included in the post

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:215807

links included in the post

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:215784

the alignment of the element in SERP
can take the following values: right

***

### post\_date?

> `optional` **post\_date**: `string`

Defined in: main.ts:215800

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

***

### post\_text?

> `optional` **post\_text**: `string`

Defined in: main.ts:215792

main content of a post

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22295

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22293

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:215790

additional content of a post

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:215805

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22290

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:215794

url of a post

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:215786

the XPath of the element
