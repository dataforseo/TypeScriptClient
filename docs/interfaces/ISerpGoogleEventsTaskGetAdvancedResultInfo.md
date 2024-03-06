[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleEventsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleEventsTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleEventsTaskGetAdvancedResultInfo`](../classes/SerpGoogleEventsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleEventsTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results

#### Defined in

[main.ts:44925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44925)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:44930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44930)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Defined in

[main.ts:44937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44937)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:44945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44945)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:44943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44943)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:44914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44914)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Defined in

[main.ts:44923](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44923)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:44920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44920)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:44918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44918)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Defined in

[main.ts:44941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44941)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:44933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44933)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:44916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44916)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")