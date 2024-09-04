[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTrustpilotReviewsTaskPostRequestInfo

# Class: BusinessDataTrustpilotReviewsTaskPostRequestInfo

## Implements

- [`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTaskPostRequestInfo()

> **new BusinessDataTrustpilotReviewsTaskPostRequestInfo**(`data`?): [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Defined in

main.ts:215947

## Properties

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of reviews to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of twenty, because our system processes twenty reviews in a row
default value: 20
maximum value: 25000

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:215917

***

### domain?

> `optional` **domain**: `string`

domain of the local establishment
required field
domain of the local establishment on Trustpilot;
you can find the domain in the URL of every business listed on Trustpilot
example:
www.thepearlsource.com
https://www.trustpilot.com/review/www.thepearlsource.com

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#domain)

#### Defined in

main.ts:215894

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:215943

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:215933

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:215910

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting parameter
optional field
you can use this field to sort the results;
possible sorting parameters:
recency — most recent reviews first;
relevance — most relevant reviews first;
default value: relevance

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

main.ts:215902

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:215923

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:215956

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:215979

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Defined in

main.ts:215972
