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

main.ts:56114

## Properties

### area\_covered?

> `optional` **area\_covered**: `any`

the list of areas covered in the dataset
for example: Africa, Global

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`area_covered`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#area_covered)

#### Defined in

main.ts:56106

***

### authors?

> `optional` **authors**: `any`

the list of authors of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`authors`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#authors)

#### Defined in

main.ts:56096

***

### dataset\_description?

> `optional` **dataset\_description**: [`DatasetDescription`](DatasetDescription.md)

description of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`dataset_description`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#dataset_description)

#### Defined in

main.ts:56110

***

### dataset\_id?

> `optional` **dataset\_id**: `string`

ID of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`dataset_id`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#dataset_id)

#### Defined in

main.ts:56079

***

### dataset\_providers?

> `optional` **dataset\_providers**: [`LicensesElement`](LicensesElement.md)[]

the list of institutions that provided the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`dataset_providers`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#dataset_providers)

#### Defined in

main.ts:56092

***

### formats?

> `optional` **formats**: [`FormatsElement`](FormatsElement.md)[]

the list of file formats of the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`formats`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#formats)

#### Defined in

main.ts:56094

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`image_url`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#image_url)

#### Defined in

main.ts:56084

***

### licenses?

> `optional` **licenses**: [`LicensesElement`](LicensesElement.md)[]

the list of licenses issued to the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`licenses`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#licenses)

#### Defined in

main.ts:56098

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`links`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#links)

#### Defined in

main.ts:56090

***

### period\_covered?

> `optional` **period\_covered**: [`PeriodCovered`](PeriodCovered.md)

period covered in the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`period_covered`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#period_covered)

#### Defined in

main.ts:56108

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`position`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#position)

#### Defined in

main.ts:56075

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#rank_absolute)

#### Defined in

main.ts:56071

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#rank_group)

#### Defined in

main.ts:56068

***

### scholarly\_citations\_count?

> `optional` **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`scholarly_citations_count`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#scholarly_citations_count)

#### Defined in

main.ts:56086

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`title`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#title)

#### Defined in

main.ts:56081

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`type`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#type)

#### Defined in

main.ts:56064

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

main.ts:56103

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ISerpGoogleDatasetInfoAdvancedItem`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md).[`xpath`](../interfaces/ISerpGoogleDatasetInfoAdvancedItem.md#xpath)

#### Defined in

main.ts:56077

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:56123

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:56173

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoAdvancedItem`](SerpGoogleDatasetInfoAdvancedItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoAdvancedItem`](SerpGoogleDatasetInfoAdvancedItem.md)

#### Defined in

main.ts:56166
