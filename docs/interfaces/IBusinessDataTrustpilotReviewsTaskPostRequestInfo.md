[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotReviewsTaskPostRequestInfo

# Interface: IBusinessDataTrustpilotReviewsTaskPostRequestInfo

Defined in: main.ts:226842

## Indexable

\[`key`: `string`\]: `any`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:226873

parsing depth
optional field
number of reviews to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of twenty, because our system processes twenty reviews in a row
default value: 20
maximum value: 25000

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:226850

domain of the local establishment
required field
domain of the local establishment on Trustpilot;
you can find the domain in the URL of every business listed on Trustpilot
example:
www.thepearlsource.com
https://www.trustpilot.com/review/www.thepearlsource.com

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:226901

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

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:226890

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

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:226866

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:226858

results sorting parameter
optional field
you can use this field to sort the results;
possible sorting parameters:
recency — most recent reviews first;
relevance — most relevant reviews first;
default value: relevance

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:226879

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
