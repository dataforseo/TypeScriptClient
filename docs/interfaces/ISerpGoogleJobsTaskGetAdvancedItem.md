[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleJobsTaskGetAdvancedItem

# Interface: ISerpGoogleJobsTaskGetAdvancedItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### contract\_type?

> `optional` **contract\_type**: `string`

employment contract type

#### Defined in

main.ts:54650

***

### employer\_image\_url?

> `optional` **employer\_image\_url**: `string`

URL to the image used in the job posting

#### Defined in

main.ts:54639

***

### employer\_name?

> `optional` **employer\_name**: `string`

name of the employer

#### Defined in

main.ts:54635

***

### employer\_url?

> `optional` **employer\_url**: `string`

URL to the employer’s website

#### Defined in

main.ts:54637

***

### job\_id?

> `optional` **job\_id**: `string`

ID of the job on Google Jobs

#### Defined in

main.ts:54631

***

### location?

> `optional` **location**: `string`

location for which the job vacancy is posted

#### Defined in

main.ts:54641

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:54627

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:54623

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:54620

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Defined in

main.ts:54661

***

### salary?

> `optional` **salary**: `string`

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Defined in

main.ts:54648

***

### source\_name?

> `optional` **source\_name**: `string`

original source of the job vacancy

#### Defined in

main.ts:54643

***

### source\_url?

> `optional` **source\_url**: `string`

URL to the original source of the job vacancy

#### Defined in

main.ts:54645

***

### time\_ago?

> `optional` **time\_ago**: `string`

indicates how long ago the job vacancy was posted

#### Defined in

main.ts:54657

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:54655

***

### title?

> `optional` **title**: `string`

title of the element

#### Defined in

main.ts:54633

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:54616

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:54629
