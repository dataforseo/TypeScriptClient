[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo

Defined in: main.ts:115640

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo()

> **new DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo**(`data`?): [`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

Defined in: main.ts:115696

#### Parameters

##### data?

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

## Properties

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:115686

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#item_types)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115677

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:115670

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115663

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:115655

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:115692

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:115647

target domains and websites
required field
you can specify domains, subdomains, and webpages in this field;
domains and subdomains should be specified without https:// and www.;
pages should be specified with absolute URL, including https:// and www.;
you can set up to 1000 domains, subdomains or webpages

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[`targets`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115705

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115736

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

Defined in: main.ts:115729

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)
