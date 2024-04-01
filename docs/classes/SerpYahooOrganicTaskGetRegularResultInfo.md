[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetRegularResultInfo

# Class: SerpYahooOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpYahooOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](SerpYahooOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](SerpYahooOrganicTaskGetRegularResultInfo.md#item_types)
- [items](SerpYahooOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](SerpYahooOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](SerpYahooOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](SerpYahooOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](SerpYahooOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](SerpYahooOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpYahooOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](SerpYahooOrganicTaskGetRegularResultInfo.md#spell)
- [type](SerpYahooOrganicTaskGetRegularResultInfo.md#type)

### Methods

- [init](SerpYahooOrganicTaskGetRegularResultInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetRegularResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetRegularResultInfo**(`data?`): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:66135

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[check_url](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:66111

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[datetime](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:66116

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic
note that this array contains all types of search results found in the returned SERP;

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[item_types](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:66125

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[items](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:66131

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[items_count](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:66129

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[keyword](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:66100

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[language_code](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:66108

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[location_code](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:66106

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[se_domain](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:66104

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[se_results_count](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:66127

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[spell](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:66119

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpYahooOrganicTaskGetRegularResultInfo](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[type](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:66102

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

main.ts:66144

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

main.ts:66180

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:66173
