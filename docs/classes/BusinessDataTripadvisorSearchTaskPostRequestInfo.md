**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTaskPostRequestInfo

# Class: BusinessDataTripadvisorSearchTaskPostRequestInfo

## Implements

- [`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTaskPostRequestInfo(data)

> **new BusinessDataTripadvisorSearchTaskPostRequestInfo**(`data`?): [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

#### Source

main.ts:209778

## Properties

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of search results to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of thirty because our systems processes thirty search results in a row;
default value: 30;
maximum value: 210

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#depth)

#### Source

main.ts:209748

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
the keyword you specify should indicate a business category, company name, or a prominent place;
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#keyword)

#### Source

main.ts:209721

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#location_code)

#### Source

main.ts:209733

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#location_name)

#### Source

main.ts:209727

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

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

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:209774

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

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

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:209764

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#priority)

#### Source

main.ts:209741

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#tag)

#### Source

main.ts:209754

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:209787

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:209811

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

#### Source

main.ts:209804
