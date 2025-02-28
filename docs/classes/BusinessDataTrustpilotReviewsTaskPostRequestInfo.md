[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTaskPostRequestInfo

# Class: BusinessDataTrustpilotReviewsTaskPostRequestInfo

Defined in: main.ts:226730

## Implements

- [`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTaskPostRequestInfo()

> **new BusinessDataTrustpilotReviewsTaskPostRequestInfo**(`data`?): [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

Defined in: main.ts:226793

#### Parameters

##### data?

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:226761

parsing depth
optional field
number of reviews to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of twenty, because our system processes twenty reviews in a row
default value: 20
maximum value: 25000

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#depth)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:226738

domain of the local establishment
required field
domain of the local establishment on Trustpilot;
you can find the domain in the URL of every business listed on Trustpilot
example:
www.thepearlsource.com
https://www.trustpilot.com/review/www.thepearlsource.com

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#domain)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:226789

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

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:226778

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

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:226754

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#priority)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:226746

results sorting parameter
optional field
you can use this field to sort the results;
possible sorting parameters:
recency — most recent reviews first;
relevance — most relevant reviews first;
default value: relevance

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:226767

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226802

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:226825

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

Defined in: main.ts:226818

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)
