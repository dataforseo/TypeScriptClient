[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpNaverOrganicTaskGetRegularResultInfo

# Interface: ISerpNaverOrganicTaskGetRegularResultInfo

## Implemented by

- [`SerpNaverOrganicTaskGetRegularResultInfo`](../classes/SerpNaverOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpNaverOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](ISerpNaverOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](ISerpNaverOrganicTaskGetRegularResultInfo.md#item_types)
- [items](ISerpNaverOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](ISerpNaverOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](ISerpNaverOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](ISerpNaverOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](ISerpNaverOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](ISerpNaverOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpNaverOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](ISerpNaverOrganicTaskGetRegularResultInfo.md#spell)
- [type](ISerpNaverOrganicTaskGetRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:68135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68135)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:68140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68140)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, map, organic, paid, related_searches, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Naver Organiс Advanced SERP endpoint

#### Defined in

[main.ts:68151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68151)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:68157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68157)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:68155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68155)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:68124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68124)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:68132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68132)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:68130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68130)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:68128](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68128)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:68153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68153)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:68143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68143)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:68126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68126)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")