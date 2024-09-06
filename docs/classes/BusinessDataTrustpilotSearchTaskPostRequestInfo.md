[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTrustpilotSearchTaskPostRequestInfo

# Class: BusinessDataTrustpilotSearchTaskPostRequestInfo

## Implements

- [`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTaskPostRequestInfo()

> **new BusinessDataTrustpilotSearchTaskPostRequestInfo**(`data`?): [`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)

#### Defined in

main.ts:210544

## Properties

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of search results to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of twenty because our systems processes twenty search results in a row;
default value: 10;
maximum value: 140
Note: your account will be charged for every 10 search results returned, e.g. if you specify depth: 11, you will be charged as per 20 search results

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:210514

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
the keyword you specify should indicate a business category or company name;
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:210498

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

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:210540

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

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:210530

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

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:210506

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:210520

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:210553

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:210575

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)

#### Defined in

main.ts:210568
