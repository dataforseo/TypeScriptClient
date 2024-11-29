[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetAdvancedItem

# Class: SerpGoogleDatasetAdvancedItem

## Implements

- [`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetAdvancedItem()

> **new SerpGoogleDatasetAdvancedItem**(`data`?): [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)

#### Parameters

##### data?

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md)

#### Returns

[`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)

#### Defined in

main.ts:57917

## Properties

### area\_covered?

> `optional` **area\_covered**: `string`[]

the list of areas covered in the dataset
for example: Africa, Global

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`area_covered`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#area_covered)

#### Defined in

main.ts:57909

***

### authors?

> `optional` **authors**: [`AuthorsElement`](AuthorsElement.md)[]

the list of authors of the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`authors`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#authors)

#### Defined in

main.ts:57899

***

### dataset\_description?

> `optional` **dataset\_description**: [`DatasetDescription`](DatasetDescription.md)

description of the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`dataset_description`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#dataset_description)

#### Defined in

main.ts:57913

***

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#dataset_id)

#### Defined in

main.ts:57871

***

### dataset\_providers?

> `optional` **dataset\_providers**: [`LicensesElement`](LicensesElement.md)[]

the list of institutions that provided the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`dataset_providers`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#dataset_providers)

#### Defined in

main.ts:57895

***

### formats?

> `optional` **formats**: [`FormatsElement`](FormatsElement.md)[]

the list of file formats of the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`formats`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#formats)

#### Defined in

main.ts:57897

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`image_url`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#image_url)

#### Defined in

main.ts:57876

***

### licenses?

> `optional` **licenses**: [`LicensesElement`](LicensesElement.md)[]

the list of licenses issued to the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`licenses`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#licenses)

#### Defined in

main.ts:57901

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`links`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#links)

#### Defined in

main.ts:57893

***

### period\_covered?

> `optional` **period\_covered**: [`PeriodCovered`](PeriodCovered.md)

period covered in the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`period_covered`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#period_covered)

#### Defined in

main.ts:57911

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`position`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#position)

#### Defined in

main.ts:57867

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#rank_absolute)

#### Defined in

main.ts:57863

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#rank_group)

#### Defined in

main.ts:57860

***

### related\_article?

> `optional` **related\_article**: `string`

link to related article
link to the published article that is related to the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`related_article`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#related_article)

#### Defined in

main.ts:57889

***

### scholarly\_articles\_url?

> `optional` **scholarly\_articles\_url**: `string`

url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`scholarly_articles_url`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#scholarly_articles_url)

#### Defined in

main.ts:57882

***

### scholarly\_citations\_count?

> `optional` **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`scholarly_citations_count`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#scholarly_citations_count)

#### Defined in

main.ts:57878

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`title`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#title)

#### Defined in

main.ts:57873

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`type`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#type)

#### Defined in

main.ts:57856

***

### unique\_identifier?

> `optional` **unique\_identifier**: `string`

digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`unique_identifier`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#unique_identifier)

#### Defined in

main.ts:57886

***

### updated\_date?

> `optional` **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`updated_date`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#updated_date)

#### Defined in

main.ts:57906

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ISerpGoogleDatasetAdvancedItem`](../interfaces/ISerpGoogleDatasetAdvancedItem.md).[`xpath`](../interfaces/ISerpGoogleDatasetAdvancedItem.md#xpath)

#### Defined in

main.ts:57869

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:57926

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:57987

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)

#### Defined in

main.ts:57980
