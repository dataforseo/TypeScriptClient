**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo(data)

> **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Source

main.ts:103626

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 12 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`date_from`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_from)

#### Source

main.ts:103595

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`date_to`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_to)

#### Source

main.ts:103602

***

### ignore\_synonyms?

> **`optional`** **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#ignore_synonyms)

#### Source

main.ts:103607

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

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

#### Source

main.ts:103616

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_code)

#### Source

main.ts:103589

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_name)

#### Source

main.ts:103581

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
if you use this field, you don’t have to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_code)

#### Source

main.ts:103573

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
if you use this field, you don’t have to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_name)

#### Source

main.ts:103565

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#tag)

#### Source

main.ts:103622

***

### targets?

> **`optional`** **targets**: `string`[]

target domains and subdomains
required field
you can specify domains and subdomains in this field;
domains and subdomains should be specified without https:// and www.;
you can set up to 1000 domains or subdomains

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[`targets`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#targets)

#### Source

main.ts:103557

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:103635

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:103669

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Source

main.ts:103662
