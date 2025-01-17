[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetAdvancedItem

# Class: SerpGoogleJobsTaskGetAdvancedItem

Defined in: main.ts:54492

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetAdvancedItem()

> **new SerpGoogleJobsTaskGetAdvancedItem**(`data`?): [`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)

Defined in: main.ts:54543

#### Parameters

##### data?

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md)

#### Returns

[`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)

## Properties

### contract\_type?

> `optional` **contract\_type**: `string`

Defined in: main.ts:54528

employment contract type

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`contract_type`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#contract_type)

***

### employer\_image\_url?

> `optional` **employer\_image\_url**: `string`

Defined in: main.ts:54517

URL to the image used in the job posting

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`employer_image_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#employer_image_url)

***

### employer\_name?

> `optional` **employer\_name**: `string`

Defined in: main.ts:54513

name of the employer

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`employer_name`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#employer_name)

***

### employer\_url?

> `optional` **employer\_url**: `string`

Defined in: main.ts:54515

URL to the employer’s website

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`employer_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#employer_url)

***

### job\_id?

> `optional` **job\_id**: `string`

Defined in: main.ts:54509

ID of the job on Google Jobs

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`job_id`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#job_id)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:54519

location for which the job vacancy is posted

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`location`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#location)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:54505

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`position`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:54501

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:54498

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:54539

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`rectangle`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#rectangle)

***

### salary?

> `optional` **salary**: `string`

Defined in: main.ts:54526

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`salary`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#salary)

***

### source\_name?

> `optional` **source\_name**: `string`

Defined in: main.ts:54521

original source of the job vacancy

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`source_name`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#source_name)

***

### source\_url?

> `optional` **source\_url**: `string`

Defined in: main.ts:54523

URL to the original source of the job vacancy

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`source_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#source_url)

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:54535

indicates how long ago the job vacancy was posted

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`time_ago`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#time_ago)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:54533

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`timestamp`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:54511

title of the element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`title`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:54494

type of element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`type`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:54507

the XPath of the element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedItem`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md).[`xpath`](../interfaces/ISerpGoogleJobsTaskGetAdvancedItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54552

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:54586

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)

Defined in: main.ts:54579

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)
