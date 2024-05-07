**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDatasetSerpElementItem

# Interface: IDatasetSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### area\_covered?

> **`optional`** **area\_covered**: `string`[]

the list of areas covered in the dataset
for example: Africa, Global

#### Source

main.ts:54452

***

### authors?

> **`optional`** **authors**: [`AuthorsElement`](../classes/AuthorsElement.md)[]

the list of authors of the dataset

#### Source

main.ts:54442

***

### dataset\_description?

> **`optional`** **dataset\_description**: [`DatasetDescription`](../classes/DatasetDescription.md)

description of the dataset

#### Source

main.ts:54456

***

### dataset\_id?

> **`optional`** **dataset\_id**: `string`

ID of the dataset

#### Source

main.ts:54414

***

### dataset\_providers?

> **`optional`** **dataset\_providers**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of institutions that provided the dataset

#### Source

main.ts:54438

***

### formats?

> **`optional`** **formats**: [`FormatsElement`](../classes/FormatsElement.md)[]

the list of file formats of the dataset

#### Source

main.ts:54440

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Source

main.ts:54419

***

### licenses?

> **`optional`** **licenses**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of licenses issued to the dataset

#### Source

main.ts:54444

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Source

main.ts:54436

***

### period\_covered?

> **`optional`** **period\_covered**: [`PeriodCovered`](../classes/PeriodCovered.md)

period covered in the dataset

#### Source

main.ts:54454

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:54410

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:54406

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:54403

***

### related\_article?

> **`optional`** **related\_article**: `string`

link to related article
link to the published article that is related to the dataset

#### Source

main.ts:54432

***

### scholarly\_articles\_url?

> **`optional`** **scholarly\_articles\_url**: `string`

url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22

#### Source

main.ts:54425

***

### scholarly\_citations\_count?

> **`optional`** **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Source

main.ts:54421

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:54416

***

### unique\_identifier?

> **`optional`** **unique\_identifier**: `string`

digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3

#### Source

main.ts:54429

***

### updated\_date?

> **`optional`** **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Source

main.ts:54449

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:54412
