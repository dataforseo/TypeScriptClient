[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleSearchByImageTaskGetAdvancedResultInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTaskGetAdvancedResultInfo()

> **new SerpGoogleSearchByImageTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:49743

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:49718

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:49723

***

### image\_url?

> `optional` **image\_url**: `string`

URL specified in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#image_url)

#### Defined in

main.ts:49705

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
organic,
images

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:49732

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:49739

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:49736

***

### keyword?

> `optional` **keyword**: `string`

keyword Google associated with the specified image

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:49707

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:49715

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:49713

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:49711

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:49734

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:49726

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:49709

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:49752

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:49789

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:49782
