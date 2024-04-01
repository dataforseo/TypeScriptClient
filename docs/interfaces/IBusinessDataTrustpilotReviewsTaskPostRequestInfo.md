[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTrustpilotReviewsTaskPostRequestInfo

# Interface: IBusinessDataTrustpilotReviewsTaskPostRequestInfo

## Implemented by

- [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](../classes/BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#depth)
- [domain](IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#domain)
- [pingback\_url](IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#postback_url)
- [priority](IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#priority)
- [sort\_by](IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#sort_by)
- [tag](IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#tag)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of twenty, because our system processes twenty reviews in a row
default value: 20
maximum value: 25000

#### Defined in

main.ts:205010

___

### domain

• `Optional` **domain**: `string`

domain of the local establishment
required field
domain of the local establishment on Trustpilot;
you can find the domain in the URL of every business listed on Trustpilot
example:
www.thepearlsource.com
https://www.trustpilot.com/review/www.thepearlsource.com

#### Defined in

main.ts:204987

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:205036

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:205026

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Defined in

main.ts:205003

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameter
optional field
you can use this field to sort the results;
possible sorting parameters:
recency — most recent reviews first;
relevance — most relevant reviews first;
default value: relevance

#### Defined in

main.ts:204995

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:205016
