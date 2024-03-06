[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderLiveAdvancedResultInfo

# Class: SerpGoogleLocalFinderLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)
- [type](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderLiveAdvancedResultInfo**(`data?`): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:41257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41257)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:41234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41234)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:41239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41239)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:41247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41247)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:41253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41253)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:41251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41251)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:41223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41223)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:41231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41231)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:41229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41229)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:41227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41227)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:41249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41249)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:41242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41242)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleLocalFinderLiveAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

#### Defined in

[main.ts:41225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41225)

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

[main.ts:41266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41266)

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

[main.ts:41302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41302)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:41295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41295)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")