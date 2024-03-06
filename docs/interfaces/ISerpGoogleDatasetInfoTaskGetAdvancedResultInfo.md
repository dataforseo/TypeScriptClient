[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo

# Interface: ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../classes/SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#language_code)
- [se\_domain](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#spell)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:52617](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52617)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:52622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52622)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Defined in

[main.ts:52629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52629)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:52635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52635)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:52633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52633)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:52610](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52610)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:52614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52614)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:52612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52612)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:52631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52631)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:52625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52625)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")