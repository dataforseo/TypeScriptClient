**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DatasetSerpElementItem

# Class: DatasetSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DatasetSerpElementItem(data)

> **new DatasetSerpElementItem**(`data`?): [`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Parameters

• **data?**: [`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md)

#### Returns

[`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:53278

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### area\_covered?

> **`optional`** **area\_covered**: `string`[]

the list of areas covered in the dataset
for example: Africa, Global

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`area_covered`](../interfaces/IDatasetSerpElementItem.md#area_covered)

#### Source

main.ts:53270

***

### authors?

> **`optional`** **authors**: [`AuthorsElement`](AuthorsElement.md)[]

the list of authors of the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`authors`](../interfaces/IDatasetSerpElementItem.md#authors)

#### Source

main.ts:53260

***

### dataset\_description?

> **`optional`** **dataset\_description**: [`DatasetDescription`](DatasetDescription.md)

description of the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`dataset_description`](../interfaces/IDatasetSerpElementItem.md#dataset_description)

#### Source

main.ts:53274

***

### dataset\_id?

> **`optional`** **dataset\_id**: `string`

ID of the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`dataset_id`](../interfaces/IDatasetSerpElementItem.md#dataset_id)

#### Source

main.ts:53232

***

### dataset\_providers?

> **`optional`** **dataset\_providers**: [`LicensesElement`](LicensesElement.md)[]

the list of institutions that provided the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`dataset_providers`](../interfaces/IDatasetSerpElementItem.md#dataset_providers)

#### Source

main.ts:53256

***

### formats?

> **`optional`** **formats**: [`FormatsElement`](FormatsElement.md)[]

the list of file formats of the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`formats`](../interfaces/IDatasetSerpElementItem.md#formats)

#### Source

main.ts:53258

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`image_url`](../interfaces/IDatasetSerpElementItem.md#image_url)

#### Source

main.ts:53237

***

### licenses?

> **`optional`** **licenses**: [`LicensesElement`](LicensesElement.md)[]

the list of licenses issued to the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`licenses`](../interfaces/IDatasetSerpElementItem.md#licenses)

#### Source

main.ts:53262

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`links`](../interfaces/IDatasetSerpElementItem.md#links)

#### Source

main.ts:53254

***

### period\_covered?

> **`optional`** **period\_covered**: [`PeriodCovered`](PeriodCovered.md)

period covered in the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`period_covered`](../interfaces/IDatasetSerpElementItem.md#period_covered)

#### Source

main.ts:53272

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`position`](../interfaces/IDatasetSerpElementItem.md#position)

#### Source

main.ts:53228

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`rank_absolute`](../interfaces/IDatasetSerpElementItem.md#rank_absolute)

#### Source

main.ts:53224

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`rank_group`](../interfaces/IDatasetSerpElementItem.md#rank_group)

#### Source

main.ts:53221

***

### related\_article?

> **`optional`** **related\_article**: `string`

link to related article
link to the published article that is related to the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`related_article`](../interfaces/IDatasetSerpElementItem.md#related_article)

#### Source

main.ts:53250

***

### scholarly\_articles\_url?

> **`optional`** **scholarly\_articles\_url**: `string`

url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`scholarly_articles_url`](../interfaces/IDatasetSerpElementItem.md#scholarly_articles_url)

#### Source

main.ts:53243

***

### scholarly\_citations\_count?

> **`optional`** **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`scholarly_citations_count`](../interfaces/IDatasetSerpElementItem.md#scholarly_citations_count)

#### Source

main.ts:53239

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`title`](../interfaces/IDatasetSerpElementItem.md#title)

#### Source

main.ts:53234

***

### unique\_identifier?

> **`optional`** **unique\_identifier**: `string`

digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`unique_identifier`](../interfaces/IDatasetSerpElementItem.md#unique_identifier)

#### Source

main.ts:53247

***

### updated\_date?

> **`optional`** **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`updated_date`](../interfaces/IDatasetSerpElementItem.md#updated_date)

#### Source

main.ts:53267

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md).[`xpath`](../interfaces/IDatasetSerpElementItem.md#xpath)

#### Source

main.ts:53230

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

main.ts:53283

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

main.ts:53344

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:53337
