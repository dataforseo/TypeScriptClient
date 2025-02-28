[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleJobsItemSerpElementItem

# Interface: IGoogleJobsItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### contract\_type?

> `optional` **contract\_type**: `string`

employment contract type

#### Defined in

main.ts:52465

***

### employer\_image\_url?

> `optional` **employer\_image\_url**: `string`

URL to the image used in the job posting

#### Defined in

main.ts:52454

***

### employer\_name?

> `optional` **employer\_name**: `string`

name of the employer

#### Defined in

main.ts:52450

***

### employer\_url?

> `optional` **employer\_url**: `string`

URL to the employer’s website

#### Defined in

main.ts:52452

***

### job\_id?

> `optional` **job\_id**: `string`

ID of the job on Google Jobs

#### Defined in

main.ts:52446

***

### location?

> `optional` **location**: `string`

location for which the job vacancy is posted

#### Defined in

main.ts:52456

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:52442

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:52438

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:52435

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Defined in

main.ts:52476

***

### salary?

> `optional` **salary**: `string`

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Defined in

main.ts:52463

***

### source\_name?

> `optional` **source\_name**: `string`

original source of the job vacancy

#### Defined in

main.ts:52458

***

### source\_url?

> `optional` **source\_url**: `string`

URL to the original source of the job vacancy

#### Defined in

main.ts:52460

***

### time\_ago?

> `optional` **time\_ago**: `string`

indicates how long ago the job vacancy was posted

#### Defined in

main.ts:52472

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:52470

***

### title?

> `optional` **title**: `string`

title of the job

#### Defined in

main.ts:52448

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:52444
