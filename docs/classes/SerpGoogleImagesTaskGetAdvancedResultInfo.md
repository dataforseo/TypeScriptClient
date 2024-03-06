[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskGetAdvancedResultInfo

# Class: SerpGoogleImagesTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleImagesTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleImagesTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleImagesTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:46233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46233)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:46210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46210)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:46215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46215)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:46223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46223)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

contains keywords and images related to the specified search term

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:46229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46229)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:46227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46227)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:46199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46199)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:46207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46207)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:46205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46205)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:46203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46203)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:46225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46225)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:46218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46218)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:46201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46201)

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

[main.ts:46242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46242)

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

[main.ts:46278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46278)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:46271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46271)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")