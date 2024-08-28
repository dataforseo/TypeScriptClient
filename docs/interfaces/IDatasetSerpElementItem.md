[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDatasetSerpElementItem

# Interface: IDatasetSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### area\_covered?

> `optional` **area\_covered**: `string`[]

the list of areas covered in the dataset
for example: Africa, Global

#### Defined in

main.ts:55932

***

### authors?

> `optional` **authors**: [`AuthorsElement`](../classes/AuthorsElement.md)[]

the list of authors of the dataset

#### Defined in

main.ts:55922

***

### dataset\_description?

> `optional` **dataset\_description**: [`DatasetDescription`](../classes/DatasetDescription.md)

description of the dataset

#### Defined in

main.ts:55936

***

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset

#### Defined in

main.ts:55894

***

### dataset\_providers?

> `optional` **dataset\_providers**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of institutions that provided the dataset

#### Defined in

main.ts:55918

***

### formats?

> `optional` **formats**: [`FormatsElement`](../classes/FormatsElement.md)[]

the list of file formats of the dataset

#### Defined in

main.ts:55920

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:55899

***

### licenses?

> `optional` **licenses**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of licenses issued to the dataset

#### Defined in

main.ts:55924

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Defined in

main.ts:55916

***

### period\_covered?

> `optional` **period\_covered**: [`PeriodCovered`](../classes/PeriodCovered.md)

period covered in the dataset

#### Defined in

main.ts:55934

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:55890

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:55886

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:55883

***

### related\_article?

> `optional` **related\_article**: `string`

link to related article
link to the published article that is related to the dataset

#### Defined in

main.ts:55912

***

### scholarly\_articles\_url?

> `optional` **scholarly\_articles\_url**: `string`

url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22

#### Defined in

main.ts:55905

***

### scholarly\_citations\_count?

> `optional` **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Defined in

main.ts:55901

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:55896

***

### unique\_identifier?

> `optional` **unique\_identifier**: `string`

digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3

#### Defined in

main.ts:55909

***

### updated\_date?

> `optional` **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Defined in

main.ts:55929

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:55892
