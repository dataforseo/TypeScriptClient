[dataforseo-client](../README.md) / [Exports](../modules.md) / DatasetSerpElementItem

# Class: DatasetSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`DatasetSerpElementItem`**

## Implements

- [`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DatasetSerpElementItem.md#constructor)

### Properties

- [\_discriminator](DatasetSerpElementItem.md#_discriminator)
- [area\_covered](DatasetSerpElementItem.md#area_covered)
- [authors](DatasetSerpElementItem.md#authors)
- [dataset\_description](DatasetSerpElementItem.md#dataset_description)
- [dataset\_id](DatasetSerpElementItem.md#dataset_id)
- [dataset\_providers](DatasetSerpElementItem.md#dataset_providers)
- [formats](DatasetSerpElementItem.md#formats)
- [image\_url](DatasetSerpElementItem.md#image_url)
- [licenses](DatasetSerpElementItem.md#licenses)
- [links](DatasetSerpElementItem.md#links)
- [period\_covered](DatasetSerpElementItem.md#period_covered)
- [position](DatasetSerpElementItem.md#position)
- [rank\_absolute](DatasetSerpElementItem.md#rank_absolute)
- [rank\_group](DatasetSerpElementItem.md#rank_group)
- [related\_article](DatasetSerpElementItem.md#related_article)
- [scholarly\_articles\_url](DatasetSerpElementItem.md#scholarly_articles_url)
- [scholarly\_citations\_count](DatasetSerpElementItem.md#scholarly_citations_count)
- [title](DatasetSerpElementItem.md#title)
- [unique\_identifier](DatasetSerpElementItem.md#unique_identifier)
- [updated\_date](DatasetSerpElementItem.md#updated_date)
- [xpath](DatasetSerpElementItem.md#xpath)

### Methods

- [init](DatasetSerpElementItem.md#init)
- [toJSON](DatasetSerpElementItem.md#tojson)
- [fromJS](DatasetSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new DatasetSerpElementItem**(`data?`): [`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDatasetSerpElementItem`](../interfaces/IDatasetSerpElementItem.md) |

#### Returns

[`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:50895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50895)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### area\_covered

• `Optional` **area\_covered**: `string`[]

the list of areas covered in the dataset
for example: Africa, Global

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[area_covered](../interfaces/IDatasetSerpElementItem.md#area_covered)

#### Defined in

[main.ts:50887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50887)

___

### authors

• `Optional` **authors**: [`AuthorsElement`](AuthorsElement.md)[]

the list of authors of the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[authors](../interfaces/IDatasetSerpElementItem.md#authors)

#### Defined in

[main.ts:50877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50877)

___

### dataset\_description

• `Optional` **dataset\_description**: [`DatasetDescription`](DatasetDescription.md)

description of the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[dataset_description](../interfaces/IDatasetSerpElementItem.md#dataset_description)

#### Defined in

[main.ts:50891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50891)

___

### dataset\_id

• `Optional` **dataset\_id**: `string`

ID of the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[dataset_id](../interfaces/IDatasetSerpElementItem.md#dataset_id)

#### Defined in

[main.ts:50849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50849)

___

### dataset\_providers

• `Optional` **dataset\_providers**: [`LicensesElement`](LicensesElement.md)[]

the list of institutions that provided the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[dataset_providers](../interfaces/IDatasetSerpElementItem.md#dataset_providers)

#### Defined in

[main.ts:50873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50873)

___

### formats

• `Optional` **formats**: [`FormatsElement`](FormatsElement.md)[]

the list of file formats of the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[formats](../interfaces/IDatasetSerpElementItem.md#formats)

#### Defined in

[main.ts:50875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50875)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[image_url](../interfaces/IDatasetSerpElementItem.md#image_url)

#### Defined in

[main.ts:50854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50854)

___

### licenses

• `Optional` **licenses**: [`LicensesElement`](LicensesElement.md)[]

the list of licenses issued to the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[licenses](../interfaces/IDatasetSerpElementItem.md#licenses)

#### Defined in

[main.ts:50879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50879)

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[links](../interfaces/IDatasetSerpElementItem.md#links)

#### Defined in

[main.ts:50871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50871)

___

### period\_covered

• `Optional` **period\_covered**: [`PeriodCovered`](PeriodCovered.md)

period covered in the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[period_covered](../interfaces/IDatasetSerpElementItem.md#period_covered)

#### Defined in

[main.ts:50889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50889)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[position](../interfaces/IDatasetSerpElementItem.md#position)

#### Defined in

[main.ts:50845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50845)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[rank_absolute](../interfaces/IDatasetSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:50841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50841)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[rank_group](../interfaces/IDatasetSerpElementItem.md#rank_group)

#### Defined in

[main.ts:50838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50838)

___

### related\_article

• `Optional` **related\_article**: `string`

link to related article
link to the published article that is related to the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[related_article](../interfaces/IDatasetSerpElementItem.md#related_article)

#### Defined in

[main.ts:50867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50867)

___

### scholarly\_articles\_url

• `Optional` **scholarly\_articles\_url**: `string`

url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[scholarly_articles_url](../interfaces/IDatasetSerpElementItem.md#scholarly_articles_url)

#### Defined in

[main.ts:50860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50860)

___

### scholarly\_citations\_count

• `Optional` **scholarly\_citations\_count**: `number`

count of articles that refer to the dataset

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[scholarly_citations_count](../interfaces/IDatasetSerpElementItem.md#scholarly_citations_count)

#### Defined in

[main.ts:50856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50856)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[title](../interfaces/IDatasetSerpElementItem.md#title)

#### Defined in

[main.ts:50851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50851)

___

### unique\_identifier

• `Optional` **unique\_identifier**: `string`

digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[unique_identifier](../interfaces/IDatasetSerpElementItem.md#unique_identifier)

#### Defined in

[main.ts:50864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50864)

___

### updated\_date

• `Optional` **updated\_date**: `string`

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[updated_date](../interfaces/IDatasetSerpElementItem.md#updated_date)

#### Defined in

[main.ts:50884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50884)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IDatasetSerpElementItem](../interfaces/IDatasetSerpElementItem.md).[xpath](../interfaces/IDatasetSerpElementItem.md#xpath)

#### Defined in

[main.ts:50847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50847)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:50900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50900)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:50961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50961)

___

### fromJS

▸ **fromJS**(`data`): [`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DatasetSerpElementItem`](DatasetSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:50954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50954)
