[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo()

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Defined in

main.ts:102474

## Properties

### correlate?

> `optional` **correlate**: `boolean`

correlate data with previously obtained datasets
optional field
default value: true
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets
this parameter is intended to mitigate any inconsistencies that may result from changes to our database
we recommend always setting correlate to true

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`correlate`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#correlate)

#### Defined in

main.ts:102452

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 6 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`date_from`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_from)

#### Defined in

main.ts:102438

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`date_to`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_to)

#### Defined in

main.ts:102445

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true, only data based on core keywords will be returned, data for all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#ignore_synonyms)

#### Defined in

main.ts:102457

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#include_clickstream_data)

#### Defined in

main.ts:102464

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_code)

#### Defined in

main.ts:102432

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_name)

#### Defined in

main.ts:102424

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_code)

#### Defined in

main.ts:102416

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_name)

#### Defined in

main.ts:102408

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#tag)

#### Defined in

main.ts:102470

***

### target?

> `optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#target)

#### Defined in

main.ts:102400

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:102483

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:102510

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Defined in

main.ts:102503
