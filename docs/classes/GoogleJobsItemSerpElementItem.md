**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleJobsItemSerpElementItem

# Class: GoogleJobsItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleJobsItemSerpElementItem(data)

> **new GoogleJobsItemSerpElementItem**(`data`?): [`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md)

#### Returns

[`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:51832

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### contract\_type?

> **`optional`** **contract\_type**: `string`

employment contract type

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`contract_type`](../interfaces/IGoogleJobsItemSerpElementItem.md#contract_type)

#### Source

main.ts:51817

***

### employer\_image\_url?

> **`optional`** **employer\_image\_url**: `string`

URL to the image used in the job posting

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`employer_image_url`](../interfaces/IGoogleJobsItemSerpElementItem.md#employer_image_url)

#### Source

main.ts:51806

***

### employer\_name?

> **`optional`** **employer\_name**: `string`

name of the employer

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`employer_name`](../interfaces/IGoogleJobsItemSerpElementItem.md#employer_name)

#### Source

main.ts:51802

***

### employer\_url?

> **`optional`** **employer\_url**: `string`

URL to the employer’s website

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`employer_url`](../interfaces/IGoogleJobsItemSerpElementItem.md#employer_url)

#### Source

main.ts:51804

***

### job\_id?

> **`optional`** **job\_id**: `string`

ID of the job on Google Jobs

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`job_id`](../interfaces/IGoogleJobsItemSerpElementItem.md#job_id)

#### Source

main.ts:51798

***

### location?

> **`optional`** **location**: `string`

location for which the job vacancy is posted

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`location`](../interfaces/IGoogleJobsItemSerpElementItem.md#location)

#### Source

main.ts:51808

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`position`](../interfaces/IGoogleJobsItemSerpElementItem.md#position)

#### Source

main.ts:51794

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleJobsItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:51790

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`rank_group`](../interfaces/IGoogleJobsItemSerpElementItem.md#rank_group)

#### Source

main.ts:51787

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`rectangle`](../interfaces/IGoogleJobsItemSerpElementItem.md#rectangle)

#### Source

main.ts:51828

***

### salary?

> **`optional`** **salary**: `string`

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`salary`](../interfaces/IGoogleJobsItemSerpElementItem.md#salary)

#### Source

main.ts:51815

***

### source\_name?

> **`optional`** **source\_name**: `string`

original source of the job vacancy

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`source_name`](../interfaces/IGoogleJobsItemSerpElementItem.md#source_name)

#### Source

main.ts:51810

***

### source\_url?

> **`optional`** **source\_url**: `string`

URL to the original source of the job vacancy

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`source_url`](../interfaces/IGoogleJobsItemSerpElementItem.md#source_url)

#### Source

main.ts:51812

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

indicates how long ago the job vacancy was posted

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`time_ago`](../interfaces/IGoogleJobsItemSerpElementItem.md#time_ago)

#### Source

main.ts:51824

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`timestamp`](../interfaces/IGoogleJobsItemSerpElementItem.md#timestamp)

#### Source

main.ts:51822

***

### title?

> **`optional`** **title**: `string`

title of the job

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`title`](../interfaces/IGoogleJobsItemSerpElementItem.md#title)

#### Source

main.ts:51800

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md).[`xpath`](../interfaces/IGoogleJobsItemSerpElementItem.md#xpath)

#### Source

main.ts:51796

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:51837

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:51871

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:51864
