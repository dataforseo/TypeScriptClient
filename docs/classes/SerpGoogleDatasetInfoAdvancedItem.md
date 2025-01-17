[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleDatasetInfoAdvancedItem

# Class: SerpGoogleDatasetInfoAdvancedItem

## Implements

- [`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoAdvancedItem()

> **new SerpGoogleDatasetInfoAdvancedItem**(`data`?): [`SerpGoogleDatasetInfoAdvancedItem`](SerpGoogleDatasetInfoAdvancedItem.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md)

#### Returns

[`SerpGoogleDatasetInfoAdvancedItem`](SerpGoogleDatasetInfoAdvancedItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:56081
=======
main.ts:56114
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### area\_covered?

> `optional` **area\_covered**: `any`

the list of areas covered in the dataset
for example: Africa, Global

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`area_covered`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#area_covered)

#### Defined in

<<<<<<< HEAD
main.ts:56073
=======
main.ts:56106
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### authors?

> `optional` **authors**: `any`

the list of authors of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`authors`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#authors)

#### Defined in

<<<<<<< HEAD
main.ts:56063
=======
main.ts:56096
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### dataset\_description?

> `optional` **dataset\_description**: [`DatasetDescription`](DatasetDescription.md)

description of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`dataset_description`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#dataset_description)

#### Defined in

<<<<<<< HEAD
main.ts:56077
=======
main.ts:56110
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#dataset_id)

#### Defined in

<<<<<<< HEAD
main.ts:56046
=======
main.ts:56079
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### dataset\_providers?

> `optional` **dataset\_providers**: [`LicensesElement`](LicensesElement.md)[]

the list of institutions that provided the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`dataset_providers`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#dataset_providers)

#### Defined in

<<<<<<< HEAD
main.ts:56059
=======
main.ts:56092
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### formats?

> `optional` **formats**: [`FormatsElement`](FormatsElement.md)[]

the list of file formats of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`formats`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#formats)

#### Defined in

<<<<<<< HEAD
main.ts:56061
=======
main.ts:56094
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`image_url`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#image_url)

#### Defined in

<<<<<<< HEAD
main.ts:56051
=======
main.ts:56084
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### licenses?

> `optional` **licenses**: [`LicensesElement`](LicensesElement.md)[]

the list of licenses issued to the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`licenses`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#licenses)

#### Defined in

<<<<<<< HEAD
main.ts:56065
=======
main.ts:56098
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`links`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#links)

#### Defined in

<<<<<<< HEAD
main.ts:56057
=======
main.ts:56090
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### period\_covered?

> `optional` **period\_covered**: [`PeriodCovered`](PeriodCovered.md)

period covered in the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`period_covered`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#period_covered)

#### Defined in

<<<<<<< HEAD
main.ts:56075
=======
main.ts:56108
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`position`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#position)

#### Defined in

<<<<<<< HEAD
main.ts:56042
=======
main.ts:56075
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#rank_absolute)

#### Defined in

<<<<<<< HEAD
main.ts:56038
=======
main.ts:56071
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#rank_group)

#### Defined in

<<<<<<< HEAD
main.ts:56035
=======
main.ts:56068
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### scholarly\_citations\_count?

> `optional` **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`scholarly_citations_count`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#scholarly_citations_count)

#### Defined in

<<<<<<< HEAD
main.ts:56053
=======
main.ts:56086
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`title`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#title)

#### Defined in

<<<<<<< HEAD
main.ts:56048
=======
main.ts:56081
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`type`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#type)

#### Defined in

<<<<<<< HEAD
main.ts:56031
=======
main.ts:56064
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### updated\_date?

> `optional` **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`updated_date`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#updated_date)

#### Defined in

<<<<<<< HEAD
main.ts:56070
=======
main.ts:56103
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`xpath`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#xpath)

#### Defined in

<<<<<<< HEAD
main.ts:56044
=======
main.ts:56077
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
main.ts:56090
=======
main.ts:56123
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
main.ts:56140
=======
main.ts:56173
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoAdvancedItem`](SerpGoogleDatasetInfoAdvancedItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoAdvancedItem`](SerpGoogleDatasetInfoAdvancedItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:56133
=======
main.ts:56166
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
