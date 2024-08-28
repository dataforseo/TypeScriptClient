[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantAmazonProductsTaskGetAdvancedResultInfo

# Class: MerchantAmazonProductsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskGetAdvancedResultInfo()

> **new MerchantAmazonProductsTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:185180

## Properties

### categories?

> `optional` **categories**: `string`[]

amazon product departments and subcategories

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`categories`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#categories)

#### Defined in

main.ts:185172

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:185155

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:185160

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in Amazon SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:185168

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Amazon product items within the editorial_recommendations element

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:185176

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:185174

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:185144

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:185152

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:185150

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:185148

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

search engine results count

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:185170

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:185163

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:185146

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:185189

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:185230

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:185223
