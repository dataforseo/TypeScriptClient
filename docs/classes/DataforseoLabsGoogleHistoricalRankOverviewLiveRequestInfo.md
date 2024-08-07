**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo(data)

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Source

main.ts:101865

## Properties

### correlate?

> **`optional`** **correlate**: `boolean`

correlate data with previously obtained datasets
optional field
default value: true
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets
this parameter is intended to mitigate any inconsistencies that may result from changes to our database
we recommend always setting correlate to true

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`correlate`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#correlate)

#### Source

main.ts:101842

***

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 6 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`date_from`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_from)

#### Source

main.ts:101828

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`date_to`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_to)

#### Source

main.ts:101835

***

### ignore\_synonyms?

> **`optional`** **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true, only data based on core keywords will be returned, data for all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#ignore_synonyms)

#### Source

main.ts:101847

***

### include\_clickstream\_data?

> **`optional`** **include\_clickstream\_data**: `boolean`

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
Note: clickstream data is available for roughly 15% of keywords in the response
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#include_clickstream_data)

#### Source

main.ts:101855

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_code)

#### Source

main.ts:101822

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_name)

#### Source

main.ts:101814

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_code)

#### Source

main.ts:101806

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_name)

#### Source

main.ts:101798

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#tag)

#### Source

main.ts:101861

***

### target?

> **`optional`** **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#target)

#### Source

main.ts:101790

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:101874

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:101901

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Source

main.ts:101894
