[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTaskGetAdvancedResultInfo()

> **new MerchantGoogleProductsTaskGetAdvancedResultInfo**(`data`?): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:186843

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:186820

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:186825

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
google_shopping_sponsored_carousel, google_shopping_paid, google_shopping_serp

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:186833

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

additional items present in the element
contains a list of related keywords;
if there are none, equals null

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:186839

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:186835

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:186809

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:186817

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:186815

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:186813

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:186828

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:186811

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:186852

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:186887

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:186880
