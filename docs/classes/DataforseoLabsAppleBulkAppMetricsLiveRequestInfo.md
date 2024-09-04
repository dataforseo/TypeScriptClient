[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAppleBulkAppMetricsLiveRequestInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveRequestInfo

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleBulkAppMetricsLiveRequestInfo()

> **new DataforseoLabsAppleBulkAppMetricsLiveRequestInfo**(`data`?): [`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Defined in

main.ts:113802

## Properties

### app\_ids?

> `optional` **app\_ids**: `string`[]

ids of the apps
required field
IDs of mobile applications on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320;
the maximum number of IDs you can specify in this field is 1000

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[`app_ids`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#app_ids)

#### Defined in

main.ts:113756

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:113792

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:113783

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:113774

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:113765

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#tag)

#### Defined in

main.ts:113798

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:113811

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:113837

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Defined in

main.ts:113830
