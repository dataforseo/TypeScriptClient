[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTaskPostRequestInfo

# Class: BusinessDataTripadvisorSearchTaskPostRequestInfo

Defined in: main.ts:228210

## Implements

- [`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTaskPostRequestInfo()

> **new BusinessDataTripadvisorSearchTaskPostRequestInfo**(`data`?): [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

Defined in: main.ts:228277

#### Parameters

##### data?

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:228245

parsing depth
optional field
number of search results to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of thirty because our systems processes thirty search results in a row;
default value: 30;
maximum value: 210

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#depth)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:228218

keyword
required field
the keyword you specify should indicate a business category, company name, or a prominent place;
you can specify up to 700 characters in the keyword filed;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#keyword)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:228230

search engine location code
required field if you don’t specify location_name
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:228224

full name of search engine location
required field if you don’t specify location_code
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:228273

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

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:228262

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

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:228238

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:228251

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:228286

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:228310

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

Defined in: main.ts:228303

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)
