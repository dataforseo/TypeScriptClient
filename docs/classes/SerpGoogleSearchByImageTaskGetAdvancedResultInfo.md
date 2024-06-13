**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTaskGetAdvancedResultInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTaskGetAdvancedResultInfo(data)

> **new SerpGoogleSearchByImageTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Source

main.ts:50130

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:50105

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:50110

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL specified in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#image_url)

#### Source

main.ts:50092

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
organic,
images

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:50119

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:50126

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:50123

***

### keyword?

> **`optional`** **keyword**: `string`

keyword Google associated with the specified image

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:50094

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:50102

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:50100

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:50098

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:50121

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:50113

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:50096

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:50139

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:50176

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Source

main.ts:50169
