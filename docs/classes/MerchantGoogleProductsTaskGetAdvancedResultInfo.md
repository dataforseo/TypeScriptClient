[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductsTaskGetAdvancedResultInfo

Defined in: main.ts:186874

## Implements

- [`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTaskGetAdvancedResultInfo()

> **new MerchantGoogleProductsTaskGetAdvancedResultInfo**(`data`?): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:186911

#### Parameters

##### data?

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:186888

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:186893

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:186901

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
google_shopping_sponsored_carousel, google_shopping_paid, google_shopping_serp

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:186907

additional items present in the element
contains a list of related keywords;
if there are none, equals null

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:186903

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:186877

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:186885

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:186883

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:186881

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:186896

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:186879

type of element

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186920

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186955

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:186948

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)
