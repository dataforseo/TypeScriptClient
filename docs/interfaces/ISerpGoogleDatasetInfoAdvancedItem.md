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

main.ts:56228

***

### authors?

> `optional` **authors**: `any`

the list of authors of the dataset

#### Defined in

main.ts:56218

***

### dataset\_description?

> `optional` **dataset\_description**: [`DatasetDescription`](../classes/DatasetDescription.md)

description of the dataset

#### Defined in

main.ts:56232

***

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset

#### Defined in

main.ts:56201

***

### dataset\_providers?

> `optional` **dataset\_providers**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of institutions that provided the dataset

#### Defined in

main.ts:56214

***

### formats?

> `optional` **formats**: [`FormatsElement`](../classes/FormatsElement.md)[]

the list of file formats of the dataset

#### Defined in

main.ts:56216

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:56206

***

### licenses?

> `optional` **licenses**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of licenses issued to the dataset

#### Defined in

main.ts:56220

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Defined in

main.ts:56212

***

### period\_covered?

> `optional` **period\_covered**: [`PeriodCovered`](../classes/PeriodCovered.md)

period covered in the dataset

#### Defined in

main.ts:56230

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:56197

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:56193

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:56190

***

### scholarly\_citations\_count?

> `optional` **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Defined in

main.ts:56208

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:56203

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:56186

***

### updated\_date?

> `optional` **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Defined in

main.ts:56225

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:56199
