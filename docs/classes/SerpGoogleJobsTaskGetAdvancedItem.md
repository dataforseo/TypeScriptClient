[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetAdvancedItem

# Class: SerpGoogleJobsTaskGetAdvancedItem

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetAdvancedItem()

> **new SerpGoogleJobsTaskGetAdvancedItem**(`data`?): [`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)

#### Parameters

##### data?

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md)

#### Returns

[`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)

#### Defined in

main.ts:54543

## Properties

### contract\_type?

> `optional` **contract\_type**: `string`

employment contract type

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`contract_type`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#contract_type)

#### Defined in

main.ts:54528

***

### employer\_image\_url?

> `optional` **employer\_image\_url**: `string`

URL to the image used in the job posting

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`employer_image_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#employer_image_url)

#### Defined in

main.ts:54517

***

### employer\_name?

> `optional` **employer\_name**: `string`

name of the employer

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`employer_name`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#employer_name)

#### Defined in

main.ts:54513

***

### employer\_url?

> `optional` **employer\_url**: `string`

URL to the employer’s website

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`employer_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#employer_url)

#### Defined in

main.ts:54515

***

### job\_id?

> `optional` **job\_id**: `string`

ID of the job on Google Jobs

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`job_id`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#job_id)

#### Defined in

main.ts:54509

***

### location?

> `optional` **location**: `string`

location for which the job vacancy is posted

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`location`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#location)

#### Defined in

main.ts:54519

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`position`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#position)

#### Defined in

main.ts:54505

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#rank_absolute)

#### Defined in

main.ts:54501

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#rank_group)

#### Defined in

main.ts:54498

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`rectangle`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#rectangle)

#### Defined in

main.ts:54539

***

### salary?

> `optional` **salary**: `string`

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`salary`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#salary)

#### Defined in

main.ts:54526

***

### source\_name?

> `optional` **source\_name**: `string`

original source of the job vacancy

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`source_name`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#source_name)

#### Defined in

main.ts:54521

***

### source\_url?

> `optional` **source\_url**: `string`

URL to the original source of the job vacancy

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`source_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#source_url)

#### Defined in

main.ts:54523

***

### time\_ago?

> `optional` **time\_ago**: `string`

indicates how long ago the job vacancy was posted

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`time_ago`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#time_ago)

#### Defined in

main.ts:54535

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`timestamp`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#timestamp)

#### Defined in

main.ts:54533

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`title`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#title)

#### Defined in

main.ts:54511

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`type`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#type)

#### Defined in

main.ts:54494

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`xpath`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#xpath)

#### Defined in

main.ts:54507

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:54552

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:54586

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)

#### Defined in

main.ts:54579
