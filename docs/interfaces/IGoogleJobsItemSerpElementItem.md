**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleJobsItemSerpElementItem

# Interface: IGoogleJobsItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### contract\_type?

> **`optional`** **contract\_type**: `string`

employment contract type

#### Source

main.ts:50155

***

### employer\_image\_url?

> **`optional`** **employer\_image\_url**: `string`

URL to the image used in the job posting

#### Source

main.ts:50144

***

### employer\_name?

> **`optional`** **employer\_name**: `string`

name of the employer

#### Source

main.ts:50140

***

### employer\_url?

> **`optional`** **employer\_url**: `string`

URL to the employer’s website

#### Source

main.ts:50142

***

### job\_id?

> **`optional`** **job\_id**: `string`

ID of the job on Google Jobs

#### Source

main.ts:50136

***

### location?

> **`optional`** **location**: `string`

location for which the job vacancy is posted

#### Source

main.ts:50146

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:50132

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:50128

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:50125

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Source

main.ts:50166

***

### salary?

> **`optional`** **salary**: `string`

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Source

main.ts:50153

***

### source\_name?

> **`optional`** **source\_name**: `string`

original source of the job vacancy

#### Source

main.ts:50148

***

### source\_url?

> **`optional`** **source\_url**: `string`

URL to the original source of the job vacancy

#### Source

main.ts:50150

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

indicates how long ago the job vacancy was posted

#### Source

main.ts:50162

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:50160

***

### title?

> **`optional`** **title**: `string`

title of the job

#### Source

main.ts:50138

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:50134
