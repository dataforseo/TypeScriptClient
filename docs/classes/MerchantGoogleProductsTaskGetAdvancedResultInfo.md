[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#se_domain)
- [spell](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#spell)
- [type](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTaskGetAdvancedResultInfo**(`data?`): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:165526

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:165503

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:165508

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
google_shopping_sponsored_carousel, google_shopping_paid, google_shopping_serp

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:165516

___

### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

additional items present in the element
contains a list of related keywords;
if there are none, equals null

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:165522

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:165518

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[keyword](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:165492

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:165500

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:165498

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:165496

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[spell](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:165511

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:165494

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

main.ts:165535

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

main.ts:165570

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:165563
