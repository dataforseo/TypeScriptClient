[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo

Defined in: main.ts:120838

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo()

> **new DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

Defined in: main.ts:120893

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

## Properties

### app\_ids?

> `optional` **app\_ids**: `string`[]

Defined in: main.ts:120847

ids of the app
required field
IDs of the mobile applications on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger;
the maximum number of IDs you can specify in this field is 1000

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`app_ids`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#app_ids)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:120883

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:120874

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:120865

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:120856

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:120889

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:120902

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:120928

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

Defined in: main.ts:120921

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)
