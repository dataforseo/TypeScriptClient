[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveRegularResultInfo

# Class: SerpGoogleOrganicLiveRegularResultInfo

## Implements

- [`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleOrganicLiveRegularResultInfo.md#check_url)
- [datetime](SerpGoogleOrganicLiveRegularResultInfo.md#datetime)
- [item\_types](SerpGoogleOrganicLiveRegularResultInfo.md#item_types)
- [items](SerpGoogleOrganicLiveRegularResultInfo.md#items)
- [items\_count](SerpGoogleOrganicLiveRegularResultInfo.md#items_count)
- [keyword](SerpGoogleOrganicLiveRegularResultInfo.md#keyword)
- [language\_code](SerpGoogleOrganicLiveRegularResultInfo.md#language_code)
- [location\_code](SerpGoogleOrganicLiveRegularResultInfo.md#location_code)
- [se\_domain](SerpGoogleOrganicLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleOrganicLiveRegularResultInfo.md#se_results_count)
- [spell](SerpGoogleOrganicLiveRegularResultInfo.md#spell)
- [type](SerpGoogleOrganicLiveRegularResultInfo.md#type)

### Methods

- [init](SerpGoogleOrganicLiveRegularResultInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveRegularResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveRegularResultInfo**(`data?`): [`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Defined in

[main.ts:36606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36606)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[check_url](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#check_url)

#### Defined in

[main.ts:36580](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36580)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[datetime](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#datetime)

#### Defined in

[main.ts:36585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36585)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[item_types](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#item_types)

#### Defined in

[main.ts:36596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36596)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[items](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#items)

#### Defined in

[main.ts:36602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36602)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[items_count](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#items_count)

#### Defined in

[main.ts:36600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36600)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[keyword](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#keyword)

#### Defined in

[main.ts:36569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36569)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[language_code](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#language_code)

#### Defined in

[main.ts:36577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36577)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[location_code](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#location_code)

#### Defined in

[main.ts:36575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36575)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[se_domain](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:36573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36573)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[se_results_count](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:36598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36598)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[spell](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#spell)

#### Defined in

[main.ts:36588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36588)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleOrganicLiveRegularResultInfo](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[type](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#type)

#### Defined in

[main.ts:36571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36571)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:36615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36615)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:36651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36651)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Defined in

[main.ts:36644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36644)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")