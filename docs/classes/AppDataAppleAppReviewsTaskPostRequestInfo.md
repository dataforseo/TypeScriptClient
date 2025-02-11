[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppReviewsTaskPostRequestInfo

# Class: AppDataAppleAppReviewsTaskPostRequestInfo

Defined in: main.ts:208322

## Implements

- [`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppReviewsTaskPostRequestInfo()

> **new AppDataAppleAppReviewsTaskPostRequestInfo**(`data`?): [`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)

Defined in: main.ts:208419

#### Parameters

##### data?

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md)

#### Returns

[`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:208330

id of the app
required field
ID of the mobile application on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`app_id`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#app_id)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:208373

parsing depth
optional field
number of reviews to be returned in the API response;
we strongly recommend setting the parsing depth in the multiples of 50, because our system processes 50 reviews in a row;
default value: 50;
maximum value: 500

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#depth)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:208358

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:208351

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:208344

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:208337

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:208415

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:208404

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:208398

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:208366

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#priority)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:208381

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
most_recent — sort by the most recent reviews;
most_helpful — sort by the most relevant reviews;
default rule: most_helpful

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:208387

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataAppleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataAppleAppReviewsTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:208428

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:208456

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)

Defined in: main.ts:208449

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)
