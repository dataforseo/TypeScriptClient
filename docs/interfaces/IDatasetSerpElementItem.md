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

main.ts:53592

***

### authors?

> **`optional`** **authors**: [`AuthorsElement`](../classes/AuthorsElement.md)[]

the list of authors of the dataset

#### Source

main.ts:53582

***

### dataset\_description?

> **`optional`** **dataset\_description**: [`DatasetDescription`](../classes/DatasetDescription.md)

description of the dataset

#### Source

main.ts:53596

***

### dataset\_id?

> **`optional`** **dataset\_id**: `string`

ID of the dataset

#### Source

main.ts:53554

***

### dataset\_providers?

> **`optional`** **dataset\_providers**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of institutions that provided the dataset

#### Source

main.ts:53578

***

### formats?

> **`optional`** **formats**: [`FormatsElement`](../classes/FormatsElement.md)[]

the list of file formats of the dataset

#### Source

main.ts:53580

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Source

main.ts:53559

***

### licenses?

> **`optional`** **licenses**: [`LicensesElement`](../classes/LicensesElement.md)[]

the list of licenses issued to the dataset

#### Source

main.ts:53584

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Source

main.ts:53576

***

### period\_covered?

> **`optional`** **period\_covered**: [`PeriodCovered`](../classes/PeriodCovered.md)

period covered in the dataset

#### Source

main.ts:53594

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:53550

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:53546

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:53543

***

### related\_article?

> **`optional`** **related\_article**: `string`

link to related article
link to the published article that is related to the dataset

#### Source

main.ts:53572

***

### scholarly\_articles\_url?

> **`optional`** **scholarly\_articles\_url**: `string`

url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22

#### Source

main.ts:53565

***

### scholarly\_citations\_count?

> **`optional`** **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Source

main.ts:53561

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:53556

***

### unique\_identifier?

> **`optional`** **unique\_identifier**: `string`

digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3

#### Source

main.ts:53569

***

### updated\_date?

> **`optional`** **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Source

main.ts:53589

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:53552
