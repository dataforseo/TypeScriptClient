[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicLiveRegularResultInfo

# Class: SerpBingOrganicLiveRegularResultInfo

## Implements

- [`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicLiveRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpBingOrganicLiveRegularResultInfo.md#check_url)
- [datetime](SerpBingOrganicLiveRegularResultInfo.md#datetime)
- [item\_types](SerpBingOrganicLiveRegularResultInfo.md#item_types)
- [items](SerpBingOrganicLiveRegularResultInfo.md#items)
- [items\_count](SerpBingOrganicLiveRegularResultInfo.md#items_count)
- [keyword](SerpBingOrganicLiveRegularResultInfo.md#keyword)
- [language\_code](SerpBingOrganicLiveRegularResultInfo.md#language_code)
- [location\_code](SerpBingOrganicLiveRegularResultInfo.md#location_code)
- [se\_domain](SerpBingOrganicLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpBingOrganicLiveRegularResultInfo.md#se_results_count)
- [spell](SerpBingOrganicLiveRegularResultInfo.md#spell)
- [type](SerpBingOrganicLiveRegularResultInfo.md#type)

### Methods

- [init](SerpBingOrganicLiveRegularResultInfo.md#init)
- [toJSON](SerpBingOrganicLiveRegularResultInfo.md#tojson)
- [fromJS](SerpBingOrganicLiveRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicLiveRegularResultInfo**(`data?`): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md) |

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Defined in

[main.ts:54985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54985)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[check_url](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#check_url)

#### Defined in

[main.ts:54962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54962)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[datetime](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#datetime)

#### Defined in

[main.ts:54967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54967)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[item_types](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#item_types)

#### Defined in

[main.ts:54974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54974)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[items](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items)

#### Defined in

[main.ts:54981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54981)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[items_count](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items_count)

#### Defined in

[main.ts:54978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54978)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[keyword](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#keyword)

#### Defined in

[main.ts:54951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54951)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[language_code](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#language_code)

#### Defined in

[main.ts:54959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54959)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[location_code](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#location_code)

#### Defined in

[main.ts:54957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54957)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[se_domain](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:54955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54955)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[se_results_count](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:54976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54976)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[spell](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#spell)

#### Defined in

[main.ts:54970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54970)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingOrganicLiveRegularResultInfo](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[type](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#type)

#### Defined in

[main.ts:54953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54953)

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

[main.ts:54994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54994)

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

[main.ts:55030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55030)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Defined in

[main.ts:55023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55023)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")