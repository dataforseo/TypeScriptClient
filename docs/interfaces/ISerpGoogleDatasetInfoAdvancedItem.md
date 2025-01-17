[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpGoogleDatasetInfoAdvancedItem

# Interface: ISerpGoogleDatasetInfoAdvancedItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### area\_covered?

> `optional` **area\_covered**: `any`

the list of areas covered in the dataset
for example: Africa, Global

#### Defined in

<<<<<<< HEAD
main.ts:56228
=======
main.ts:56261
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### authors?

> `optional` **authors**: `any`

the list of authors of the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56218
=======
main.ts:56251
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### dataset\_description?

> `optional` **dataset\_description**: [`DatasetDescription`](../classes/DatasetDescription.md)

description of the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56232
=======
main.ts:56265
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56201
=======
main.ts:56234
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### dataset\_providers?

> `optional` **dataset\_providers**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of institutions that provided the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56214
=======
main.ts:56247
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### formats?

> `optional` **formats**: [`FormatsElement`](../classes/FormatsElement.md)[]

the list of file formats of the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56216
=======
main.ts:56249
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

<<<<<<< HEAD
main.ts:56206
=======
main.ts:56239
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### licenses?

> `optional` **licenses**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of licenses issued to the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56220
=======
main.ts:56253
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Defined in

<<<<<<< HEAD
main.ts:56212
=======
main.ts:56245
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### period\_covered?

> `optional` **period\_covered**: [`PeriodCovered`](../classes/PeriodCovered.md)

period covered in the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56230
=======
main.ts:56263
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

<<<<<<< HEAD
main.ts:56197
=======
main.ts:56230
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

<<<<<<< HEAD
main.ts:56193
=======
main.ts:56226
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

<<<<<<< HEAD
main.ts:56190
=======
main.ts:56223
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### scholarly\_citations\_count?

> `optional` **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Defined in

<<<<<<< HEAD
main.ts:56208
=======
main.ts:56241
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

<<<<<<< HEAD
main.ts:56203
=======
main.ts:56236
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

<<<<<<< HEAD
main.ts:56186
=======
main.ts:56219
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### updated\_date?

> `optional` **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Defined in

<<<<<<< HEAD
main.ts:56225
=======
main.ts:56258
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

<<<<<<< HEAD
main.ts:56199
=======
main.ts:56232
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
