[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYahooOrganicLiveRegularResultInfo

# Class: SerpYahooOrganicLiveRegularResultInfo

## Implements

- [`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveRegularResultInfo()

> **new SerpYahooOrganicLiveRegularResultInfo**(`data`?): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Defined in

main.ts:68205

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
You can use it to make sure that we provided exact results

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#check_url)

#### Defined in

main.ts:68183

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#datetime)

#### Defined in

main.ts:68188

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
Possible item types: organic

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#item_types)

#### Defined in

main.ts:68195

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items)

#### Defined in

main.ts:68201

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items_count)

#### Defined in

main.ts:68199

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#keyword)

#### Defined in

main.ts:68172

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#language_code)

#### Defined in

main.ts:68180

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#location_code)

#### Defined in

main.ts:68178

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_domain)

#### Defined in

main.ts:68176

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:68197

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#spell)

#### Defined in

main.ts:68191

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#type)

#### Defined in

main.ts:68174

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:68214

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:68250

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Defined in

main.ts:68243
