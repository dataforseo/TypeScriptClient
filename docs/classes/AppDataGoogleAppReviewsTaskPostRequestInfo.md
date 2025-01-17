[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskPostRequestInfo

# Class: AppDataGoogleAppReviewsTaskPostRequestInfo

Defined in: main.ts:202790

## Implements

- [`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskPostRequestInfo()

> **new AppDataGoogleAppReviewsTaskPostRequestInfo**(`data`?): [`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)

Defined in: main.ts:202895

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:202797

id of the app
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
https://play.google.com/store/apps/details?id=org.telegram.messenger

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#app_id)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:202840

parsing depth
optional field
number of reviews to be returned in the API response;
we strongly recommend setting the parsing depth in the multiples of 150, because our system processes 150 reviews in a row;
default value: 150;
maximum value: 100000

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#depth)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:202825

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:202818

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:202811

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:202804

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:202891

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:202881

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:202875

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:202833

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#priority)

***

### rating?

> `optional` **rating**: `number`

Defined in: main.ts:202851

filter reviews by rating
optional field
you can use this field to filter the results;
possible types of filtering:
5 — return reviews with five-star rating only;
4 — return reviews with four-star rating only;
3 — return reviews with three-star rating only;
2 — return reviews with two-star rating only;
1 — return reviews with one-star rating only;
by default, the API returns all reviews regardless of the number of stars

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`rating`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#rating)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:202859

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
newest — sort by the most recent reviews;
most_relevant — sort by the most relevant reviews;
default rule: most_relevant

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:202865

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202904

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:202933

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)

Defined in: main.ts:202926

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)
