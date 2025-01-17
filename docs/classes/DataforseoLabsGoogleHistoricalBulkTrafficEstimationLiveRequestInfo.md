[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

Defined in: main.ts:111158

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo()

> **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

Defined in: main.ts:111233

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:111202

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 12 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`date_from`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:111209

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`date_to`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_to)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:111214

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#ignore_synonyms)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:111223

display results by item type
optional field
indicates the type of search results included in the response;
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#item_types)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:111196

language code
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:111188

full name of the language
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:111180

location code
if you use this field, you don’t have to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:111172

full name of the location
if you use this field, you don’t have to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:111229

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:111164

target domains and subdomains
required field
you can specify domains and subdomains in this field;
domains and subdomains should be specified without https:// and www.;
you can set up to 1000 domains or subdomains

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`targets`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111242

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:111276

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

Defined in: main.ts:111269

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)
